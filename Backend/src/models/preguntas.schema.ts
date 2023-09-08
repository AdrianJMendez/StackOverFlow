import mongoose, { Schema, Document } from "mongoose";
import { Pregunta, Respuesta } from "./preguntas.model";


const preguntaSchema = new Schema<Pregunta>({
  titulo: String,
  descripcion: { type: String, required: false }, // Atributo no necesario
  fecha: { type: String, required: false },       // Atributo no necesario
  votos: { type: Number, required: false },       // Atributo no necesario
  vistas: { type: Number, required: false },      // Atributo no necesario
  hashtags: { type: [String], required: false }, // Atributo opcional               
  idUsuario: mongoose.Types.ObjectId,
  respuestas: { type: Array<Respuesta>, required: false }, // Atributo opcional
});


export const PreguntaSchema = mongoose.model("preguntas", preguntaSchema);

