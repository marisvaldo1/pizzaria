# Pizzaria

Este é o repositório para o projeto Pizzaria. Abaixo estão as instruções para clonar, montar e executar o projeto.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- Docker
- Git

## Passos para Clonar o Repositório

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde você deseja clonar o repositório.
3. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/marisvaldo1/pizzaria.git
cd pizzaria
```

# Configurar e Executar o Backend
```
1. Navegue até o diretório backend:
  cd backend
2. Instale as dependências do Node.js:
  npm install

- Exemplo de variáveis de ambiente
  DATABASE_URL=sqlite:./database.sqlite

- Gere as migrações do banco de dados:
  npm run typeorm migration:run

- Inicie o servidor backend:
npm start
```

## Configurar e Executar o Frontend
```
1. Abra um novo terminal ou prompt de comando.
2. Navegue até o diretório frontend:
  - cd frontend
3. Instale as dependências do Node.js:
  - npm install
4. Inicie o servidor frontend:
  - npm start
```

# Executar o Projeto com Docker
```
Se preferir executar o projeto usando Docker, siga os passos abaixo:

1. Certifique-se de que o Docker está instalado e em execução na sua máquina.
2. Na raiz do projeto (diretório pizzaria), execute o seguinte comando para construir e iniciar os containers:
  docker-compose up --build
4 . Após a construção, o backend estará disponível em http://localhost:3001 e o frontend em http://localhost:3000.
```

# Executar os Testes
```
Para rodar os testes do backend, siga os passos abaixo:

1. Navegue até o diretório backend:
  cd backend
2. Execute o seguinte comando para rodar os testes:
  npm test
```

# Testar as APIs
  Para testar as APIs, você pode usar ferramentas como o Postman ou o Insomnia. As principais rotas disponíveis são:
```
1. Rotas de Pizza
  . GET /pizzas: Lista todas as pizzas.
  . POST /pizzas: Cria uma nova pizza.
  . GET /pizzas/:id: Busca uma pizza pelo ID.
  . DELETE /pizzas/:id: Exclui uma pizza pelo ID.
   
2. Rotas de Pedido
  . GET /pedidos: Lista todos os pedidos.
  . POST /pedidos: Cria um novo pedido.
  . GET /pedidos/:id: Busca um pedido pelo ID.
  . DELETE /pedidos/:id: Exclui um pedido pelo ID.
```

# Documentação das APIs
  A documentação das APIs está disponível via Swagger. Para acessar a documentação, siga os passos abaixo:
```  
    1. Certifique-se de que o backend está em execução.
    2. Abra o navegador e acesse http://localhost:3001/api-docs.
```

# Estrutura do Projeto
```
pizzaria/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── ...
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── componentes/
│   │   ├── contextos/
│   │   ├── estilos/
│   │   ├── paginas/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── Dockerfile
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── ...
└── docker-compose.yml
```
