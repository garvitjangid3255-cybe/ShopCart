// // import express from 'express';

// // const app = express()

// // app.get('/',(req,res)=>{
// //     res.send([
// //         {
// //             name:'Muskan',
// //             age:23,
// //         },
// //         {
// //             name:'Joya',
// //             age:25,
// //         },
// //     ])
// // })

// // app.listen(3000);

// import express from 'express'

// const server = express();
// server.use(express.json())

// server.get('/', (req, res) => {
//     res.send('Home Route');
// })

// server.get('/about', (req, res) => {
//     res.send('About Route');
// })
// server.post('/create', (req, res) => {
//     console.log(req.body); res.send({
//         message: `Hey ${req.body.name} your data successfully save ho gaya!!`
//     })
// })
// server.get('/login', (req, res) => {
//     res.send('You Are Loggined In!!');
// })

// server.listen(7000, () => {
//     console.log('server running on http://localhost:7000');
// });


// /search?name=laptop&price=50000


/* export const getData = (req, res) => {
    res.status(200).json(data)
}

export const dataSend = async (req, res) => {
    try {
        const { name, age, address } = req.body;

        const newData = {
            id: Date.now().toString(),
            name: name,
            age: age,
            address: address
        }
        data.push(newData)

        console.log('New Data Save Huaa', newData);

        return res.status(201).json({
            message: "Data Send ho gaya hai...",
            currentData: data
        })
    }

    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }
}


export const updateData = (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name
        const age = req.body.age
        const address = req.body.address

        const useIndex = data.findIndex(user => user.id === id)

        if (useIndex === -1) {
            res.status(404).json({ message: "User Nahi mil raha hai" })
        }

        data[useIndex].name = name
        data[useIndex].age = age
        data[useIndex].address = address
        res.status(201).json({ message: "Data Update ho gaya hai", name, age, address })
        console.log(data);
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error.message);
    }

} */