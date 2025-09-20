// CAMADA 1: APRESENTAÇÃO - ORGANISM
// Seções complexas - Container do Gráfico (lado direito da tela)

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { InvestmentData } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartContainerProps {
  data: InvestmentData[];
  isLoading: boolean;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  data,
  isLoading
}) => {
  const chartData = {
    labels: (data || []).map(item => {
      const date = new Date(item.month + '-01');
      return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
    }),
    datasets: [
      {
        label: 'Investimentos',
        data: (data || []).map(item => item.count),
        backgroundColor: 'rgba(107, 114, 128, 0.8)',
        borderColor: 'rgba(107, 114, 128, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow h-96 flex items-center justify-center">
        <p className="text-gray-500">Carregando dados...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow h-96 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Nenhum dado encontrado</p>
          <p className="text-sm text-gray-400">Clique em "Pesquisar" no painel lateral para buscar dados</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Bar data={chartData} options={options} />
    </div>
  );
};