import React, { useState } from 'react';
import { useGazetteSearch, GazetteFilters } from '@/hooks/useGazetteSearch';

export function GazetteSearch() {
  const { results, loading, error, search } = useGazetteSearch();
  const [filters, setFilters] = useState<GazetteFilters>({
    territory_name: '', since: '', until: '', size: 10
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    search(filters);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="territory_name" placeholder="Município" onChange={handleInput} />
        <input name="since" type="date" onChange={handleInput} />
        <input name="until" type="date" onChange={handleInput} />
        <input name="size" type="number" min={1} max={100} onChange={handleInput} />
        <button type="submit" disabled={loading}>Pesquisar</button>
      </form>
      {error && <div style={{ color: 'red' }}>Erro: {error}</div>}
      <ul>
        {results.map(gz => (
          <li key={gz.id}>
            <a href={gz.url} target="_blank" rel="noopener noreferrer">
              {gz.territory_name} — {gz.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}