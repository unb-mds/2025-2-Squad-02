// CAMADA 1: APRESENTAÇÃO - PAGE
// Página principal do P.I.T.E.R - Dashboard com filtros e gráfico

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { ChartContainer } from '@/components/organisms/ChartContainer';
import { SearchFilters, InvestmentData, STATES, CITIES, CATEGORIES } from '@/types';

export default function HomePage() {
  // Estado local simplificado
  const [filters, setFilters] = useState<SearchFilters>({
    estado: STATES.GOIAS,
    municipio: CITIES.GOIANIA,
    categoria: CATEGORIES.INVESTIMENTOS_PESQUISA,
    dataInicio: '2024-01-01',
    dataFim: new Date().toISOString().split('T')[0]
  });
  
  const [data, setData] = useState<InvestmentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFilters = useCallback((newFilters: SearchFilters) => {
    setFilters(newFilters);
  }, []);

  const performSearch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Executando busca com filtros:', filters);
      
      // Simular tempo de carregamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Gerar dados simulados baseados na categoria
      const baseData = [
        { month: '2024-01', baseCount: 3 },
        { month: '2024-02', baseCount: 7 },
        { month: '2024-03', baseCount: 5 },
        { month: '2024-04', baseCount: 9 },
        { month: '2024-05', baseCount: 12 },
        { month: '2024-06', baseCount: 8 },
        { month: '2024-07', baseCount: 15 },
        { month: '2024-08', baseCount: 11 },
        { month: '2024-09', baseCount: 6 }
      ];
      
      // Modificar dados com base na categoria selecionada
      const multiplier = filters.categoria === CATEGORIES.INVESTIMENTOS_PESQUISA ? 1.2 : 0.8;
      const cityMultiplier = filters.municipio === CITIES.GOIANIA ? 1.5 : 1.0;
      
      const simulatedData: InvestmentData[] = baseData.map(item => ({
        month: item.month,
        count: Math.round(item.baseCount * multiplier * cityMultiplier),
        category: filters.categoria
      }));
      
      setData(simulatedData);
      console.log(`Busca concluída: ${simulatedData.length} meses de dados`);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      console.error('Erro na busca:', err);
      setError(`Erro ao buscar dados: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  // Executar busca inicial quando o componente carrega
  useEffect(() => {
    performSearch();
  }, []); // Executar apenas uma vez na inicialização

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <MainLayout
      filters={filters}
      onFiltersChange={updateFilters}
      onSearch={performSearch}
      isLoading={isLoading}
    >
      <div className="space-y-6">
        {/* Título da seção */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Painel de Investimentos - P.I.T.E.R
          </h1>
          <p className="text-gray-600">
            Análise de investimentos em pesquisa e eletrônicos para Goiás e Goiânia
          </p>
        </div>

        {/* Container do gráfico */}
        <ChartContainer
          data={data}
          isLoading={isLoading}
        />

        {/* Estatísticas resumidas */}
        {!isLoading && data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Total de Registros
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {data.reduce((sum: number, item: any) => sum + item.count, 0)}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Período Analisado
              </h3>
              <p className="text-lg font-medium text-gray-700 mt-2">
                {data.length} meses
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Média Mensal
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {data.length > 0 
                  ? Math.round(data.reduce((sum: number, item: any) => sum + item.count, 0) / data.length)
                  : 0
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}