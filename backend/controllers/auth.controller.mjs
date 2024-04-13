import bcrypt from "bcrypt"
import { User } from "../models/user.model.mjs"

export const registerController = async (req, res) => {
    try {
        //Server side validation
        const { firstname, lastname, email, password, confirmPassword } = req.body
        if (!firstname || !lastname || !email || !password || !confirmPassword) return res.status(401).json({ message: "Invalid Request" })
        if (password.length < 6) return res.status(400).json({ "message": "Minimum Password length Shouldb be 6" })
        if (password !== confirmPassword) return res.status(401).json({ "message": "password and confirm Password doesnot match" })

        //Password hashiing
        const genSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, genSalt)

        //saving the user
        const newUser = new User({
            firstname, lastname, email, password: hashedPassword
        })
        if (newUser) {
            const userCreated = await newUser.save()
            res.status(201).json({
                id: userCreated._id,
                firstname,
                lastname,
                email,
                credit: userCreated.credit,
                usersince: userCreated.createdAt
            })
        }
        else
            res.status(500).json({ "message": "something went wrong" })
    }
    catch (err) {
        const errorMessage = (err.message)
        console.log(errorMessage)
        if (errorMessage.includes("E11000")) return res.status(401).json({ "message": "Email entered already exist!" })
        if (errorMessage.includes("User validation failed")) return res.status(401).json({ "message": errorMessage })
        res.status(500).json({ "message": "Internal Server Error" })
    }
}