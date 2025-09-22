import httpx

class QueridoDiarioClient:
    BASE_URL = "https://queridodiario.ok.org.br/api/gazettes"  # Ajuste se necessário

    def fetch_gazettes(self, params=None):
        response = httpx.get(self.BASE_URL, params=params)
        response.raise_for_status()
        return response.json()