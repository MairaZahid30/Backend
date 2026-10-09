import express from 'express'
import pool from './db.js'

const app = express()
// middle ware
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

pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INTEGER
  )
`, (error, result) => {
  if (error) {
    console.log("Table creation failed", error)
  } else {
    console.log("Users table created successfully")
  }
})

//.ware 
app.use(express.json());

app.post("/users", (req, res) => {


  const { name, email, age } = req.body

  const query = `
    INSERT INTO users (name, email, age)
    VALUES ($1, $2, $3)
    RETURNING *
  `

  pool.query(query, [name, email, age], (error, result) => {
    if (error) {
      console.log("User creation failed", error)
      return res.status(500).json({
        message: "Failed to create user"
      })
    }

    res.status(201).json({
      message: "User created successfully",
      user: result.rows[0]
    })
  })
})

app.delete('/users/:id', (req, res) => {
  const [id] = req.params
  const query = 'DELETE FROM users WHERE id = $1'

  pool.query(query, [id], (error, result) => {
    if (error) {
      res.json({
        message: "Failed to delete user"
      })
    }
    if (result) {
      res.json({
        message: "User deleted successfully"
      })
    }
  })

})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const query = 'SELECT * FROM users WHERE id = $1'

  pool.query(query, [id], (error, result) => {
    if (error) {
      res.json({
        message: "no data found"
      })
    }
    if (result.rows.length === 0) {
      res.json({
        message: "User not found"
      })
    } else {
      res.json({
        message: "User found successfully",
        user: result.rows[0]
      })
    }
  })

})

app.patch('/users/:id', (req, res) => {
  const id = req.params.id
  const { name, email, age } = req.body

  const query = `
        UPDATE users
        SET 
          name = $1,
          email = $2,
          age = $3
        WHERE id = $4
        RETURNING *
    `

  pool.query(query, [name, email, age, id], (error, result) => {
    if (result) {
     res.json({
        message: "Failed to update user"
      })
    }

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    res.json({
      message: "User updated successfully",
      user: result.rows[0]
    })
  })
})

app.listen(5000, () => {
  console.log("server is running on port 5000")
})

// get, post, patch and delete are the methods of express.js