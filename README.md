# API-Node-Express

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

## License

This project is licensed under the MIT License.
