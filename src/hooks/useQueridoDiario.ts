// CAMADA 3: INTEGRAÇÃO - HOOK QUERIDO DIÁRIO
// Hook para interagir com a API do Querido Diário

'use client';

import { useState } from 'react';
import { QueridoDiarioApiClient } from '@/services/api/QueridoDiarioApiClient';
import { SearchFilters, QueridoDiarioResponse } from '@/types';

const apiClient = new QueridoDiarioApiClient();

export function useQueridoDiario() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchGazettes = async (filters: SearchFilters): Promise<QueridoDiarioResponse[]> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Buscando diários com filtros:', filters);
      const results = await apiClient.searchGazettes(filters);
      console.log(`Encontrados ${results.length} diários`);
      return results;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao buscar diários';
      console.error('Erro no useQueridoDiario:', err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchGazettes,
    isLoading,
    error
  };
}