import express from "express"
import dotenv from "dotenv"
dotenv.config({ path: "../.env"})

import Auth from "./routes/auth.route.mjs"
import { mongoConnection } from "./other/mongo.connection.mjs"

const app = express()
const PORT = process.env.PORT || "8080"
const mongodbConnectionString = process.env.mongodbConnectionString || ""

app.get("/", (req, res) => {
    res.send("Welcome to Library")
})

app.use(express.json())
app.use("/api/auth", Auth)

app.listen(PORT, () => {
    mongoConnection(mongodbConnectionString)
    console.log(`Server running on PORT:${PORT}`)
})