# node-user-authentication-api
- JWT (Token de Autenticação)

### CRUD de Usuários
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

## Usando Typescript
1º Instalá-lo e criar tsconfig.json `npm install -g typescript` `tsc --init`;
criar uma pasta `dist` e `src\@types`
2º Configurar o tsconfig.json = outDir, rootDir;
3º renomear o index.js p/ index.ts;
4º editar o package.json `"main": "./dist/index.js"` `"start": "node ./"`;
5º `npm install --save-dev typescript` | `npm install --save-dev @types/node` e rodar `tsc -p .` (obs. criar um script com nome `build` para rodar o tsc);
