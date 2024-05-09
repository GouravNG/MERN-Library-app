import { User } from "../models/user.model.mjs"

export const viewFullProfile = async (req, res) => {
    try {
        const userid = req.loggedUser._id
        const userData = await User.findById(userid).populate("address").select({ password: 0, _id: 0 })
        res.status(200).json(userData)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            "error": "internal server ever",
            "message": "Somethiiiing went wrong"
        })
    }
}