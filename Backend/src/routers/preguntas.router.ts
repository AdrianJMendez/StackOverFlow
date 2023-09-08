import express from 'express';
import { ObtenerPregunta } from '../controllers/preguntas.controller';



const router = express.Router();


router.get("/:id", ObtenerPregunta);


export default router;