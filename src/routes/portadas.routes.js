import { Router } from "express";

import {getPortadas} from "../controllers/Portadas/portadas.controllers.js"


const router=Router();


router.get("/portadas", getPortadas) 
// router.get("/search", getSearch) 


export default router;