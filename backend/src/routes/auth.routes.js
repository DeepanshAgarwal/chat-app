import express from "express";
import {
    checkAuth,
    login,
    logout,
    signup,
    updateProfile,
} from "../controllers/auth.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", userAuth, updateProfile);

router.get("/check", userAuth, checkAuth);

export default router;