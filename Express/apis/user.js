import express from 'express';
import mongoose from 'mongoose';

const connection=mongoose.connect('mongodb+srv://garvitjangid3255_db_user:4iNDVKBZbw3EUaLF@cluster1.bz3e9xo.mongodb.net/')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
})