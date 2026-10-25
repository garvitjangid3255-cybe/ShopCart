import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => { 
    try {
        const { username, email, password } = req.body

        const hassPass = await bcrypt.hash(password, 10)

        const user = await User.create({ username, email, password: hassPass })
        res.status(201).json({ message: "Signup Successfully...", user })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "This email is already registered."
            });
        }

        return res.status(500).json({
            message: "Something went wrong."
        });

        // console.log(error);
        // res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        // const isMatch = await bcrypt.compare(password,user.password)
        // if (!user || user.password !== password)
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid Credential" })
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        )

        res.status(201).json({ message: "Login Successfully...", token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}