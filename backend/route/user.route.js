import express from "express";
import { signup, login } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup); // Route for user registration
router.post("/login", login);   // Route for user login

export default router;
