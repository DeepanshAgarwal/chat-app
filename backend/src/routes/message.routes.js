import express from "express";
import { userAuth } from "../middlewares/auth.middleware.js";
import {
    getMessages,
    getUsersForSidebar,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", userAuth, getUsersForSidebar);
router.get("/:id", userAuth, getMessages);

export default router;
