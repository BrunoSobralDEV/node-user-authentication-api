import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configurações da aplicação - entender JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Configurar as rotas
app.use(usersRoute);
app.use(statusRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () =>{
    console.log('Aplicação sendo executada em http://localhost:3000')
})