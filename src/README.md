# Backend - Projeto P.I.T.E.R

Guia de configuração e execução do ambiente de desenvolvimento local para a equipe.

- **Disciplina:** `[MDS, Engenharia de Software]`
- **Professora/Orientadora:** `[Carla]`

---

## 🛠️ Tecnologias
- **Linguagem:** JavaScript, Python
- **Framework:** (a decidir)
- **Banco de Dados:** JSON

---

## 🚀 Como Rodar o Projeto Localmente

Siga estes 4 passos para ter o projeto rodando na sua máquina.

### Passo 1: Pré-requisitos
Garanta que você tenha o básico instalado:
- Ubuntu ou sistema similar
- [Git](https://git-scm.com)
- [Python 3.10+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/)

---

### Passo 2: Instalação
Clone o repositório, crie o ambiente virtual e instale as dependências.

```bash
# Clone o projeto
git clone https://github.com/unb-mds/Projeto-P.I.T.E.R.git
cd Projeto-P.I.T.E.R

# Entre na branch do backend
git checkout Development

# Crie e ative o ambiente virtual
python -m venv venv

# Ativar no Linux/Mac:
source venv/bin/activate
# Ativar no Windows (PowerShell):
venv\Scripts\Activate.ps1

# Instale as dependências (inclui pydantic)
pip install -r requirements.txt

