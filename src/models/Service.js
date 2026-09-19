import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
        default: 0
    },

    duration:{
        type: String,
        required: true,
    },

    available:{
        type: Boolean,
        default: true
    }
});

export default mongoose.model("Service", serviceSchema);

