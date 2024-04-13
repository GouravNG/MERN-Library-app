import express from "express"

import { registerController } from "../controllers/auth.controller.mjs"

const Auth = express.Router()

Auth.post("/register",registerController)

export default Auth