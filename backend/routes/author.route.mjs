import express from "express"
import { beauthor } from "../controllers/author.controller.mjs"
import { protect } from "../middlewares/project.mjs"
const author = express.Router()

author.post("/beauthor", protect, beauthor)

export default author