// CAMADA 4: ACESSO A DADOS - CLIENTE QUERIDO DIÁRIO
// Cliente para API do Querido Diário (dados públicos brasileiros)

import axios, { AxiosResponse } from 'axios';
import { SearchFilters, QueridoDiarioResponse } from '@/types';

export class QueridoDiarioApiClient {
  private readonly baseUrl = 'https://queridodiario.ok.org.br/api';
  private readonly apiClient;

  constructor() {
    this.apiClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptor para logs
    this.apiClient.interceptors.request.use((config) => {
      console.log('Querido Diário Request:', config.url, config.params);
      return config;
    });

    this.apiClient.interceptors.response.use(
      (response) => {
        console.log('Querido Diário Response:', response.status, response.data?.gazettes?.length || 0, 'diários');
        return response;
      },
      (error) => {
        console.error('Querido Diário Error:', error.response?.status, error.message);
        return Promise.reject(error);
      }
    );
  }

  async searchGazettes(filters: SearchFilters): Promise<QueridoDiarioResponse[]> {
    try {
      // Mapear filtros para parâmetros da API
      const params = {
        querystring: this.buildQueryString(filters.categoria),
        territory_name: filters.municipio,
        since: filters.dataInicio,
        until: filters.dataFim,
        size: 100, // Máximo de resultados por página
        sort_by: 'descending_date'
      };

      console.log('Parâmetros da busca:', params);

      const response: AxiosResponse = await this.apiClient.get('/gazettes', { params });

      if (!response.data?.gazettes) {
        console.warn('Resposta da API não contém diários');
        return [];
      }

      // Processar e mapear os dados da API
      return response.data.gazettes.map((gazette: any): QueridoDiarioResponse => ({
        id: gazette.id || `${gazette.territory_id}_${gazette.date}`,
        territory_id: gazette.territory_id,
        territory_name: gazette.territory_name || filters.municipio,
        state_code: gazette.state_code || 'GO',
        date: gazette.date,
        url: gazette.url,
        content: gazette.txt_url ? '' : gazette.content || '', // Conteúdo será carregado separadamente se necessário
        txt_url: gazette.txt_url,
        created_at: gazette.created_at,
        edition_number: gazette.edition_number,
        is_extra_edition: gazette.is_extra_edition || false
      }));

    } catch (error) {
      console.error('Erro na busca de diários:', error);
      
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        if (status === 404) {
          console.log('Nenhum diário encontrado para os filtros especificados');
          return [];
        } else if (status === 429) {
          throw new Error('Muitas requisições. Tente novamente em alguns minutos.');
        } else if (status && status >= 500) {
          throw new Error('Erro interno do servidor Querido Diário. Tente novamente.');
        } else {
          throw new Error(`Erro na API Querido Diário: ${message}`);
        }
      }
      
      throw new Error('Erro de conexão com o Querido Diário');
    }
  }

  private buildQueryString(categoria: string): string {
    // Construir query string baseada na categoria
    const keywords: string[] = [];

    if (categoria === 'investimentos em pesquisa') {
      keywords.push(
        'investimento pesquisa',
        'financiamento pesquisa',
        'verba pesquisa',
        'recurso pesquisa',
        'fomento pesquisa',
        'desenvolvimento científico',
        'inovação tecnológica'
      );
    } else if (categoria === 'investimentos em eletrônicos') {
      keywords.push(
        'investimento eletrônico',
        'equipamento eletrônico',
        'sistema eletrônico',
        'tecnologia eletrônica',
        'aparelho eletrônico',
        'dispositivo eletrônico',
        'infraestrutura tecnológica'
      );
    }

    return keywords.join(' OR ');
  }

  async getGazetteContent(txtUrl: string): Promise<string> {
    try {
      const response = await axios.get(txtUrl, {
        timeout: 15000,
        responseType: 'text'
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao carregar conteúdo do diário:', error);
      throw new Error('Erro ao carregar conteúdo do diário');
    }
  }
}