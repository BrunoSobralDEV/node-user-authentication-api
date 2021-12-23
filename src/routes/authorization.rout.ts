import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {
    try {
      //Pegar o conteúdo do headers-authorizations
      const authorizationHeader = req.headers["authorization"];

      //Verificar se ele existe
      if (!authorizationHeader) {
        throw new ForbiddenError("Credenciais não informadas");
      }

      // Basic YWRtaW46YWRtaW4=
      const [authenticationType, token] = authorizationHeader.split(" ");

      //Verificar se é do tipo 'Basic' e se está com o token
      if (authenticationType !== "Basic" || !token) {
        throw new ForbiddenError("Tipo de autenticação inválido");
      }
      //Decodificando o token p/ utf-8 = username:password
      const tokenContent = Buffer.from(token, "base64").toString("utf-8");

      //Separar 'username:password'
      const [username, password] = tokenContent.split(":");

      //validação antes de buscar no banco
      if (!username || !password) {
        throw new ForbiddenError("Credenciais não preenchidas");
      }

      //verificar no banco este usuário
      const user = await userRepository.findByUsernameAndPassword(
        username,
        password
      );
      console.log(user);
    } catch (error) {
        next(error);
    }
})

export default authorizationRoute;