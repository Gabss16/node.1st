import express, { Router } from "express";
import loginController from "../controllers/loginController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/").post(loginController.login)

export default router;