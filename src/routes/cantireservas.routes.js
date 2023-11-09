import { Router } from "express";
// importacion de los controladores

import {cantidadPediente} from 
'../controllers/cantidad_reservas/cantireservas.controllers.js'

const router = Router();

router.get("/cantipendiente", cantidadPediente);

export default router;