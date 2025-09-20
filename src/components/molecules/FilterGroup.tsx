// CAMADA 1: APRESENTAÇÃO - MOLECULE
// Combinações de elementos - Grupo de Filtros

import React from 'react';
import { Select } from '../atoms/Select';
import { Input } from '../atoms/Input';
import { ALLOWED_STATES, ALLOWED_CITIES, ALLOWED_CATEGORIES, AllowedState, AllowedCity, AllowedCategory } from '@/types';

interface FilterGroupProps {
  estado: AllowedState;
  municipio: AllowedCity;
  categoria: AllowedCategory;
  dataInicio: string;
  dataFim: string;
  onEstadoChange: (value: AllowedState) => void;
  onMunicipioChange: (value: AllowedCity) => void;
  onCategoriaChange: (value: AllowedCategory) => void;
  onDataInicioChange: (value: string) => void;
  onDataFimChange: (value: string) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  estado,
  municipio,
  categoria,
  dataInicio,
  dataFim,
  onEstadoChange,
  onMunicipioChange,
  onCategoriaChange,
  onDataInicioChange,
  onDataFimChange
}) => {
  const estadoOptions = ALLOWED_STATES.map(state => ({ value: state, label: state }));
  const municipioOptions = ALLOWED_CITIES.map(city => ({ value: city, label: city }));
  const categoriaOptions = ALLOWED_CATEGORIES.map(cat => ({ value: cat, label: cat }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
        <Select
          options={estadoOptions}
          value={estado}
          onChange={(value) => onEstadoChange(value as AllowedState)}
          placeholder="Estado"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Município</label>
        <Select
          options={municipioOptions}
          value={municipio}
          onChange={(value) => onMunicipioChange(value as AllowedCity)}
          placeholder="Município"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
        <Select
          options={categoriaOptions}
          value={categoria}
          onChange={(value) => onCategoriaChange(value as AllowedCategory)}
          placeholder="Categoria"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">De:</label>
        <Input
          type="date"
          value={dataInicio}
          onChange={onDataInicioChange}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Até:</label>
        <Input
          type="date"
          value={dataFim}
          onChange={onDataFimChange}
          className="w-full"
        />
      </div>
    </div>
  );
};