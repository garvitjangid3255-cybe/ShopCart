// import express from 'express';

// const app = express();
// app.use(express.json())
// const products = [
//     { id: "1", item: "Laptop", price: 50000 },
//     { id: "2", item: "Mobile", price: 20000 },
//     { id: "3", item: "Tablet", price: 30000 },
//     { id: "4", item: "Laptop", price: 70000 },
//     { id: "5", item: "Mobile", price: 35000 }
// ]

// app.get('/', (req, res) => {
//     res.send('Welcome to our store..')
// })

// app.get('/products', (req, res) => {
//     res.send(products)
// })

// app.get('/products/:id', (req, res) => {
//     const data = products.find((item) => item.id === req.params.id)
//     if (data) {
//         res.json(data)
//     } else {

//         res.status(404).json({ message: "Product not found..." })
//     }
// })

// app.get('/search', (req, res) => {
//     const data = products.filter((product) => product.item === req.query.item)
//     if (data.length > 0) {
//         res.json(data)
//     } else {
//         res.status(404).json({ message: "Product not found..." })
//     }

// })

// app.post("/new-product", (req, res) => {
//     const newProduct = {
//         id: req.body.id,
//         item: req.body.item,
//         price: req.body.price
//     }

//     products.push(newProduct

//     )
//     res.status(200).json({ message: "New product added Successfully", product: newProduct })
// })

// app.patch('/products/:id', (req, res) => {
//     const id = req.params.id;

//     const item = req.body.item;
//     const price = req.body.price;

//     const product = products.find((product) => product.id === id)
//     if (!product) {
//         return res.status(404).json({ message: 'Product not found...' })
//     }
//     product.item = item
//     product.price = price

//     res.status(200).json({ message: "Producted Updated..." })
// })
// app.delete('/del-product/:id', (req, res) => {
//     const id = req.params.id

//     const index = products.findIndex((product) => product.id === id)
//     if (index === -1) {

//         return res.status(400).json({ message: "Producted not found..." })
//     }
//     products.splice(index, 1)
//     /* Bas isko yaad rakh 🧠
// products.splice(index, 1);

// index = kahan se delete karna hai

// 1 = kitne items delete karne hain */
//     res.status(200).json({ message: "Producted Deleted Successfully..." })
// })
// app.listen(4000, () => {
//     console.log('Server created on 4000...');
// })