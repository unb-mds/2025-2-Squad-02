# Sobre o GitHub

## Gitpages

### O que é?
- É uma ferramenta disponibilizada pelo GitHub para que possamos hospedar nossa página web de forma gratuita, ou seja, você não precisa gastar dinheiro comprando domínios na internet no digital ocean, por exemplo. 
- Você precisa de ir ao seu repositório > configurações > páginas e lá você deverá selecionar qual ramificação você quer que hospede sua página. Com isso, teremos um código que irá "rodar" dentro dessa ramificação. 

### Qual a função do Hugoplate nisso?

- O hugoplate será para nós como o Canva está para o Word. Você não precisa criar um layout, modelo do zero, só precisará de escolher o layout no hugo que mais combina com a sua demanda e preferência (no nosso caso é a documentação, por enquanto). Para isso precisaremos de comandos pra que o hugo crie um projeto novo, copie o modelo que você se inspiriou, e depois passá-lo para o GitHub. 

## Gitactions

### O que é? 
- O Git actions é uma ferramenta do github que nos auxilia a automatizar o serviço de manutenção do código. Para isso, você não precisará de que alguém fique responsável por gerenciar e monitorar possíveis erros no código e depois disponibilizá-los para quem vai usar o site. 

### Ok, e o que ele faz?
- Para isso, ele trabalha com um mecanismo de CI (integração contínua - que recebe o último commit, testa o código de forma automática e fazer um relatório) e CD (Entrega contínua - Depois de feitos os testes, a sua página será disponibilizada para o usuário). Por analogia, pensemos em uma esteira de uma fábrica. O github actions, ao usar o CI, será o funcionário da garantia de qualidade, vendo se não há defeitos e avarias no projeto, e o CD será o transportador do projeto até uma loja, por exemplo.
