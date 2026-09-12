import express from "express";

const app = express();

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

app.listen (3000, () => {
    console.log("Server is running on port 3000");
    
})