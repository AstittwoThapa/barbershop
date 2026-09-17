import mongoose from "mongoose";

const barberSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    specialization: {
        type: String,
        enum: ["Haircut", "Manicure", "Pedicure"],
        default: "Haircut"
    },

    experience: {
        type: String
    },

    available: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model("barber", barberSchema);