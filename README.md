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

## Tratamento de erros
- Try catch em todos os enpoints ou 
Middleware e interceptors do express (?)
- Fazer o tratamento centralizado no `error-handler.middleware.ts`

## Basic Auth e Bearer
Obs.: Erros relacionados ao banco de dados, não devem ser tão explicativas (em produção), por questão de segurança.

## JWT
- JWT é um token composto por Header+payload(conteúdo)+signature(hash a partir de uma private key)
- Tempo para expirar;
`npm install jsonwebtoken`
`npm install --save-dev @types/jasonwebtoken`

Padrões de informações do JWT:
- "iss" (issuer) = Emissor do token;
- "sub" (subject) = Entidade à quem o token pertence, normalmente o ID do usuário;
- "aud" (audience) = Destinatário do token, representa a aplicação que irá usá-lo.
- "exp" (expiration) = Timestamp de quando o token irá expirar;
- "nbf" = Define uma data para qual o token não pode ser aceito antes dela (delay para entrar em vigor);
- "iat" (issued at) = Timestamp de quando o token foi criado;
- "jti" = O id do token.

## Terminar...
### Refresh Token
quando expirar, retornar StatusCode: 401: Token expirado
Terminar(!) criar um end-point em `authorizationRout`:
('/token/refresh')
1 - pegar o token antigo `tokenPayload`;
2 - Pegar o `user`, autenticar novamente;
3 - Gerar um token novo;

### Config (dependência)
- Estudar bibliotecas de gestão para variáveis de ambientes
**Config:**`yarn add config`. Criar variáveis de ambientes para `master_key`