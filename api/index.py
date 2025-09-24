from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from src.services.integration.piter_api_orchestrator import PiterApiOrchestrator

from fastapi import FastAPI


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

app = FastAPI()
orchestrator = PiterApiOrchestrator()

@app.get("/api/v1/gazettes")
def get_gazettes():
    enriched_gazettes = orchestrator.get_enriched_gazette_data()
    return enriched_gazettes
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}