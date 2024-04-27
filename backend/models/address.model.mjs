import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        min: [6, "Please enter the valid pin code"],
        // max: [6, "Please enter the valid pin code"]
    }
})

export const Address = mongoose.model("Address", addressSchema)