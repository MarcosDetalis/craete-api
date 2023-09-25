import { Router } from "express";

import {getLogin} from '../controllers/Login/login.controllers.js'


const router = Router();

//obtenemos con metodo pos ya que traemos de la db
router.post("/iniciarsesion", getLogin);



export default router;