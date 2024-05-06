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
        lowercase: true,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    booksOwned: {
        type: Number,
        default:0
    },
    booksRented: {
        type: Number,
        default:0
    },
    authorId: {
        type: String,
        default: ""
    }

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)