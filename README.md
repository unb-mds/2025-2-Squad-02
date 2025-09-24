````md
# Projeto P.I.T.E.R – Backend (Implementar API)

Plataforma de Integração e Transparência em Educação e Recursos (P.I.T.E.R)

---

## Visão Geral

Este módulo corresponde ao **Backend** do P.I.T.E.R, implementado em **Python** utilizando o framework **FastAPI**.  
O objetivo da API é disponibilizar de forma organizada e acessível os dados públicos municipais, permitindo consultas, filtros e análises que poderão ser consumidas pelo frontend ou outras aplicações externas.

---

## Funcionalidades

- API REST desenvolvida em **FastAPI**.  
- Endpoints para consulta de diários oficiais e metadados relacionados.  
- Suporte a filtros (ex.: município, categoria, período).  
- Estrutura pronta para integração com fontes externas (ex.: Querido Diário).  
- Documentação interativa automática em `/docs` (Swagger UI) e `/redoc`.

---

## Tecnologias Utilizadas

- **Linguagem:** Python 3.10+  
- **Framework:** FastAPI  
- **Servidor ASGI:** Uvicorn  
- **Gerenciamento de pacotes:** pip / requirements.txt  
- **Outros:** Pydantic (validação de dados), requests (requisições HTTP externas)

---

## Instalação e Execução

### Pré-requisitos

- Python 3.10 ou superior  
- pip (gerenciador de pacotes)  

### Passos para rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/unb-mds/Projeto-P.I.T.E.R.git

# Entrar no branch
git checkout Backend-ImplementarAPI

# Entrar na pasta do backend
cd Projeto-P.I.T.E.R/src

# Criar ambiente virtual (opcional, mas recomendado)
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# Instalar dependências
pip install -r requirements.txt

# Rodar servidor local
uvicorn main:app --reload
````

A API ficará acessível em:
👉 `http://127.0.0.1:8000`

---

## Endpoints Principais

| Método | Rota             | Descrição                                                                   |
| ------ | ---------------- | --------------------------------------------------------------------------- |
| `GET`  | `/`              | Endpoint inicial de teste (Hello, World)                                    |
| `GET`  | `/gazettes`      | Retorna lista de diários oficiais com filtros (município, categoria, datas) |
| `GET`  | `/gazettes/{id}` | Detalhes de um diário oficial específico                                    |

> A documentação completa está disponível em:
>
> * Swagger UI → `http://127.0.0.1:8000/docs`
> * Redoc → `http://127.0.0.1:8000/redoc`

---

## Estrutura do Projeto

```
src/
├── main.py              # Ponto de entrada da aplicação FastAPI
├── routes/              # Definição das rotas da API
├── services/            # Serviços e integrações externas
├── models/              # Definições de dados (Pydantic)
├── tests/               # Testes unitários e de integração
├── README.md            # Este arquivo
└── requirements.txt     # Dependências do backend
```

---

## Desenvolvimento

* **Estilo de código:** PEP8
* **Validação de dados:** Pydantic
* **Documentação automática:** FastAPI gera Swagger e Redoc nativos
* **Testes:** `pytest` (quando implementados)

---

## Futuras Melhorias

* Integração completa com a API Querido Diário.
* Paginação e caching de resultados.
* Autenticação/autorização em endpoints restritos.
* Geração de relatórios a partir dos dados processados.
* Deploy em ambiente de nuvem (Railway, Heroku, ou outra plataforma).

---

## Equipe

Desenvolvido pela equipe **UnB-MDS**.

---

## Licença

MIT

```

