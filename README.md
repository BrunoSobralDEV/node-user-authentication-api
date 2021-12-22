# node-user-authentication-api
- Microserviço de autenticação com NodeJS
- JWT (Token de Autenticação)

### CRUD de Usuários
**Create, Read, Update, Delete**
- GET /users = Todos os usuários
- GET /users/:uuid = Usuário específico
- POST /users
- POST /users/:uuid
- DELETE /users/:uuid

### Autenticação
- POST /token
- POST /token/validate

# Começando
`npm init`
Package name: ms-authentication
version: -
description: Microservice
entry point: -
...: -
yes

## Comandos
Typescript `npm install -g typescript`
Cria o arquivo tsconfig.json `tsc --init`
`npm install --save-dev typescript`
`npm install --save-dev @types/node`
`tsc ./`

## Dependências
Typescript `npm install -g typescript`
Express `npm install --save express` | `npm install --save-dev @types/express`

## 1º - Usando Typescript
1º Instalá-lo e criar tsconfig.json `npm install -g typescript` `tsc --init`;
criar uma pasta `dist` e `src\@types`
2º Configurar o tsconfig.json = outDir, rootDir;
3º renomear o index.js p/ index.ts;
4º editar o package.json `"main": "./dist/index.js"` `"start": "node ./"`;
5º `npm install --save-dev typescript` | `npm install --save-dev @types/node` e rodar `tsc -p .` (obs. criar um script com nome `build` para rodar o tsc);

## 2º Usando Express
### Framework para o gerenciamento de rotas API
`npm install --save express`
`npm install --save-dev @types/express`

1º estancia aplicação (const app = express())
2º Configurar: app.get & app.listen

## Automatizar alteração no código
não precisart ficar rodando "encerrando, build e start";
- Biblioteca: `npm install --save-dev ts-node-dev`

## CRUD
- pasta routs\users.route.ts
querystrings = ?
queryparams = url

dependencia http code = `npm install --save http-status-codes`

## Dica VSCode
- Alt+Shift+O = Organiza os imports;
- Alt+Shift+F = Formata o arquivo;

---------------------------
## Conectando com o banco PostgreSQL
1º Instalar dependências
- drive nativo `npm install pg`
- Types do PG `npm install --save-dev @types/pg`

2º Criar banco
Dica: ElephantSQL para criar banco de dados

3º criar tabelas

## Models
interface = contrato (métodos, declarações, podem ser implementadas)
class = deriva de um objeto
type = apenas uma definição