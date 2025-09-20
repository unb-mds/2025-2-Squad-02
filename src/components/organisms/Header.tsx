// CAMADA 1: APRESENTAÇÃO - ORGANISM
// Seções complexas - Header do P.I.T.E.R

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">P.I.T.E.R</h1>
        <nav>
          <a href="#" className="text-white hover:text-gray-200">sobre nós</a>
        </nav>
      </div>
    </header>
  );
};