import httpx

class SpacyApiClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def analyze_text(self, text: str):
        response = httpx.post(f"{self.base_url}/analyze", json={"text": text})
        response.raise_for_status()
        return response.json()