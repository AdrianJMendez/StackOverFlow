"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerPregunta = void 0;
const preguntas_schema_1 = require("../models/preguntas.schema");
const ObtenerPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Pregunta = yield preguntas_schema_1.PreguntaSchema.findById(req.params.id, {});
    if (Pregunta) {
        res.send({ status: true, message: 'Pregunta obtenido con exito', Pregunta });
    }
    else {
        res.send({ status: false, message: 'Pregunta no existe' });
    }
    res.end();
});
exports.ObtenerPregunta = ObtenerPregunta;
