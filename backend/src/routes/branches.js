import express, { Router } from "express";
import branchesController from "../controllers/branchesController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(branchesController.getBranches)
.post(branchesController.createBranches)
.put(branchesController.updateBranches)
.delete(branchesController.deleteBranches);
 
export default router;