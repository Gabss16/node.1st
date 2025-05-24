import express, { Router } from "express";
import providersController from "../controllers/providersController.js"
import multer from "multer";
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 //configurar una carpeta multer
const upload = multer({dest: "public/"})


router.route("/")
.get(providersController.getProviders)
.post(upload.single("img"),providersController.createProviders)
router.route("/:id")
.put(providersController.updateProvider)
.delete(providersController.deleteProvider);

export default router;