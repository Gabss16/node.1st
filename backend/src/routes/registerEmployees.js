//2.crea file de ruta

import express, { Router } from "express";
import registerEmployeesController from "../controllers/registerEmployeesController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.post(registerEmployeesController.register)

export default router;