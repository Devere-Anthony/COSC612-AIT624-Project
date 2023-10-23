/* REQUIREMENTS */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const PORT = process.env.PORT || 3000

/* CREATE CONNECTION TO DATABASE */
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'devere',
    host: 'localhost',
    database: 'devere',
    password: 'roasters1',
    port: 5433,
})

/* DATABASE FUNCTIONS */
const getFarm = (request, response) => {
  /* getFarm - return all records from farm table */
  pool.query('SELECT * FROM farm', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
  })
}

const getProduct = (request, response) => {
  /* getFarm - return all records from farm table */
  pool.query('SELECT * FROM product', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
  })
}

const updateProduct = (product, request, response) => {
  /* TODO: Move update logic here */
}

/* EXPRESS SETTINGS */
app.use(express.urlencoded({extended: true, limit: '1mb'}))
app.use('/', express.static('src/public'));


/* GET HOMEPAGE */
app.get('/', (req, res) => {
  res.sendFile("./public", 'index.html')
});


/* ROUTES */
// route 1: request data on all farms
app.get('/farms', getFarm)

// route 2: request data on all products
app.get('/products', getProduct)

// route 3: Update a specific product in the database
app.post('/products', (req, res) => {
  const { productID, productName, barcode, category, retail, wholesale, quantity} = req.body
  const product = {productID, productName, barcode, category, retail, wholesale }
  updateProduct(product)
  pool.query(`UPDATE product
              SET barcode = ${barcode},
                  category = 'Light Roast',
                  retail = ${retail},
                  wholesale = ${wholesale},
                  quantity = ${quantity}
              WHERE product_id = ${productID};`, 
               (err, output) => {
                if (err) throw err
                res.send("Prouct updated successfully!")
                })
})

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
})