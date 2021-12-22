import { StatusCodes } from "http-status-codes";
import { Router, Response, Request, NextFunction } from "express";

const usersRoute = Router();

//Read
//Buscar todos os usuários
usersRoute.get('/users', (req: Request, res: Response, next:NextFunction) =>{
    //lista de usuários
    const users = [{ userName: 'Bruno' }];
    res.status(StatusCodes.OK).json(users);
});

//Buscar um usuário específico
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    //bancoDeDados.getUserByUUid(uuid)
    res.status(StatusCodes.OK).send({ uuid });
});


//Create - criar um usuário
usersRoute.post('/users', (req: Request, res: Response, next:NextFunction) =>{
    const newUser = req.body;
    console.log(req.body)
    res.status(StatusCodes.CREATED).send(newUser);
})

//Update-alterar determinado usuário
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modifiedUser);
});


//DELETE
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) =>{
    res.sendStatus(StatusCodes.OK);
})

export default usersRoute;