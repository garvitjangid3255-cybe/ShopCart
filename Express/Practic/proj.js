const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Home Page!!');
})

server.get('/about', (req, res) => {
    res.send('About Page!')
})

server.get('/contact', (req, res) => {
    res.send('Contact Page!')
})

server.get('/product', (req, res) => {
    res.send('Products page!')
})

server.use((req, res) => {
    res.status(404).send('404 - Page Not Found!!');
});

server.listen(3000, () => {
    console.log('Server URl Created!!');
})