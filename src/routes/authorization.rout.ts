import { NextFunction, Request, Response, Router } from "express";

const authorizationRoute = Router();

authorizationRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {

})

export default authorizationRoute;