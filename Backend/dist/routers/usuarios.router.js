"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
router.get("", usuarios_controller_1.ObtenerUsuarios);
router.get("/:id", usuarios_controller_1.ObtenerUsuario);
router.post("/:id", usuarios_controller_1.AgregarPregunta);
exports.default = router;
