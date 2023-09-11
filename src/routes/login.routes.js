import { Router } from "express";
import { getLogin } from "../controllers/Login/login.controller.js";

const router = Router();

 

router.post("/auten", getLogin);


export default router;
