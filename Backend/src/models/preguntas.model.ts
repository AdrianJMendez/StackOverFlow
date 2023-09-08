import mongoose, { Schema, Document } from "mongoose";


export interface Pregunta {
  id: mongoose.Types.ObjectId;
  titulo: string;
  descripcion?: string;
  fecha?: string;
  votos?: number;
  vistas?: number;
  hashtags?: string[];
  idUsuario: mongoose.Types.ObjectId;
  respuestas?: Array<Respuesta>;
}

export interface Respuesta {
  id: string;
  descripcion: string;
  fecha?: string;
  votos?: string; 
  idUsuario: string; 
}