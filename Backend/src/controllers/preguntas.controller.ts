import {Request, Response} from 'express';
import { PreguntaSchema } from '../models/preguntas.schema';


export const ObtenerPregunta = async (req: Request, res: Response) => {
    const Pregunta = await PreguntaSchema.findById(req.params.id, {});
      if (Pregunta) {
        res.send({status: true, message: 'Pregunta obtenido con exito', Pregunta});
      }
      else {
        res.send({status: false, message: 'Pregunta no existe'});}
      res.end();
  }


