import express, { Router } from "express";
import faqsController from "../controllers/faqsController.js"

//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 



router.route("/")
.get(faqsController.getFaqs)
.post(faqsController.createFaqs)
router.route("/:id")
.put(faqsController.updateFaqs)
.delete(faqsController.deleteFaqs);

export default router;