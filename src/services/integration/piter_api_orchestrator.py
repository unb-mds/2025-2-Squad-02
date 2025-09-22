from services.api.clients.querido_diario_client import QueridoDiarioClient
from services.api.clients.spacy_api_client import SpacyApiClient

class PiterApiOrchestrator:
    def __init__(self):
        self.qd_client = QueridoDiarioClient()
        self.spacy_client = SpacyApiClient(base_url="http://localhost:8001")  # Ajuste para URL da sua API spaCy

    def get_enriched_gazette_data(self, params=None):
        gazettes = self.qd_client.fetch_gazettes(params)
        enriched = []
        for gazette in gazettes.get("results", []):
            analysis = self.spacy_client.analyze_text(gazette["text"])
            enriched.append({
                **gazette,
                "spacy_analysis": analysis
            })
        return enriched