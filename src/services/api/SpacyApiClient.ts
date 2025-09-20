// CAMADA 4: ACESSO A DADOS - CLIENTE SPACY NLP
// Cliente para análise de texto com Spacy AI

import axios, { AxiosResponse } from 'axios';
import { SpacyAnalysisResult, AllowedCategory, CATEGORIES } from '@/types';

export class SpacyApiClient {
  private readonly baseUrl = 'https://api.spacy.io/v1';
  private readonly apiClient;

  constructor() {
    this.apiClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
        // Adicionar API key se necessário
        // 'Authorization': `Bearer ${process.env.SPACY_API_KEY}`
      },
    });

    // Interceptors para logs
    this.apiClient.interceptors.request.use((config) => {
      console.log('Spacy Request:', config.url, 'text length:', config.data?.text?.length || 0);
      return config;
    });

    this.apiClient.interceptors.response.use(
      (response) => {
        console.log('Spacy Response:', response.status, response.data?.entities?.length || 0, 'entidades');
        return response;
      },
      (error) => {
        console.error('Spacy Error:', error.response?.status, error.message);
        return Promise.reject(error);
      }
    );
  }

  async analyzeText(text: string): Promise<SpacyAnalysisResult> {
    try {
      // Limitar tamanho do texto para evitar timeouts
      const truncatedText = text.length > 5000 ? text.substring(0, 5000) + '...' : text;
      
      console.log(`Analisando texto de ${truncatedText.length} caracteres`);

      // Como não temos acesso real à API Spacy, vamos simular a análise
      // Em produção, isso seria uma chamada real para a API
      return this.simulateSpacyAnalysis(truncatedText);

      /* Implementação real seria:
      const response: AxiosResponse = await this.apiClient.post('/analyze', {
        text: truncatedText,
        model: 'pt_core_news_lg', // Modelo português
        components: ['ner', 'textcat'], // Named Entity Recognition + Text Classification
      });

      return this.mapSpacyResponse(response.data);
      */

    } catch (error) {
      console.error('Erro na análise Spacy:', error);
      
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        if (status === 429) {
          throw new Error('Limite de requisições Spacy excedido. Tente novamente.');
        } else if (status && status >= 500) {
          throw new Error('Erro interno do servidor Spacy. Tente novamente.');
        } else {
          throw new Error(`Erro na API Spacy: ${message}`);
        }
      }
      
      throw new Error('Erro de conexão com o Spacy NLP');
    }
  }

  private simulateSpacyAnalysis(text: string): SpacyAnalysisResult {
    console.log('Simulando análise Spacy (modo desenvolvimento)');
    
    const entities: Array<{text: string; label: string; start: number; end: number}> = [];
    const lowercaseText = text.toLowerCase();

    // Simular detecção de entidades relacionadas a investimentos em pesquisa
    const researchKeywords = ['pesquisa', 'científico', 'investigação', 'estudo', 'laboratório', 'universidade', 'inovação'];
    researchKeywords.forEach(keyword => {
      const index = lowercaseText.indexOf(keyword);
      if (index !== -1) {
        entities.push({
          text: keyword,
          label: 'RESEARCH_INVESTMENT',
          start: index,
          end: index + keyword.length
        });
      }
    });

    // Simular detecção de entidades relacionadas a investimentos em eletrônicos
    const electronicsKeywords = ['eletrônico', 'computador', 'sistema', 'equipamento', 'tecnologia', 'digital'];
    electronicsKeywords.forEach(keyword => {
      const index = lowercaseText.indexOf(keyword);
      if (index !== -1) {
        entities.push({
          text: keyword,
          label: 'ELECTRONICS_INVESTMENT',
          start: index,
          end: index + keyword.length
        });
      }
    });

    // Classificar o texto baseado nas entidades encontradas
    let classification: AllowedCategory = CATEGORIES.INVESTIMENTOS_PESQUISA;
    let confidence = 0.5;

    const researchCount = entities.filter(e => e.label === 'RESEARCH_INVESTMENT').length;
    const electronicsCount = entities.filter(e => e.label === 'ELECTRONICS_INVESTMENT').length;

    if (electronicsCount > researchCount) {
      classification = CATEGORIES.INVESTIMENTOS_ELETRONICOS;
      confidence = Math.min(0.9, 0.5 + (electronicsCount * 0.1));
    } else if (researchCount > 0) {
      classification = CATEGORIES.INVESTIMENTOS_PESQUISA;
      confidence = Math.min(0.9, 0.5 + (researchCount * 0.1));
    }

    return {
      entities,
      classification,
      confidence,
      processed_text: text.substring(0, 500) + (text.length > 500 ? '...' : '')
    };
  }

  private mapSpacyResponse(data: any): SpacyAnalysisResult {
    // Mapear resposta real da API Spacy para nossa interface
    const entities = (data.entities || []).map((entity: any) => ({
      text: entity.text,
      label: this.mapEntityLabel(entity.label),
      start: entity.start,
      end: entity.end
    }));

    // Determinar classificação baseada nas entidades
    const hasResearch = entities.some((e: any) => e.label.includes('RESEARCH'));
    const hasElectronics = entities.some((e: any) => e.label.includes('ELECTRONICS'));

    let classification: AllowedCategory = CATEGORIES.INVESTIMENTOS_PESQUISA;
    if (hasElectronics && !hasResearch) {
      classification = CATEGORIES.INVESTIMENTOS_ELETRONICOS;
    }

    return {
      entities,
      classification,
      confidence: data.confidence || 0.5,
      processed_text: data.processed_text || ''
    };
  }

  private mapEntityLabel(originalLabel: string): string {
    // Mapear labels do Spacy para nossos labels customizados
    const labelMapping: { [key: string]: string } = {
      'ORG': 'ORGANIZATION',
      'MONEY': 'MONETARY_VALUE',
      'PERSON': 'PERSON',
      'GPE': 'LOCATION',
      // Adicionar outros mapeamentos conforme necessário
    };

    return labelMapping[originalLabel] || originalLabel;
  }
}