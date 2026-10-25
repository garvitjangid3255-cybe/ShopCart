import Data from "../models/some.js"
import User from "../models/user.js";
// pahale wala code
// export const hello = async (req, res) => {
//     try {
//         const data = await Data.find()
//         res.status(200).json({ message: "Data Fetching...", data })

//     } catch (error) {
//         console.log(error.message);
//         res.status(401).json({ error: error.message })
//     }
// }

// naya wala code
export const hello = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password');

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Profile fetched successfully",
            user
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const send = async (req, res) => {
    try {
        const { name, age } = req.body
        const data = await Data.create({ name, age })
        console.log(name, age);
        res.status(200).json({ message: "Data sending...", data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

export const updation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const data = await Data.findByIdAndUpdate(id, { name, age }, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "Data not found"
            });
        }
        res.status(200).json({ message: "Data updating...", data })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }
}

export const deleteData = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Data.findByIdAndDelete(id)
        res.status(200).json({ message: "Data deleting...", data })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ error: error.message })
    }
}