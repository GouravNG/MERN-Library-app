import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true,   
    },
    password: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        default: 0
    },
    address: {
        type: String
    },
    booksOwned: {
        type: String
    },
    booksRented: {
        type: String
    }

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)