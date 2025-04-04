
import express, { Router } from "express";
import registerCustomersController from "../controllers/registerCustumersController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/").post(registerCustomersController.register)
router.route("/verifyCodeEmail").post(registerCustomersController.verifyCodeEmail)

export default router;