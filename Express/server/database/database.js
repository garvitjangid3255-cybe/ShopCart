import mongoose from "mongoose";
import dns from 'dns';

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.log("Connection Failed", error.message);
    }
}