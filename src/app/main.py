# app/main.py

from fastapi import FastAPI, Query
from src.services.integration.piter_api_orchestrator import PiterApiOrchestrator
from src.services.api.clients.querido_diario_client import FilterParams # Importe o modelo de filtros

app = FastAPI()
orchestrator = PiterApiOrchestrator()

@app.get("/")
async def read_root():
    return {"Projeto": "P.I.T.E.R.", "Status": "Online"}

@app.get("/api/v1/gazettes")
async def get_gazettes(
    territory_ids: str = Query(..., description="Código IBGE do município"),
    published_since: str = Query(None, description="Data inicial (YYYY-MM-DD)"),
    published_until: str = Query(None, description="Data final (YYYY-MM-DD)"),
    querystring: str = Query(None, description="Palavra-chave para busca"),
    size: int = Query(5, description="Quantidade de resultados"),
):
    """
    Endpoint principal para buscar e enriquecer diários oficiais.
    """
    # Cria um objeto de filtros com os parâmetros recebidos
    filters = FilterParams(
        territory_ids=territory_ids,
        published_since=published_since,
        published_until=published_until,
        querystring=querystring,
        size=size
    )
    
    # Chama o orquestrador com os filtros
    enriched_gazettes = await orchestrator.get_enriched_gazette_data(filters)
    return enriched_gazettes