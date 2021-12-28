import { StatusCodes } from "http-status-codes";
import { Router, Response, Request, NextFunction } from "express";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

//Read
//Buscar todos os usuários
usersRoute.get('/users', async (req: Request, res: Response, next:NextFunction) =>{
    //lista de usuários
    //const users = [{ userName: 'Bruno' }];
    const users = await userRepository.findAullUsers();
    res.status(StatusCodes.OK).json(users);
});

//Buscar um usuário específico
usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next:NextFunction) =>{
    try{
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    }catch(error){
        next(error);
    }
});


//Create - criar um usuário
usersRoute.post('/users', async (req: Request, res: Response, next:NextFunction) =>{
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
})

//Update-alterar determinado usuário
usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
});


//DELETE
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
})

export default usersRoute;