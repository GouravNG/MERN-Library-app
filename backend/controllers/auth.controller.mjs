import bcrypt from "bcrypt"
import { User } from "../models/user.model.mjs"
import { genAndSetJWT } from "../utils/jwtGenerator.mjs"

export const registerController = async (req, res) => {
    try {
        //Server side validation
        const { firstname, lastname, email, password, confirmPassword } = req.body
        if (!firstname || !lastname || !email || !password || !confirmPassword) return res.status(400).json({ message: "Invalid Request" })
        if (password.length < 6) return res.status(422).json({
            "error": "Minimum Password Length Error",
            "message": "The password length should be at least 6 characters."
        })
        if (password !== confirmPassword) return res.status(422).json({
            "error": "Password Mismatch Error",
            "message": "Password and Confirm Password do not match."
        })

        //Password hashiing
        const genSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, genSalt)

        //saving the user
        const newUser = new User({
            firstname, lastname, email, password: hashedPassword
        })
        if (newUser) {
            const userCreated = await newUser.save()
            genAndSetJWT(userCreated._id, res)
            res.status(200).json({
                id: userCreated._id,
                firstname,
                lastname,
                email,
                credit: userCreated.credit,
                usersince: userCreated.createdAt
            })
        }
        else
            res.status(500).json({
                "error": "Internal Server Error",
                "message": "Something went wrong during the login process."
            })
    }
    catch (err) {
        const errorMessage = (err.message)
        console.log('Error in register controller \n', errorMessage)
        if (errorMessage.includes("E11000")) return res.status(409).json({
            "error": "Email Conflict",
            "message": "The email entered already exists in the system."
        })
        if (errorMessage.includes("User validation failed")) return res.status(422).json({
            "error": "User Validation Failed",
            "message": "The user data provided failed validation in the database."
        })
        res.status(500).json({
            "error": "Internal Server Error",
            "message": "Something went wrong during the login process."
        })
    }
}

export const loginController = async (req, res) => {
    try {
        //server side valiation
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({
            "error": "Invalid Request",
            "message": "Please fill in all the required fields."
        })

        //check if the email is present in db or not 
        const loginUser = await User.findOne({ email })
        if (!loginUser) return res.status(401).json({
            "error": "Unauthorized",
            "message": "Email or password entered is incorrect. Please check again."
        })

        //passoword validation
        const isPasswordCorrect = await bcrypt.compare(password, loginUser.password)
        if (!isPasswordCorrect) return res.status(401).json({
            "message": "Email or Password entered is wrong. Please check again.",
            "error": "Email or Password entered is wrong. Please check again."
        })

        //generate the token
        genAndSetJWT(loginUser._id, res)
        res.status(200).json({
            id: loginUser._id,
            firstname: loginUser.firstname,
            lastname: loginUser.lastname,
            email: loginUser.email,
            credit: loginUser.credit,
            usersince: loginUser.createdAt
        })
    } catch (error) {
        console.log("Error in login controller\n", error.message)
        res.status(500).json({ "error": "Internal Server Error" })
    }
}

export const logoutController = async (req, res) => {
    try {
        res.cookie("JWTtoken", "", { "maxAge": 0 })
        res.status(200).json({
            "message": "Logout successful"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Something went wrong!")
    }
}