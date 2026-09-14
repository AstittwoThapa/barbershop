import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description :{
        type: String
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        default: "Kathmandu" 
    },

    phone: String,

    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point" 
        },

        coordinates: {
            type: [Number],
            required: true
        }
    },

    genderFocus: [
        {
            type: String,
            enum: ["male", "female", "unisex"]
        }
    ],

    capacityPerSlot: {
        type: Number,
        default: 3
    }

});

shopSchema.index({
    location: "2dsphere"
});

export default mongoose.model("Shop", shopSchema);