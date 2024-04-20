import jwt from "jsonwebtoken"
import { User } from "../models/user.model.mjs"
export const protect = async (req, res, next) => {
    try {
        //check the token is there or not
        const token = req.cookies.JWTtoken
        if (!token) return res.status(401).json({
            "error": "Unauthorized",
            "Message": "Unauthorized,Please login"
        })
        //check the tocken is valid or not
        const userId = jwt.verify(token, process.env.jwtSecret)
        if (!userId) {
            res.cookie("JWTtoken", "", { maxAge: 0 })
            return res.status(401).json({
                "error": "Unauthorized",
                "Message": "Unauthorized,Please login"
            })
        }
        // find that user from that user id
        const userInfo = await User.findById(userId.id).select("-password")
        req.loggedUser = userInfo
        //Navigate to next
        next()
    } catch (error) {
        console.log("Error in Project function\n", error.message)
        res.send("something went wrong")
    }
}