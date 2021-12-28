import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from "jsonwebtoken";
//import userRepository from "../repositories/user.repository";

//Busca de usuários validada por token
async function jwtAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers["authorization"];

    //Verificar se ele existe, se tem conteúdo
    if (!authorizationHeader) {
      throw new ForbiddenError("Credenciais não informadas");
    }

    // Bearer. dar split por espaço
    const [authenticationType, token] = authorizationHeader.split(" ");

    //Verificar se é do tipo 'Bearer' e se está com o token
    if (authenticationType !== "Bearer" || !token) {
      throw new ForbiddenError(
        "Tipo de autenticação inválido ou Token inválido"
      );
    }

    try {
      //Descriptografa - verifica se o token é válido e devolve o Payload do Token
      //com base na Private Key
      const tokenPayload = JWT.verify(token, "my_secret_key");
      if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
        throw new ForbiddenError("Token Inválido");
      }
      //'user' quem esse token representa
      const user = {
        uuid: tokenPayload.sub,
        username: tokenPayload.username,
      };
      //deixar o user disponível pra todo mundo que usar esse middleware
      req.user = user;
      next();
    } catch (error) {
        throw new ForbiddenError("Token Inválido");
    }
  } catch (error) {
    next(error);
  }
}

export default jwtAuthenticationMiddleware;
