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
# 'app.main:app' aponta para o objeto 'app' no arquivo 'main.py' dentro da pasta 'app'
# '--reload' reinicia o servidor automaticamente quando você salva uma alteração no código
uvicorn app.main:app --reload
```

O terminal deverá mostrar uma mensagem indicando que o servidor está rodando, geralmente em `http://127.0.0.1:8000`.


https://fastapi.tiangolo.com/ 
Este site contém todos os tutoriais iniciais para rodar o fastAPI.
