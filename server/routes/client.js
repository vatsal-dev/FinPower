import express from "express";
import { getTransactions } from "../controllers/client.js";

const router = express.Router();

console.log("im in routes/client.js");
router.get("/income", getTransactions);

export default router;
