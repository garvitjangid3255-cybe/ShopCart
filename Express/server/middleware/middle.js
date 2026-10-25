import jwt from 'jsonwebtoken';
const auth = (req, res, next) => {
    try {
        // 1. Check karein ki authorization header maujood hai ya nahi
        // if (!req.headers.authorization) {
        //     return res.status(401).json({ message: "Authorization header missing" });
        // }
        // 1. Sahi split karein (space ke sath: " ")
        const token = req.headers.authorization?.split(" ")[1];

        console.log('Incomming Token',token);
        console.log("Secret Key:", process.env.JWT_SECRET); 
        // 2. Token verify karein
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data

        next()

    } catch (error) {
         console.error("JWT Verification Error:", error.message); 
        res.status(401).json({ message: "Invalid Token" })
    }
}

export default auth
// if (req.headers.authorization === process.env.SECRET_KEY) {
//         next()
//     } else {
//         res.status(401).json({ message: "Not Allowed" })
// }