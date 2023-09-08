import express from 'express';
import { AgregarPregunta, ObtenerUsuario, ObtenerUsuarios } from '../controllers/usuarios.controller';


const router = express.Router();


router.get("", ObtenerUsuarios);

router.get("/:id", ObtenerUsuario);

router.post("/:id", AgregarPregunta);

export default router;