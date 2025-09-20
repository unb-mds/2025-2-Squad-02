// CAMADA 3: INTEGRAÇÃO - HOOK NLP
// Hook para análise de texto com Spacy AI

'use client';

import { useState } from 'react';
import { SpacyApiClient } from '@/services/api/SpacyApiClient';
import { SpacyAnalysisResult } from '@/types';

const apiClient = new SpacyApiClient();

export function useNlpAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeText = async (text: string): Promise<SpacyAnalysisResult> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Analisando texto com Spacy NLP...');
      const result = await apiClient.analyzeText(text);
      console.log('Análise concluída:', result.entities.length, 'entidades encontradas');
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro na análise NLP';
      console.error('Erro no useNlpAnalysis:', err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    analyzeText,
    isLoading,
    error
  };
}