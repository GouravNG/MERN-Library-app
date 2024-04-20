import express from "express"
import { createBook, getAllBooks, getBookById } from "../controllers/books.controller.mjs"

const books=express.Router()

books.get("/getAllBooks",getAllBooks)
books.post("/createBook",createBook)
books.get("/getBookById/:bookId",getBookById)

export default books