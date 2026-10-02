import express from 'express'
import pool from './db.js'

const app = express()

app.use(express.json())

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 100000
    },
    {
        "id": 2,
        "name": "iPhone",
        "price": 120000
    },
    {
        "id": 3,
        "name": "Keyboard",
        "price": 3000
    },

]

app.post('/products', (req, res) => {

    const product = req.body

    products.push(product)

    res.json(product)

})

app.put('/products/:id', (req, res) => {
    const id = req.params.id
    const updatedProduct = req.body
    const product = products.find(p => p.id == id)
    Object.assign(product, updatedProduct)
    res.json(product)
})

app.delete('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id == id)
    products.splice(products.indexOf(product), 1)
    res.json(product)
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/', (req, res) => {
    res.json("hello home page")
})

app.get('/contact', (req, res) => {
    res.json("hello contact page")
})

app.get('/about', (req, res) => {
    res.json("hello about page")
})

// var_name , function() or method_name , data_number, arrow() same every one
pool.query('SELECT NOW()', (error, result) => {
    if (error) {
        console.error('Error: DATABASE Failed', error);
        return;
    }
    console.log('DATABASE is Connected Successfully', result.rows[0]);
});

app.listen(5000, () => {
    console.log("server is running on port 5000")
})