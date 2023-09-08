import mongoose, { Schema, Document } from "mongoose";

export interface Pregunta {
  id: mongoose.Types.ObjectId;
  titulo: string;
}

export interface Usuario {
  _id: mongoose.Types.ObjectId;
  nombre: string;
  
  urlImagen: string;
  preguntas: Array<Pregunta>;
}