import express from 'express';
import cors from 'cors';
import userRouter from './routers/usuarios.router';
import questionsRouter from './routers/preguntas.router';


//Inicializacios
const app = express();
import './utilis/database'

//settings
app.set('port', process.env.PORT || 3000); //process.env.PORT puerte de la nube

//midleweares
app.use(express.json()); //para que el server reconozca jsons
app.use(express.urlencoded({extended: false}));//// Configura 


//rutas
app.use(cors());
app.use('/usuarios', userRouter);
app.use('/preguntas', questionsRouter);

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});