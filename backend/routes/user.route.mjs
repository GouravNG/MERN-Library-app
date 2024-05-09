import express from "express"
import { viewFullProfile } from "../controllers/user.controller.mjs"
import { protect } from "../middlewares/project.mjs"
const userRoute = express.Router()
userRoute.get("/viewfullprofile",protect, viewFullProfile)
export default userRoute