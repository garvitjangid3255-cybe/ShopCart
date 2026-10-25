import express from 'express';

const app = express()
app.use(express.json()) // ye ek middleware hai jo req.body ko json format me convert karta hai
const notes = []
app.post('/notes', (req, res) => {
    // ➡️ IS ('/notes) ME JO DATA HAI WO FRONTEND SE SERVER PAR AA RAHA THA KYUKI HUM YAHA PE [POST] METHOD KA USE KAR RAHE AHI 
    // console.log(req.body);
    notes.push(req.body);
    // res.send('THis is a notes!!')
    res.status(201).json({ massege: "Note Created Successfully!!" })
})

//  ➡️ OR ISME ('/notes)JO DATA HAI WO SERVER SE FRONTEND PAR HAA RAHA HOGA KYUKI HUM YAHA PAR [GET] METHOD KA USE KAR RAHE AHI
app.get('/notes', (req, res) => {
    res.status(200).json({ message: "Notes fetched successfully", notes: notes })
})
export default app





// ------------------------------------------------------------
// app.get('/',(req,res)=>{
//     res.send("Hello World!!")
// })
// app.get('/about',(req,res)=>{
// res.send('About Page!!')
// })
// app.listen(5000,()=>{
//     console.log('Server create ho gaya hai!!');
// })