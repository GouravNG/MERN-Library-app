import { Address } from "../models/address.model.mjs"
import { User } from "../models/user.model.mjs"

export const addAddress = async (req, res) => {
    try {
        const userId = req.loggedUser._id
        const { street, state, pincode } = req.body

        //validate all the required fields are present or not
        if (!state || !pincode) return res.status(400).json({
            "error": "Bad Request",
            "message": "Please enter all the fields"
        })

        //find the user with the id
        const userFound = await User.findById(userId)
        // check the user is already having the address or not
        if (userFound.toObject().address) return res.status(409).json({
            "error": "Address Already Present",
            "message": "The user already has an address."
        })

        //create the address 
        const newAdd = await Address.create({
            street, state, pincode
        })

        //add the address
        userFound.address = newAdd._id
        userFound.save()

        res.status(201).json({
            "message": "Address added successfully",
            "address": newAdd
        })
    }
    catch (error) {
        if (error.message.includes("validation failed")) return res.status(422).json({
            "error": " Validation Failed",
            "message": error.message
        })
        console.log(error.message)
        res.status(500).json({ "error": "internal sever error" })
    }

}
export const getAddress = async (req, res) => {
    try {
        const userId = req.loggedUser._id
        const userFound = await User.findById(userId).populate("address").select("address")
        res.status(200).json(userFound)
    } catch (error) {
        res.status(500).json({
            "error": "Internal server error",
            "message": "Internal server error"
        })
    }
}