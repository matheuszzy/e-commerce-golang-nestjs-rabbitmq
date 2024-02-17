# E-Commerce FullCycle Microserviços
- Sistema desenvolvido com base na imersão full cycle, possui as funcionalidades de um ecommerce construído com base em microserviços e focando a escalabilidade do sistema.

## **Requisitos**
- Criação de pedido.
- Carrinho de compras.
- Criação de ordem de pagamento.
- Processamento dos pagamentos.
- Histórico e datalhado de todos os pedidos.

## **Tecnologias utilizadas**
* Golang
    - Serviço de processamento de pagamentos.
    - API de catálogo de produtos

* NestJS / NodeJS / Typescript
    - API de Pedidos, Carrinho e Ordens de Pagamento

* RabbitMQ
    - Para mensageria e realizar a comunicação independente entre os serviços.

* Docker
    - Criação de contêineres
    - Dockerização da aplicação

* NexJS
    - Usado na construção das telas