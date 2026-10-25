// import dns from 'dns';
// // Node.js ko batayein ki Google ka DNS use kare taaki MongoDB Atlas se connect ho sake
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// import express from 'express';
// import mongoose from 'mongoose';


// // User Collection
// (async () => {

//     try {
//         const connectionInstance = await mongoose.connect('mongodb+srv://garvitjangid3255_db_user:4iNDVKBZbw3EUaLF@cluster1.bz3e9xo.mongodb.net/')
//         console.log(connectionInstance.connection.host);
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:");
//     }
// })()
// // Data Definition
// const userSchema= mongoose.Schema({
//     name:String,
//     age:Number  
// })
// // User Model
// const userCollection=mongoose.model('user',userSchema)
// const app = express();

// app.use(express.json())

// app.post('/create-user', async (req, res) => {
//    const userData=req.body;
// const createdUser= await userCollection.create(userData)
// res.send({
//     "createdUser":createdUser
// })
// })

// app.listen(4000, () => {
//     console.log('This server is running on http://localhost:4000');
// });


// ➡️ 
// import dns from 'dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']); 

// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();

// (async () => {
//     try {
//         // URL ke aakhiri mein timeout badha diya hai taaki slow net par bhi connect ho sake
//         const connectionInstance = await mongoose.connect('mongodb+srv://garvitjangid3255_db_user:4iNDVKBZbw3EUaLF@cluster1.bz3e9xo.mongodb.net/?connectTimeoutMS=30000');

//         console.log(`👍 MongoDB Connected! Host: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("❌ Detail Error:", error); 
//     }
// })();

// app.post('/create-user', (req, res) => { res.send('Hello World!!'); });

// app.listen(4000, () => {
//     console.log('🚀 This server is running on http://localhost:4000');
// });


// ➡️ 
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// 🔥 Maine aapki connection string ka format badal diya hai (Standard replicaSet format)
// Isse Node.js bina kisi DNS jhanjhat ke seedha MongoDB se connect ho jayega
const standardConnectionString = 'mongodb://garvitjangid3255_db_user:4iNDVKBZbw3EUaLF@cluster1-shard-00-00.bz3e9xo.mongodb.net:27017,cluster1-shard-00-01.bz3e9xo.mongodb.net:27017,cluster1-shard-00-02.bz3e9xo.mongodb.net:27017/garvit_db?ssl=true&replicaSet=atlas-m9v5re-shard-0&authSource=admin&retryWrites=true&w=majority';

// Database se connect karne ka safe tareeka
(async () => {
    try {
        const connectionInstance = await mongoose.connect(standardConnectionString);
        // 🔥 Connection kamyaab hone par terminal mein video waala host name print hoga!
        console.log(`👍 MongoDB Connected Successfully! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
    }
})();

// Data Definition (Schema)
const userSchema = mongoose.Schema({
    name: String,
    age: Number
});

// User Model
const userCollection = mongoose.model('user', userSchema);

// Create User API Route
app.post('/create-user', async (req, res) => {

    const userData = req.body;
    const createdUser = await userCollection.create(userData);
    res.send({
        "createdUser": createdUser
    });
}
    // res.status(500).send({ "error": error.message });
);

app.listen(4000, () => {
    console.log('🚀 This server is running on http://localhost:4000');
});
