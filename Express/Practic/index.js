import express from 'express';

const app = express();
const products = [
    { id: '1', item: 'Laptop', price: 50000 },
    { id: '2', item: 'Mobile', price: 20000 },
    { id: '3', item: 'Mobile', price: 30000 },
    { id: '4', item: 'Tablet', price: 35000 },
    { id: '5', item: 'Laptop', price: 75000 }
]

app.get('/', (req, res) => {
    res.send('Welcome to our website where you found electronic items!!')
})
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
    const data = products.find((items) => items.id === req.params.id)
    if (data) {
        res.json(data)
    } else {
        res.status(404).send({ error: 'Product Not Found' })
    }

})
app.get('/search', (req, res) => {
    const result = products.filter((value) => value.item === req.query.item)
    res.json(result)
})
app.listen(9000, () => {
    console.log('Server Is Created');
})

// tum mujhe js ke core consepts ke interviewer wale most important ques do