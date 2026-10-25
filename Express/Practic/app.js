const express =require('express')
// ➡️ Express ko project mein laaya.

const app  =express();
// ➡️ Express application/server object banaya.

app.get('/',(req,res)=>{
    res.send('Hello Express!')
})
// ➡️ GET request ke liye route banaya.

app.listen(7003,()=>{
    console.log('Server Started!!');
})

// ➡️ Server ko port 7003 par start kiya.