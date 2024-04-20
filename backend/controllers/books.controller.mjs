import { Books } from "../models/book.model.mjs"
import { User } from "../models/user.model.mjs"

export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Books.find().populate({
            path:"authorInfo",
            select:"firstname lastname"
        })
        res.status(200).json(allBooks)
    }
    catch (error) {
        console.log("Problem in getAllBooks function\n", error.message)
        res.status(500).json({
            "error":"Something Went Wrong",
            "Message":"Something Went Wrong"
        })
    }
}

export const createBook = async (req, res) => {
    try {
        const { title, genres, authorid, price } = req.body
        //check all fields are present or not
        if (!title || !genres || !authorid || !price) return res.status(400).json({
            "error": "invaalid request",
            "message": "Please re-check the data"
        })
        //find the author using the id
        const authorData = await User.findById(authorid)
        if (!authorData) return res.status(400).json({
            "error": "User not found",
            "message": "Please make sure you are an author"
        })
        //create the book 
        const newBook = new Books({ title, genres, authorInfo: authorData._id, price })
        console.log(newBook)
        if (newBook) {
            const newBookcreated = await newBook.save()
            res.status(201).json(newBookcreated)
        }
        else res.status(500).json({
            "error": "Something went wrong in creating the new book",
            "message": "Something went wrong in creating the new book"
        })
    } catch (error) {
        if (error.message.includes("validation failed")) return res.status(422).json({
            "error": " Validation Failed",
            "message": error.message
        })
        console.log("Eror in createBook function\n", error.message)
        res.status(500).json({
            "error": "Something went wrong",
            "message": "Something went wrong"
        })
    }
}

export const getBookById = async (req, res) => {
    try {
        //get the id
        const bookId = req.params.bookId
        //find the book
        //Populate the data
        const bookFound = await Books.findById(bookId).populate({ path: "authorInfo", select: "firstname lastname email" })
        //send the data
        res.status(200).json(bookFound)

    } catch (error) {
        console.log("Error in create book function \n ")
        res.status(500).json({
            "error":"Something went wrong",
            "Message":"Something went wrong"
        })
    }
}