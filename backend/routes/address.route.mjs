import express from "express";
import { addAddress, getAddress } from "../controllers/address.controller.mjs";
import { protect } from "../middlewares/project.mjs";

const address = express.Router()

address.post("/addAddress", protect, addAddress)
address.get("/getAddress", protect, getAddress)

export default address  