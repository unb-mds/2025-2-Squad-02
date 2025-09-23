# src/services/api/clients/querido_diario_client.py

import httpx
from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import date

class FilterParams(BaseModel):
    """Modelo para os parâmetros de filtro da API do Querido Diário."""
    territory_ids: Optional[str] = None
    published_since: Optional[date] = None
    published_until: Optional[date] = None
    querystring: Optional[str] = None
    size: Optional[int] = 10

class QueridoDiarioClient:
    BASE_URL = "https://queridodiario.ok.org.br/api/gazettes"

    async def fetch_gazettes(self, filters: FilterParams) -> Dict[str, Any]:
        # Converte o modelo Pydantic para um dicionário, removendo valores nulos
        params = filters.dict(exclude_none=True)
        
        async with httpx.AsyncClient() as client:
            response = await client.get(self.BASE_URL, params=params)
            response.raise_for_status()
            print("Resposta do Querido Diário:", response.json()) # Ótimo para depuração
            return response.json()