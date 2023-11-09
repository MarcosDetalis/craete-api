import { Router } from "express";
 
import { getLogin, gettoket } from "../controllers/Login/login.controller.js";

const router = Router();

 

router.post("/auten", getLogin);
 
router.post("/toket", gettoket);

// export default router;
 

// import {getLogin} from '../controllers/Login/login.controllers.js'


// const router = Router();

//obtenemos con metodo pos ya que traemos de la db
router.post("/iniciarsesion", getLogin);



export default router;
 
