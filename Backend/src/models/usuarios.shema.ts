import mongoose, { Schema, Document } from "mongoose";
import { Pregunta, Usuario } from "./usuarios.model";



const usuarioSchema = new Schema<Usuario>({
  _id: mongoose.Types.ObjectId,
  nombre: String,
  urlImagen: String,
  preguntas: Array<Pregunta>,
});


export const UsuarioSchema = mongoose.model("usuarios", usuarioSchema);
