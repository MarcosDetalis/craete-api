import { Router } from "express";
// importacion de los controladores
import {
  getCarrera,
  agregarCarrera,
  eliminarCarrera,
 // actualizarusu,
} from "../controllers/Agregar_carrera/carrera.controllers.js";

const router = Router();

router.get("/carreras", getCarrera); // cargar la vista
router.post("/agregarcarrera", agregarCarrera); // carga un nuevo usuario
router.delete("/eliminarcarrera",eliminarCarrera); // eliminamos un usuario

export default router;