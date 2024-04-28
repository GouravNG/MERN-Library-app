import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    authorInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    }]
}, { timestamps: true })

export const Author = mongoose.model("Author", authorSchema)