const express = require('express');

const server = express();
const products = [
    { id: '1', item: 'laptop', price: 50000 },
    { id: '2', item: 'Mobile', price: 20000 },
    { id: '3', item: 'Mobile', price: 30000 },
    { id: '4', item: 'Tablet', price: 35000 },
    { id: '5', item: 'laptop', price: 75000 }
]


server.get('/', (req, res) => {
    res.send('Welcome to the Dynamic Product API! Go to /api/products to see all items.')
})

server.get("/products", (req, res) => {
    res.send(products)
})
server.get('/products/:id', (req, res) => {
    // res.send(`Products ID ${req.params.id}`)
    const data = products.find((item) => item.id === req.params.id)
    // item.id = array ke current product ki ID  //req.params.id = URL se aayi ID
    if (data) {
        res.json(data)
    } else {
        // res.send("Sorry, ye product list me nahi hai!");
        res.status(404).send({ error: "Product Not Found..." })
    }
})

server.get("/search", (req, res) => {
    console.log(req.query);
    const result = products.filter((product) => product.item === req.query.item)

    // res.send('Search Done...')
    res.json(result)
})
server.listen(2000, () => {
    console.log('Server Run On 2000');
})


/* req = poora request
params = URL ke :id jaise dynamic values
query = URL ke ?category=mobile jaise values
body = request ke andar bheja hua data */