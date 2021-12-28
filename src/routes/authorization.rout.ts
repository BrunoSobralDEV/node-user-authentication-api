import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from "jsonwebtoken";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

//endpoint com método de autenticação BasicHTTP
authorizationRoute.post(
  "/token",
  basicAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      //basicAuthenticationMiddleware estava aqui, criei um arquivo pra poder reutilizá-lo
      if (!user) {
        throw new ForbiddenError("Usuário não informado!");
      }

      const jwtPayload = { username: user.username };
      const jwtOptions = { subject: user?.uuid };
      const secretKey = "my_secret_key";
      //gerar token
      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      //devolver o JWT, baseado no usuário
      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
  
});
export default authorizationRoute;