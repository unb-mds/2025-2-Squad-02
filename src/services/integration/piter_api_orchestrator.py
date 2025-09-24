# src/services/integration/piter_api_orchestrator.py

from src.services.api.clients.querido_diario_client import QueridoDiarioClient, FilterParams
from src.services.api.clients.spacy_api_client import SpacyApiClient

class PiterApiOrchestrator:
    def __init__(self):
        self.qd_client = QueridoDiarioClient()
        self.spacy_client = SpacyApiClient(base_url="http://localhost:8001")

    async def get_enriched_gazette_data(self, filters: FilterParams):
        # 1. Busca os dados brutos no Querido Diário
        gazettes_response = await self.qd_client.fetch_gazettes(filters)
        
        enriched = []
        
        # 2. Corrige a chave para "gazettes" e itera sobre os resultados
        for gazette in gazettes_response.get("gazettes", []):
            # (Opcional) Chamar a análise do spaCy
            # analysis = await self.spacy_client.analyze_text(gazette["excerpt"])
            enriched.append({
                **gazette,
                # "spacy_analysis": analysis # Descomente quando a API spaCy estiver pronta
            })
            
        return enriched