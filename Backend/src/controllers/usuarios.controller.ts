import {Request, Response} from 'express';
import { UsuarioSchema } from '../models/usuarios.shema';
import { PreguntaSchema } from '../models/preguntas.schema';



export const ObtenerUsuarios = async (req: Request, res: Response) => {
  const Usuarios = await UsuarioSchema.find({}, {});

  if (Usuarios.length > 0) {
    res.send({ status: true, message: 'Usuarios obtenidas con exito', Usuarios });
  } else {
    res.send({ status: false, message: 'Usuarios no existen' });
  }
};

export const ObtenerUsuario = async (req: Request, res: Response) => {
    const usuario = await UsuarioSchema.findById(req.params.id, {});
      if (usuario) {
        res.send({status: true, message: 'usuario obtenido con exito', usuario});
      }
      else 
        res.send({status: false, message: 'usuario no existe'});
      res.end();
  }

  export const AgregarPregunta = async (req: Request, res: Response) => {
  
    try {
      const usuario = await UsuarioSchema.findById(req.params.id);
      if (usuario) {
        //Agregando pregunta al usuario
        const nvaPregunta = new PreguntaSchema(req.body);
        const payload={
          _id: nvaPregunta._id,
          titulo: nvaPregunta.titulo
        }
        const nvaPregunt = new PreguntaSchema(payload);
        usuario.preguntas.push(nvaPregunt);
        await usuario.save();

        //Agregando pregunta a la coleccion
      await nvaPregunta.save();
        res.send({
          status: true,
          message: 'pregunta agregado con exito',
          usuario
        });
      } else {
        res.send({
          status: false,
          message: 'usuario no encontrado',
        });
      }
    } catch (error) {
      console.error('Error al agregar el pregunta', error);
      res.status(500).send({
        status: false,
        message: 'Error al agregar el pregunta',
        error
      });
    }
  }