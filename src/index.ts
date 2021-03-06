import express from "express";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.rout";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configurações da aplicação - entender JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


//Configurar as rotas - pro Express a ordem importa
app.use(statusRoute);
app.use(authorizationRoute); //Rota de Login

app.use(jwtAuthenticationMiddleware);
app.use(usersRoute); //Rotas de usuário


//Configuração dos Handlers de Erro
app.use(errorHandler);


// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`⚡[server]: Server is running at http://localhost:${PORT}/status`);
})