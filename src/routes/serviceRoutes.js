import express from "express";
import { registerService, getAllServices, getServiceById, updateService, deleteService } from "../controllers/serviceController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerService);
router.get("/",getAllServices);
router.get("/:id", getServiceById);
router.put("/:id", protect, adminOnly, updateService);
router.delete("/:id", protect, adminOnly, deleteService);

export default router;