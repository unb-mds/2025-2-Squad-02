// CAMADA 1: APRESENTAÇÃO - ORGANISM
// Seções complexas - Painel de Filtros (lado esquerdo da tela)

import React from 'react';
import { FilterGroup } from '../molecules/FilterGroup';
import { Button } from '../atoms/Button';
import { SearchFilters, AllowedState, AllowedCity, AllowedCategory } from '@/types';

interface FilterPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch?: () => void;
  isLoading?: boolean;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  onSearch,
  isLoading = false
}) => {
  // Verificação de segurança - usar valores padrão se filters for undefined
  const safeFilters = filters || {
    estado: 'Goiás' as AllowedState,
    municipio: 'Goiânia' as AllowedCity, 
    categoria: 'investimentos em pesquisa' as AllowedCategory,
    dataInicio: '2024-01-01',
    dataFim: new Date().toISOString().split('T')[0]
  };

  const updateFilter = <K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K]
  ) => {
    if (onFiltersChange) {
      onFiltersChange({
        ...safeFilters,
        [key]: value
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filtros:</h2>
      
      <FilterGroup
        estado={safeFilters.estado}
        municipio={safeFilters.municipio}
        categoria={safeFilters.categoria}
        dataInicio={safeFilters.dataInicio}
        dataFim={safeFilters.dataFim}
        onEstadoChange={(value) => updateFilter('estado', value)}
        onMunicipioChange={(value) => updateFilter('municipio', value)}
        onCategoriaChange={(value) => updateFilter('categoria', value)}
        onDataInicioChange={(value) => updateFilter('dataInicio', value)}
        onDataFimChange={(value) => updateFilter('dataFim', value)}
      />

      <div className="mt-6">
        <Button
          onClick={onSearch}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Pesquisando...' : 'Pesquisar'}
        </Button>
      </div>
    </div>
  );
};