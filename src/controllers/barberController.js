import Barber from "../models/Barber.js";

export const createBarber = async (req, res) => {
    const { name, email, phone, specialization, experience, available } = req.body
};