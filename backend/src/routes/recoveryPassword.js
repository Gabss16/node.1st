
import express, { Router } from "express";
import passwordRecoveryController from "../controllers/recoveryPasswordController.js"

const router = express.Router();
 
 
router.route("/requestCode").post(passwordRecoveryController.requestCode)
router.route("/verifyCode").post(passwordRecoveryController.verifyCode)
router.route("/newPassword").post(passwordRecoveryController.newPassword)

export default router;