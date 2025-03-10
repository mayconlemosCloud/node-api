# API-Node-Express

<form>
  <input type="radio" id="english" name="language" value="english" checked>
  <label for="english">English</label>
  <input type="radio" id="portuguese" name="language" value="portuguese">
  <label for="portuguese">Português</label>
</form>

<div id="english-content">
  This is an API built with Express and TypeScript, providing a simple user management system. The API includes endpoints for creating, reading, updating, and deleting users, and it also includes Swagger documentation.

  ## Features

  - Create, read, update, and delete users
  - Swagger API documentation
  - Docker support

  ## Prerequisites

  - Node.js
  - npm
  - Docker (optional)

  ## Getting Started

  ### Installation

  1. Clone the repository:
     ```bash
     git clone https://github.com/yourusername/api-node-express.git
     cd api-node-express
     ```

  2. Install dependencies:
     ```bash
     npm install
     ```

  ### Running the API

  #### Development

  To run the API in development mode with hot-reloading:
  ```bash
  npm run dev
  ```

  #### Production

  To build and run the API in production mode:
  ```bash
  npm run build
  npm start
  ```

  ### Docker

  To run the API using Docker:
  1. Build and start the Docker containers:
     ```bash
     docker-compose up --build
     ```

  2. The API will be available at `http://localhost:3000`.

  ### Running Tests

  #### Jest

  To run the Jest tests:
  ```bash
  npm test
  ```

  #### Cypress

  To open the Cypress test runner:
  ```bash
  npm run cypress:open
  ```

  To run the Cypress tests in headless mode:
  ```bash
  npm run cypress:run
  ```

  ### API Documentation

  The API documentation is available at `http://localhost:3000/api-docs` when the server is running.

  ## Project Structure

  - `src/`: Source code
    - `controllers/`: Request handlers
    - `models/`: Data models
    - `routes/`: API routes
    - `services/`: Business logic
  - `dist/`: Compiled code
  - `docker-compose.yml`: Docker Compose configuration
  - `Dockerfile`: Docker image configuration
  - `package.json`: Project metadata and scripts
  - `tsconfig.json`: TypeScript configuration

  ## Pipeline Flow

  ```mermaid
  graph TD
      A[Push or PR to develop branch] -->|Triggers| B[CI Job]
      B --> C[Checkout code]
      C --> D[Run Docker Compose with Tests]
      D --> E[Build and Test]
      E -->|Success| F[Create Release Branch and PR]
      E -->|Failure| H[Notify Developers]
      F --> G[Push Release Branch to Remote]
      G --> I[Deploy to Production]
  ```

  ## Project Flow

  ```mermaid
  graph TD
      A[Client Request] -->|HTTP Request| B[API Endpoint]
      B -->|Routes Request| C[Controller]
      C -->|Validates Request| D[Service]
      D -->|Queries| E[Database]
      E -->|Returns Data| D
      E -->|Error| J[Error Handling]
      D -->|Processes Data| C
      C -->|Sends Response| B
      B -->|HTTP Response| A
      J -->|Logs Error| K[Logging Service]
      J -->|Sends Error Response| B
  ```

  ### Component Descriptions

  - **Client Request**: The initial request made by the client to the API.
  - **API Endpoint**: The specific URL that the client interacts with.
    - **Routes**:
      - `POST /users`: Create a new user
      - `GET /users`: Retrieve all users
      - `GET /users/:id`: Retrieve a specific user
      - `PUT /users/:id`: Update a specific user
      - `DELETE /users/:id`: Delete a specific user
  - **Controller**: Handles the incoming request, validates it, and calls the appropriate service.
  - **Service**: Contains the business logic and interacts with the database.
  - **Database**: Stores and retrieves data.
  - **Error Handling**: Manages any errors that occur during the request processing.
  - **Logging Service**: Logs errors and other important information.

  ### Possible Outcomes

  - **Success**: The request is processed successfully, and the client receives the expected response.
    - **200 OK**: Successful GET, PUT, DELETE requests
    - **201 Created**: Successful POST request
  - **Validation Error**: The request is invalid, and an error response is sent back to the client.
    - **400 Bad Request**: Invalid request data
  - **Database Error**: An error occurs while querying the database, and an error response is sent back to the client.
    - **500 Internal Server Error**: Database query error
  - **Unhandled Error**: An unexpected error occurs, and an error response is sent back to the client.
    - **500 Internal Server Error**: Unexpected server error
</div>

<div id="portuguese-content" style="display:none;">
  Esta é uma API construída com Express e TypeScript, fornecendo um sistema simples de gerenciamento de usuários. A API inclui endpoints para criar, ler, atualizar e excluir usuários, e também inclui documentação Swagger.

  ## Funcionalidades

  - Criar, ler, atualizar e excluir usuários
  - Documentação da API Swagger
  - Suporte ao Docker

  ## Pré-requisitos

  - Node.js
  - npm
  - Docker (opcional)

  ## Começando

  ### Instalação

  1. Clone o repositório:
     ```bash
     git clone https://github.com/yourusername/api-node-express.git
     cd api-node-express
     ```

  2. Instale as dependências:
     ```bash
     npm install
     ```

  ### Executando a API

  #### Desenvolvimento

  Para executar a API em modo de desenvolvimento com recarregamento automático:
  ```bash
  npm run dev
  ```

  #### Produção

  Para construir e executar a API em modo de produção:
  ```bash
  npm run build
  npm start
  ```

  ### Docker

  Para executar a API usando Docker:
  1. Construa e inicie os contêineres Docker:
     ```bash
     docker-compose up --build
     ```

  2. A API estará disponível em `http://localhost:3000`.

  ### Executando Testes

  #### Jest

  Para executar os testes Jest:
  ```bash
  npm test
  ```

  #### Cypress

  Para abrir o executor de testes Cypress:
  ```bash
  npm run cypress:open
  ```

  Para executar os testes Cypress em modo headless:
  ```bash
  npm run cypress:run
  ```

  ### Documentação da API

  A documentação da API está disponível em `http://localhost:3000/api-docs` quando o servidor está em execução.

  ## Estrutura do Projeto

  - `src/`: Código fonte
    - `controllers/`: Manipuladores de requisições
    - `models/`: Modelos de dados
    - `routes/`: Rotas da API
    - `services/`: Lógica de negócios
  - `dist/`: Código compilado
  - `docker-compose.yml`: Configuração do Docker Compose
  - `Dockerfile`: Configuração da imagem Docker
  - `package.json`: Metadados e scripts do projeto
  - `tsconfig.json`: Configuração do TypeScript

  ## Fluxo do Pipeline

  ```mermaid
  graph TD
      A[Push ou PR para a branch develop] -->|Dispara| B[Job de CI]
      B --> C[Checkout do código]
      C --> D[Executar Docker Compose com Testes]
      D --> E[Construir e Testar]
      E -->|Sucesso| F[Criar Branch de Release e PR]
      E -->|Falha| H[Notificar Desenvolvedores]
      F --> G[Push da Branch de Release para o Remoto]
      G --> I[Deploy para Produção]
  ```

  ## Fluxo do Projeto

  ```mermaid
  graph TD
      A[Requisição do Cliente] -->|Requisição HTTP| B[Endpoint da API]
      B -->|Roteia Requisição| C[Controlador]
      C -->|Valida Requisição| D[Serviço]
      D -->|Consulta| E[Banco de Dados]
      E -->|Retorna Dados| D
      E -->|Erro| J[Tratamento de Erros]
      D -->|Processa Dados| C
      C -->|Envia Resposta| B
      B -->|Resposta HTTP| A
      J -->|Registra Erro| K[Serviço de Log]
      J -->|Envia Resposta de Erro| B
  ```

  ### Descrições dos Componentes

  - **Requisição do Cliente**: A requisição inicial feita pelo cliente para a API.
  - **Endpoint da API**: A URL específica com a qual o cliente interage.
    - **Rotas**:
      - `POST /users`: Criar um novo usuário
      - `GET /users`: Recuperar todos os usuários
      - `GET /users/:id`: Recuperar um usuário específico
      - `PUT /users/:id`: Atualizar um usuário específico
      - `DELETE /users/:id`: Excluir um usuário específico
  - **Controlador**: Lida com a requisição recebida, valida e chama o serviço apropriado.
  - **Serviço**: Contém a lógica de negócios e interage com o banco de dados.
  - **Banco de Dados**: Armazena e recupera dados.
  - **Tratamento de Erros**: Gerencia quaisquer erros que ocorram durante o processamento da requisição.
  - **Serviço de Log**: Registra erros e outras informações importantes.

  ### Resultados Possíveis

  - **Sucesso**: A requisição é processada com sucesso e o cliente recebe a resposta esperada.
    - **200 OK**: Requisições GET, PUT, DELETE bem-sucedidas
    - **201 Created**: Requisição POST bem-sucedida
  - **Erro de Validação**: A requisição é inválida e uma resposta de erro é enviada de volta ao cliente.
    - **400 Bad Request**: Dados de requisição inválidos
  - **Erro de Banco de Dados**: Ocorre um erro ao consultar o banco de dados e uma resposta de erro é enviada de volta ao cliente.
    - **500 Internal Server Error**: Erro de consulta ao banco de dados
  - **Erro Não Tratado**: Ocorre um erro inesperado e uma resposta de erro é enviada de volta ao cliente.
    - **500 Internal Server Error**: Erro inesperado do servidor
</div>

<script>
  document.querySelectorAll('input[name="language"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      if (event.target.value === "english") {
        document.getElementById("english-content").style.display = "block";
        document.getElementById("portuguese-content").style.display = "none";
      } else {
        document.getElementById("english-content").style.display = "none";
        document.getElementById("portuguese-content").style.display = "block";
      }
    });
  });
</script>


