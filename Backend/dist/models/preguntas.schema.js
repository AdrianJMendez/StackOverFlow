"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreguntaSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const preguntaSchema = new mongoose_1.Schema({
    titulo: String,
    descripcion: { type: String, required: false },
    fecha: { type: String, required: false },
    votos: { type: Number, required: false },
    vistas: { type: Number, required: false },
    hashtags: { type: [String], required: false },
    idUsuario: mongoose_1.default.Types.ObjectId,
    respuestas: { type: (Array), required: false }, // Atributo opcional
});
exports.PreguntaSchema = mongoose_1.default.model("preguntas", preguntaSchema);
