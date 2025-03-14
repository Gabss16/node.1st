//2.crea file de ruta

import express, { Router } from "express";
import reviewsController from "../controllers/reviewsController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(reviewsController.getReview)
.post(reviewsController.createReview)
router.route("/:id")
.put(reviewsController.updateReview)
.delete(reviewsController.deleteReview);
 
export default router;