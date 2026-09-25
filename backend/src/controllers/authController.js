import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
    const { name, email, password, role } = req.body;

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
        password: hashedPassword,
        role
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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne( {email} );

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password!"
            })
        };

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            res.status(400).json({
                message: "Invalid email or password!"
            })
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, 
            process.env.JWT_SECRET,
            {
                expiresIn: "90d"
            }
    );

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 90 * 24 * 60 * 60 * 1000 
    });

    return res.status(200).json ({
        message: "Login successful!"
    });

    }
    catch (err) {

    }
};

export const logoutUser = async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    });

    return res.status(200).json({
        message: "Logout successful"
    });
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        return res.status(200).json({
            user
        })
    }
    catch(error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
};

export const getAllUsers = async ( req, res ) => {
    try {
        const allUsers = await User.find().select("-password");

            return res.status(200).json({
                users: allUsers
            })
    }

    catch(error) {
        return res.status(403).json ({
            message: "Failed to retrieve the users..",
            error: error.message
        });
    }
};