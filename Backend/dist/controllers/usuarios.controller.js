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
exports.AgregarPregunta = exports.ObtenerUsuario = exports.ObtenerUsuarios = void 0;
const usuarios_shema_1 = require("../models/usuarios.shema");
const preguntas_schema_1 = require("../models/preguntas.schema");
const ObtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Usuarios = yield usuarios_shema_1.UsuarioSchema.find({}, {});
    if (Usuarios.length > 0) {
        res.send({ status: true, message: 'Usuarios obtenidas con exito', Usuarios });
    }
    else {
        res.send({ status: false, message: 'Usuarios no existen' });
    }
});
exports.ObtenerUsuarios = ObtenerUsuarios;
const ObtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_shema_1.UsuarioSchema.findById(req.params.id, {});
    if (usuario) {
        res.send({ status: true, message: 'usuario obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'usuario no existe' });
    res.end();
});
exports.ObtenerUsuario = ObtenerUsuario;
const AgregarPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield usuarios_shema_1.UsuarioSchema.findById(req.params.id);
        if (usuario) {
            //Agregando pregunta al usuario
            const nvaPregunta = new preguntas_schema_1.PreguntaSchema(req.body);
            const payload = {
                _id: nvaPregunta._id,
                titulo: nvaPregunta.titulo
            };
            const nvaPregunt = new preguntas_schema_1.PreguntaSchema(payload);
            usuario.preguntas.push(nvaPregunt);
            yield usuario.save();
            //Agregando pregunta a la coleccion
            yield nvaPregunta.save();
            res.send({
                status: true,
                message: 'pregunta agregado con exito',
                usuario
            });
        }
        else {
            res.send({
                status: false,
                message: 'usuario no encontrado',
            });
        }
    }
    catch (error) {
        console.error('Error al agregar el pregunta', error);
        res.status(500).send({
            status: false,
            message: 'Error al agregar el pregunta',
            error
        });
    }
});
exports.AgregarPregunta = AgregarPregunta;
