import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// Route to fetch all books
router.get("/", getBook);

export default router;
