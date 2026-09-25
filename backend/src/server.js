import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import barberRoutes from "./routes/barberRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/barbers", barberRoutes );
app.use("/api/service", serviceRoutes);

app.get("/", (req, res) => {
    res.json ({
        message: "BarberHub API is running!"
    });
});

app.get("/api/shops", (req, res) => {
    res.json ([
        {
            id: 1,
            name: "FirstBarberShop"
        },
        {
            id: 2,
            name: "SecondBarberShop",
        },
        {
            id: 3,
            name: "ThirdBarberShop"
        }
    ]);
});

const PORT = process.env.PORT || 3000;

connectDB();

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})