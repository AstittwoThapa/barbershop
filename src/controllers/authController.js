import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if ( userExists ) {
        res.status(400).json ({
            message: "User already exists!"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User ({
        name: name, 
        email: email,
        password: hashedPassword
    });

    await user.save();

    return res.status(201).json({
        message: "User registered successfully!"
    });
}
    catch(err) {
        return res.status(500).json({
            message: "Server error",
            err: err.message
        });
    }

}

