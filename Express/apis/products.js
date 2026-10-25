import express from 'express';

const app = express()

app.get("/",(req,res)=>{
    res.send('My first challange is started...')
})

app.listen(6001,()=>{
    console.log('Server 6001 create ho chuka hai..');
})