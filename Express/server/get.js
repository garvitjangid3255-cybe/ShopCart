import express from 'express';
import cors from 'cors';
import router from './routes/route.js';
import user from './routes/user.js';
import cart from './routes/cart.js'
import dotenv from 'dotenv';
import { connectDB } from './database/database.js';
const server = express()

dotenv.config()

connectDB();

server.use(cors({
    origin: 'http://localhost:5173'
}))

server.use(express.json())

server.use('/api', router)
server.use('/api', user)
server.use('/api', cart)

const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log('locol host pe ek server create ho chuka hai!!');
})
export default server