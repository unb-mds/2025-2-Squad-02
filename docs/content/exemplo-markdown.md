---
title: "Guia Completo de Markdown - Exemplo"
description: "Arquivo de exemplo mostrando todos os recursos de Markdown disponíveis no Hugo"
date: 2025-09-11
draft: false
tags: ["markdown", "exemplo", "documentacao"]
author: "Equipe P.I.T.E.R"
---

# Guia Completo de Markdown

Este é um arquivo de exemplo que demonstra **todos os recursos** disponíveis no Markdown para o Hugo.

## Blocos de Conteúdo

### 1. Texto e Formatação Básica

**Texto em negrito** e *texto em itálico* são muito úteis.

Você também pode usar ~~texto riscado~~ e `código inline`.

### 2. Listas

#### Lista não ordenada:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

#### Lista ordenada:
1. Primeiro passo
2. Segundo passo
   1. Sub-passo A
   2. Sub-passo B
3. Terceiro passo

### 3. Links e Imagens

- [Link para GitHub](https://github.com/unb-mds/Projeto-P.I.T.E.R)
- [Link interno para Sprints](/sprint/)
- [Link interno para Arquitetura](/arquitetura/)

### 4. Citações

> "A inteligência artificial é a nova eletricidade da nossa era."
> 
> — Andrew Ng

### 5. Código

#### Código inline:
Use `npm install` para instalar dependências.

#### Bloco de código Python:
```python
def buscar_investimentos(query):
    """
    Busca investimentos em IA usando algoritmos inteligentes
    """
    resultados = []
    for investimento in database:
        if query.lower() in investimento.nome.lower():
            resultados.append(investimento)
    return resultados
```

#### Bloco de código JavaScript:
```javascript
// Função para filtrar dados
const filtrarInvestimentos = (dados, filtro) => {
    return dados.filter(item => 
        item.categoria.includes(filtro)
    );
};
```

### 6. Tabelas

| Tecnologia | Status | Progresso | Responsável |
|------------|---------|-----------|-------------|
| React      | Concluído | 100% | Ana |
| Python     | Em Desenvolvimento | 75% | João |
| Docker     | Planejado | 10% | Maria |

### 7. Elementos HTML (funcionam no Markdown!)

<div class="alert alert-info">
<strong>Dica:</strong> Você pode usar HTML diretamente no Markdown!
</div>

<details>
<summary>Clique para expandir</summary>

Conteúdo oculto que aparece quando expandido!

</details>

### 8. Símbolos e Listas com Marcadores

- Objetivos claros
- Análise de dados  
- Busca inteligente
- Inovação tecnológica

### 9. Divisores

---

## Como o Hugo Processa Este Arquivo

### Front Matter (Cabeçalho YAML)
```yaml
---
title: "Título da página"
description: "Descrição para SEO"
date: 2025-09-11
draft: false  # true = não publica
tags: ["tag1", "tag2"]
---
```

### Conteúdo Markdown
Todo texto após o `---` é convertido para HTML usando os layouts em `layouts/`.

### Resultado Final
- **Arquivo fonte**: `content/exemplo-markdown.md`
- **URL gerada**: `/exemplo-markdown/`
- **HTML gerado**: `public/exemplo-markdown/index.html`

---

## Recursos Avançados do Hugo

### Recursos Avançados do Hugo

**Observação**: Shortcodes personalizados requerem definição nos layouts.

### Variáveis do Site (processadas pelo Hugo)

- **Título do site**: Será substituído pelo valor de .Site.Title
- **Data de criação**: Será formatada automaticamente
- **Tags**: Aparecerão como links navegáveis

---

## Checklist de Publicação

Para que este arquivo apareça no GitHub Pages:

- [x] Arquivo criado em `content/`
- [ ] Executar `hugo --cleanDestinationDir`  
- [ ] Copiar arquivos para diretório raiz
- [ ] Commit e push para `gh-pages`

---

*Este arquivo demonstra a flexibilidade total do Markdown no Hugo!*