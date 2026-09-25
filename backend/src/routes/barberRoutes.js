import express from "express";
import { registerBarber, getAllBarbers, getBarberById, updateBarber, deleteBarber } from "../controllers/barberController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", protect, adminOnly, registerBarber);
router.get("/", getAllBarbers);
router.get("/:id", getBarberById);
router.put("/:id", protect, adminOnly, updateBarber);
router.delete("/:id", protect, adminOnly, deleteBarber);

export default router;