import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config({ path: "../.env" })

import { mongoConnection } from "./other/mongo.connection.mjs"
import Auth from "./routes/auth.route.mjs"
import books from "./routes/book.route.mjs"
import author from "./routes/author.route.mjs"
import address from "./routes/address.route.mjs"

const app = express()
const PORT = process.env.PORT || "8080"
const mongodbConnectionString = process.env.mongodbConnectionString || ""

app.get("/", (req, res) => {
    res.send("Welcome to Library")
})

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", Auth)
app.use("/api/books", books)
app.use("/api/author", author)
app.use("/api/address", address)

app.listen(PORT, () => {
    mongoConnection(mongodbConnectionString)
    console.log(`Server running on PORT:${PORT}`)
})