import express from "express"

import { registerController,loginController } from "../controllers/auth.controller.mjs"

const Auth = express.Router()

Auth.post("/register",registerController)
Auth.post("/login",loginController)

export default Auth