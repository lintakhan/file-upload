import express from "express";
import { uploadFile, readFile } from "../controller/upload.js";

const router = express.Router();

router.post("/upload", uploadFile);
router.get("/read/:filename", readFile);

export default router;
