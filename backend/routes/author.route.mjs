import express from "express"
import { beauthor } from "../controllers/author.controller.mjs"
const author = express.Router()

author.post("/beauthor", beauthor)

export default author