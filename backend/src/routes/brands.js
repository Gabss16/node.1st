import express, { Router } from "express";
import brandsController from "../controllers/brandsController.js"
import multer from "multer";
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 //configurar una carpeta multer
const upload = multer({dest: "public/"})


router.route("/")
.get(brandsController.getBrands)
.post(upload.single("img"),brandsController.createBrands)

export default router;