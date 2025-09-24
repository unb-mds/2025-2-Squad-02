import { useState } from 'react';

export interface Gazette {
  id: string;
  territory_id: string;
  territory_name: string;
  state_code: string;
  date: string;
  url: string;
  content?: string;
  txt_url?: string;
  created_at?: string;
  edition_number?: string;
  is_extra_edition?: boolean;
  spacy_analysis?: any; // se vier análise NLP
}

export interface GazetteFilters {
  territory_name?: string;
  since?: string; // formato YYYY-MM-DD
  until?: string;
  size?: number;
}

export function useGazetteSearch() {
  const [results, setResults] = useState<Gazette[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(filters: GazetteFilters) {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (filters.territory_name) params.append('territory_name', filters.territory_name);
      if (filters.since) params.append('since', filters.since);
      if (filters.until) params.append('until', filters.until);
      if (filters.size) params.append('size', String(filters.size));

      const response = await fetch(`/api/v1/gazettes?${params.toString()}`);
      if (!response.ok) throw new Error('Falha ao buscar diários');
      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message ?? 'Erro desconhecido');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return { results, loading, error, search };
}