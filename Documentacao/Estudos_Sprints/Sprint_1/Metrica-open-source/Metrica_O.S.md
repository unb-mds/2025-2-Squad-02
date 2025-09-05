# Métricas de Open Source - Resumo

## O que é Open Source?  

Antes de entender o que é uma métrica de open source, precisamos entender primeiro o que é **Open Source**:

**Open Source:**  
Segundo a Amazon Web Service (AWS), Open Source, ou em português, Código Aberto, é definido como:  

> “um modelo de produção descentralizado que permite a qualquer pessoa modificar e compartilhar tecnologias porque seu projeto é acessível ao público. [...] que se baseia nos princípios de troca gratuita de informações, prototipagem rápida e desenvolvimento colaborativo.”

Sendo assim, é um código em que a comunidade pode interagir com ele, buscando sempre melhorar o projeto e trazer novas alterações.  
O **Linux** é um dos exemplos mais conhecidos de software de código aberto. A intenção de seu autor, **Linus Torvalds**, era de que, com contribuição externa, o sistema operacional pudesse ter evolução constante.  
Hoje temos variações do Linux, conhecidas como **distros**, como: Arch Linux, Ubuntu, Fedora e outros.  

---

## Princípios de código aberto  

Ainda segundo a AWS, os princípios de OS baseiam-se em:  

- **Comunidade:** Desenvolvimento baseado na contribuição de várias pessoas em prol de um objetivo comum.  
- **Transparência:** As informações do código são disponibilizadas de forma livre para favorecer “tomadas de decisão eficazes e ampliar ideias e descobertas uns dos outros.”  
- **Colaboração aberta:** Criação de projetos que incentivam o “trabalho em equipe” e não permitem que apenas uma pessoa faça todo trabalho.  
- **Prototipagem rápida:** O OS baseia-se em criação constante de protótipos por cada membro, buscando evolução.  
- **Meritocracia inclusiva:** “As melhores ideias recebem mais apoio e esforço da comunidade de código aberto.” Isso não significa que apenas ideias de uma pessoa serão levadas em consideração, mas que tudo será avaliado até se chegar a um consenso.  

**Pontos principais:**  
- “Inspeção, modificação e aprimoramento”  

**Distribuição do código aberto:** Para que possamos criar um código aberto, precisamos de:  
- Nenhuma restrição à venda ou distribuição do software como parte de uma distribuição agregada;  
- Inclusão e permissão da distribuição do **código-fonte**;  
- Permissão de modificações e trabalhos derivados;  
- Direitos aplicáveis a todos, sem discriminação.  

---

## Métricas de Open Source  

### Por que utilizar métricas de Open Source?  

Já que entendemos o que é Open Source (OS, não confundir com Sistema Operacional), vamos ao tópico principal: **Métricas de Open Source**.  

A razão de usar padrões no O.S/C.A é medir o impacto que o código está gerando, tanto em visualizações quanto em utilização.  
Segundo o **Open Source Guide**:  

> “pode ajudá-lo a tomar decisões melhores como um mantenedor open source”.  

A métrica é útil se você quer entender seu projeto em um nível mais profundo.  

---

### Como utilizar?  

1. O **Open Source Guide** diz que a métrica de C.A é necessária para:  
   - Entender como usuários respondem a uma nova funcionalidade;  
   - Descobrir de onde os novos usuários vêm;  
   - Identificar e decidir se deve suportar um caso de uso ou funcionalidade sugerida;  
   - Quantificar a popularidade do seu projeto;  
   - Entender como seu projeto é usado;  
   - Arrecadar dinheiro através de patrocínios e doações.  

2. Algumas ferramentas são utilizadas para obter estes dados, como:  
   - **Google Analytics**  
   - **GitHub**  
     - Função *traffic* dentro de *Insights*: mostra visualizações, origem de usuários e conteúdo popular.  
     - **GitHub Stars:** ajudam a medir a popularidade.  

3. Outras ferramentas ajudam a saber a visualização comercial, como:  
   - **npm**  
   - **rubygems.org**  
   Elas fornecem informações de quantos downloads foram feitos.  

4. Onde entra a métrica nisso?  
   - Ajuda a analisar a aceitação do projeto, mostrando se ele está atraindo o público errado ou não conseguindo manter visitantes.  
   - Permite verificar a **contribuição da comunidade**: muitos contribuidores inativos podem indicar projeto insustentável.  
   - O GitHub, em *contributors*, mostra quantos commits cada pessoa faz. Muitos commits frequentes = bom sinal.  

5. Alta demanda no código exige ajuda. O número de **issues** e **pull requests** é um índice da relevância do projeto.  
   - Muitas *issues* não resolvidas há muito tempo = projeto precisa de revisão.  

6. É importante responder às novas ideias e contribuições.  
   - Saber o tempo médio para fechar *issues* e fazer *merges* de *pull requests* é essencial.  

7. **Resumo:**  
   - Commits e participação da comunidade (parâmetros técnicos e qualitativos) são essenciais para medir a aceitação do projeto.  

---

## Fontes  

1. [O que é open source? (AWS)](https://aws.amazon.com/pt/what-is/open-source)  
2. [Métricas de open source (Open Source Guide)](https://opensource.guide/pt/metrics)  

---

