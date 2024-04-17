import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true,
        enum: {
            values: ['Action', 'Romance', 'Comedy'],
            message: 'Please enter valid genres'
        }
    },
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    price: {
        type: Number,
        required: true,
        min: [10, "Minimum price should be 10"]
    }
})

export const Books = mongoose.model("Book", bookSchema)