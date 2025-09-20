// SUPORTE: Definições TypeScript
// Tipos para todo o projeto P.I.T.E.R

// Estados e Municípios permitidos
export const ALLOWED_STATES = ['Goiás'] as const;
export const ALLOWED_CITIES = ['Goiás', 'Goiânia'] as const;
export const ALLOWED_CATEGORIES = [
  'investimentos em pesquisa',
  'investimentos em eletrônicos'
] as const;

// Constantes para facilitar acesso
export const STATES = {
  GOIAS: 'Goiás' as const
};

export const CITIES = {
  GOIAS: 'Goiás' as const,
  GOIANIA: 'Goiânia' as const
};

export const CATEGORIES = {
  INVESTIMENTOS_PESQUISA: 'investimentos em pesquisa' as const,
  INVESTIMENTOS_ELETRONICOS: 'investimentos em eletrônicos' as const
};

export type AllowedState = typeof ALLOWED_STATES[number];
export type AllowedCity = typeof ALLOWED_CITIES[number];
export type AllowedCategory = typeof ALLOWED_CATEGORIES[number];

// Filtros de busca
export interface SearchFilters {
  estado: AllowedState;
  municipio: AllowedCity;
  categoria: AllowedCategory;
  dataInicio: string; // YYYY-MM-DD
  dataFim: string; // YYYY-MM-DD
}

// Dados brutos da API do Querido Diário
export interface QueridoDiarioResponse {
  id: string;
  territory_id: string;
  territory_name: string;
  state_code: string;
  date: string;
  url: string;
  content: string;
  txt_url?: string;
  created_at: string;
  edition_number?: string;
  is_extra_edition: boolean;
}

// Dados processados pelo Spacy
export interface SpacyAnalysisResult {
  entities: Array<{
    text: string;
    label: string;
    start: number;
    end: number;
  }>;
  classification: AllowedCategory;
  confidence: number;
  processed_text: string;
}

// Dados para os gráficos
export interface InvestmentData {
  month: string; // YYYY-MM
  count: number;
  category: AllowedCategory;
}

// Estado da aplicação
export interface AppState {
  filters: SearchFilters;
  isLoading: boolean;
  data: InvestmentData[];
  error: string | null;
}