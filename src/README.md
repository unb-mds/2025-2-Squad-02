# Backend - Projeto P.I.T.E.R

Guia de configuração e execução do ambiente de desenvolvimento local para a equipe.

  - **Disciplina:** `MDS, Engenharia de Software`
  - **Professora/Orientadora:** `Carla`

-----

## 🛠️ Tecnologias

  - **Linguagem:** Python
  - **Framework:** FastAPI
  - **Validação de Dados:** Pydantic
  - **Servidor ASGI:** Uvicorn
  - **Banco de Dados:** JSON (gerado dinamicamente pela API)

-----

## 🚀 Como Rodar o Projeto Localmente

Siga estes 4 passos para ter o projeto rodando na sua máquina.

### Passo 1: Pré-requisitos

Garanta que você tenha o básico instalado:

  - Ubuntu ou sistema similar (WSL no Windows funciona bem)
  - [Git](https://git-scm.com)
  - [Python 3.10+](https://www.python.org/downloads/)
  - [pip](https://pip.pypa.io/en/stable/)

-----

### Passo 2: Instalação

Clone o repositório, crie o ambiente virtual e instale as dependências.

```bash
# Clone o projeto
git clone https://github.com/unb-mds/Projeto-P.I.T.E.R.git
cd Projeto-P.I.T.E.R

# Entre na branch de desenvolvimento do backend
# (Ajuste o nome da branch se necessário)
git checkout branch-criada

# Crie e ative o ambiente virtual
python3 -m venv venv

# Ativar no Linux/Mac:
source venv/bin/activate
# Ativar no Windows (PowerShell):
# venv\Scripts\Activate.ps1

# Instale as dependências do projeto
pip install -r requirements.txt

# Baixe o modelo de linguagem em português para o spaCy
python -m spacy download pt_core_news_lg
```

-----

### Passo 3: Configuração do Ambiente

A API precisa de algumas variáveis de ambiente para funcionar, como a URL da API do spaCy.

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Adicione as seguintes variáveis a ele (use os valores corretos para o seu ambiente):

<!-- end list -->

```env
# Exemplo de arquivo .env
SPACY_API_URL="http://localhost:8001" # URL onde seu serviço spaCy irá rodar
```

-----

### Passo 4: Execução

Com tudo instalado e configurado, inicie o servidor FastAPI.

```bash
# A partir da raiz do projeto, execute o Uvicorn
# 'src.app.main:app' aponta para o objeto 'app' no arquivo 'main.py' dentro da pasta 'app'
# '--reload' reinicia o servidor automaticamente quando você salva uma alteração no código
uvicorn src.app.main:app --reload
```

O terminal deverá mostrar uma mensagem indicando que o servidor está rodando, geralmente em `http://127.0.0.1:8000`.

### Exemplo de acesso aos dados via API

Com o servidor rodando localmente, acesse no navegador ou via ferramentas como Postman/cURL:

```
http://127.0.0.1:8000/api/v1/gazettes?territory_ids=5208707&published_since=2024-02-19&published_until=2024-03-11&size=5
```

**Exemplo de resposta JSON:**
```json
[
  {
    "territory_id": "5208707",
    "date": "2024-03-08",
    "scraped_at": "2024-03-09T22:52:58.147631",
    "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-03-08/31cd73c20ee923dd9f3c2b20d93125278763d77f.pdf",
    "territory_name": "Goiânia",
    "state_code": "GO",
    "excerpts": [],
    "edition": "8245",
    "is_extra_edition": true,
    "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-03-08/31cd73c20ee923dd9f3c2b20d93125278763d77f.txt"
  },
  {
    "territory_id": "5208707",
    "date": "2024-03-11",
    "scraped_at": "2024-03-11T23:29:48.162641",
    "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-03-11/f401d9e9501c3192c797832ed44e964d54a3c38d.pdf",
    "territory_name": "Goiânia",
    "state_code": "GO",
    "excerpts": [],
    "edition": "8246",
    "is_extra_edition": false,
    "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-03-11/f401d9e9501c3192c797832ed44e964d54a3c38d.txt"
  },
  {
    "territory_id": "5208707",
    "date": "2024-02-28",
    "scraped_at": "2024-02-29T23:05:23.763574",
    "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-28/7579e17ed2c87095960b836bf637bbee89a4ec6b.pdf",
    "territory_name": "Goiânia",
    "state_code": "GO",
    "excerpts": [],
    "edition": "8238",
    "is_extra_edition": false,
    "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-28/7579e17ed2c87095960b836bf637bbee89a4ec6b.txt"
  },
  {
    "territory_id": "5208707",
    "date": "2024-02-20",
    "scraped_at": "2024-02-20T23:44:32.484490",
    "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-20/d6a14923f908716e36dab88408de1377bc29f3a9.pdf",
    "territory_name": "Goiânia",
    "state_code": "GO",
    "excerpts": [],
    "edition": "8231",
    "is_extra_edition": false,
    "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-20/d6a14923f908716e36dab88408de1377bc29f3a9.txt"
  },
  {
    "territory_id": "5208707",
    "date": "2024-02-19",
    "scraped_at": "2024-02-20T23:44:32.494303",
    "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-19/ccb0b1d55d946e5cdeab383a71afe91644946f02.pdf",
    "territory_name": "Goiânia",
    "state_code": "GO",
    "excerpts": [],
    "edition": "8230",
    "is_extra_edition": false,
    "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/5208707/2024-02-19/ccb0b1d55d946e5cdeab383a71afe91644946f02.txt"
  }
]
```

> Se publicar o backend, troque `127.0.0.1:8000` pela URL do seu serviço (exemplo: `https://seu-backend.onrender.com`).

https://fastapi.tiangolo.com/ 
Este site contém todos os tutoriais iniciais para rodar o fastAPI.
