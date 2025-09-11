# Arquitetura de Software

## O que é?

De acordo com Camila Pessôa:  
> “Estrutura fundamental ou esqueleto de um sistema de software, que define seus componentes, suas relações e seus princípios de projeto e evolução.”  

Em resumo, nada mais é do que um esboço daquilo que é essencial no nosso sistema, e vem como consequência dos **Requisitos de software**. 

---

## Para que serve?

Depois de definidas as prioridades/requisitos, precisamos saber como vamos encaixá-las e delimitá-las no nosso projeto.  

Analogia: um arquiteto faz um esboço de uma casa para definir ambientes de convivência (sala de estar, cozinha), trabalho (escritório), descanso (quartos), cuidado pessoal (banheiro etc.).  
O arquiteto de software faz o mesmo com sistemas, usando técnicas de programação (ex.: **POO**, bibliotecas).  

A junção dessas técnicas pode gerar uma **Arquitetura Orientada a Serviços (SOA)**.  

Segundo Pessôa:  
> “Sabemos que (a arquitetura de software) não se limita à design do software, ao código em si, bibliotecas, frameworks, hardware, metodologias ágeis ou princípios de desenvolvimento. No entanto, é interessante notar que todos esses elementos e escolhas são determinantes para definir uma boa arquitetura. [...] funciona como um ‘tudo em todo lugar ao mesmo tempo’ organizado a fim de evitar caos.”

---

## Como faço?

Para aplicarmos, precisamos de **padrões de arquitetura de software**, que facilitam entendimento do código e evitam custos e desgastes desnecessários.  

### Arquitetura Client-Server

- **Client (desktop):** mantém interface com o usuário e parte do código da aplicação (ex.: Delphi, VB com SQL).  
- **Server:** banco de dados relacional (ex.: SQL).  
  - Recomenda-se o uso de **arquitetura em camadas** para evitar acessos indevidos e manter 3 camadas de funcionamento simultâneo.  

### Layers (Arquitetura em Camadas)

- Sistema dividido em camadas independentes em modificação;  
- Uma camada depende dos serviços da próxima;  
- Indicada para manutenção de softwares existentes ou quando equipes trabalham isoladamente.  

### MVC (Model-View-Controller)

- **Model:** regras de negócio, interação com back-end e banco de dados;  
- **View:** apresentação dos dados ao usuário (front-end);  
- **Controller:** intermediário entre model e view, manipulando dados e reações.  

### SOA (Service-Oriented Architecture)

- Sistema dividido em **serviços independentes**;  
- Interfaces permitem interação entre serviços.  
- Analogia: prato de almoço → serviços (proteína, carboidrato, fibra) + interface (louça).  

### Pipes and Filters

- Dado processado por **filtros independentes**;  
- Analogia: café → pó (dado), filtro, água (duto).  
- Exemplo: agente de IA para identificar SPAM.  

### Arquitetura Monolítica

- Sistema como um único bloco, serviços interdependentes;  
- Manutenção mais complexa;  
- Pode haver modulação para facilitar manutenção.  
- Exemplos: **Amazon Prime Video, GitHub**.  

### Baseada em Microsserviços

- Variante da SOA;  
- Maior independência e descentralização que a monolítica.  

### Hexagonal

- Foco em **desacoplamento** e **fácil manutenção**;  
- Portas = interfaces; Adaptadores = implementação das portas;  
- Permite incremento de outras arquiteturas;  
- Necessidade de um **núcleo bem definido**;  
- Perspectiva diferente: front-end e back-end vistos como camadas externas ao domínio.  

---

## Fontes

[Artigo da Alura sobre padrões arquiteturais](https://www.alura.com.br/artigos/padroes-arquiteturais-arquitetura-software-descomplicada?srsltid=AfmBOorMLZRV5h5qMfdL1TBjLXD9K4Ksb_zCpn3t_CB6sFm6s8JMTsLG)  

