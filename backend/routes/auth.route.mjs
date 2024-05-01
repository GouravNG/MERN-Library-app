import express from "express"

import { registerController, loginController, logoutController } from "../controllers/auth.controller.mjs"
import { protect } from "../middlewares/project.mjs"

const Auth = express.Router()

Auth.post("/register", registerController)
Auth.post("/login", loginController)
Auth.post("/logout", logoutController)
Auth.get("/validate", protect, (req, res) => res.send("valid"))

export default Auth