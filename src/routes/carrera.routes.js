import { Router } from "express";
// importacion de los controladores
import {
  getCarrera,
  agregarCarrera,
  eliminarCarrera,
 // actualizarusu,
} from "../controllers/Carrera/Carrera.controllers.js";

const router = Router();

router.get("/usuarios", getCarrera); // cargar la vista
router.post("/agregarusu", agregarCarrera); // carga un nuevo usuario
router.delete("/eliminarusu",eliminarCarrera); // eliminamos un usuario