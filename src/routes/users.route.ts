import { StatusCodes } from "http-status-codes";
import { Router, Response, Request, NextFunction } from "express";

const usersRoute = Router();

//Read
usersRoute.get('/users', (req: Request, res: Response, next:NextFunction) =>{
    //lista de usuários
    const users = [{ userName: 'Bruno' }];
    res.status(StatusCodes.OK).json(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    //bancoDeDados.getUserByUUid(uuid)
    res.status(StatusCodes.OK).send({ uuid });
});

//Create
usersRoute.post('/users', (req: Request, res: Response, next:NextFunction) =>{
    const newUser = req.body;
    console.log(req.body)
    res.status(StatusCodes.CREATED).send(newUser);
})
export default usersRoute;