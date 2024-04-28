import { Author } from "../models/author.model.mjs"
import { User } from "../models/user.model.mjs"

export const beauthor = async (req, res) => {
    const userid = req.loggedUser._id
    const { dob } = req.body
    try {
        //check the dob is present or not in the request body
        if (!dob) return res.status(400).json({
            "error": "Bad request",
            "message": "Please fill all the information"
        })

        //find the address is exist or not for that user
        const userDetails = await User.findById(userid)
        if (!userDetails.toObject().address) return res.status(400).json({
            "error": "Bad request",
            "message": "Please add the address"
        })
        //Create the addres and remove the 10 point for the credit
        userDetails.credit += -10
        userDetails.save()
        const newAuthor = await Author.create({
            authorInfo: userDetails._id, dob
        })
        console.log(newAuthor._id)
        userDetails.authorId = newAuthor._id
        userDetails.save()
        await newAuthor.populate("authorInfo")
        if (!newAuthor) return res.status(500).json({
            "error": "Internal server error",
            "message": "Internal server error"
        })
        //send the request
        res.status(200).json({ newAuthor })
    } catch (error) {
        if (error.message.includes("E11000")) return res.status(409).json({
            "error": "User id already in the author DB",
            "message": "You are already an Author"
        })
        console.log(error.message)
        res.status(500).json({
            "error": "Internal Server Error",
            "message": "Internal Server Error"
        })
    }
}