import express from "express"
import { createBook, getAllBooks } from "../controllers/books.controller.mjs"

const books=express.Router()

books.get("/getAllBooks",getAllBooks)
books.post("/createBook",createBook)

export default books