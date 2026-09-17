import express from "express";
import { registerUser, loginUser, logoutUser, getMe, getAllUsers } from "../controllers/authController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getMe);
router.get("/users", protect, adminOnly, getAllUsers);


export default router;