import express from "express"
import { createBook, getAllBooks, getBookById } from "../controllers/books.controller.mjs"
import { protect } from "../middlewares/project.mjs"

const books=express.Router()

books.get("/getAllBooks",protect,getAllBooks)
books.post("/createBook",protect,createBook)
books.get("/getBookById/:bookId",protect,getBookById)

export default books