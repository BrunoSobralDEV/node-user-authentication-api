import express, { Request, Response, NextFunction} from "express";

const app = express();

//Configurar as rotas
app.get('/status', (req: Request, res: Response, next:NextFunction) =>{
    res.status(200).send({ foo: 'bar'})    
})

app.listen(3000, () =>{
    console.log('Aplicação executando na http://localhost:3000')
})