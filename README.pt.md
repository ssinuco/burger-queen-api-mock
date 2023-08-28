# Mock da API Burger Queen

Utilizando as bibliotecas [json-server](https://github.com/typicode/json-server) e [json-server-auth](https://github.com/jeremyben/json-server-auth), é criado um mock para a [API Burger Queen](https://app.swaggerhub.com/apis/ssinuco/BurgerQueenAPI/2.0.0).

## Execução

1. Clone o repositório
2. Instale as dependências
    ```bash
    npm install
    ```
3. Execute o mock
    ```bash
    npm start
    ```
4. Agora você pode acessar os endpoints da API descritos na [documentação](https://app.swaggerhub.com/apis/ssinuco/BurgerQueenAPI/2.0.0) utilizando como URL base [http://localhost:8080/](http://localhost:8080/).

    Conforme indicado na documentação, os endpoints estão protegidos por token de autenticação.

    No arquivo [requests.http](./requests.http), você encontrará algumas solicitações de teste que pode executar diretamente no VSCode usando a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Informações

O mock _out-of-the-box_ fornece informações de 3 usuárias: admin@systers.xyz, waiter@systers.xyz e chef@systers.xyz, com funções de admin, atendente e chef, respectivamente. A senha das usuárias é _123456_.

Também fornece informações de 2 pedidos e 20 produtos.
