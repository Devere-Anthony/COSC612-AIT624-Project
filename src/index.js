/* EXPRESS REQUIREMENTS */
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

/* CREATE CONNECTION TO DATABASE */
/* TODO: Change database credentials before deployment to Heroku */
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
  /* getProduct - return all records from product table */
  pool.query('SELECT * FROM product', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
  })
}

/* EXPRESS SETTINGS */
app.use(express.urlencoded({extended: true, limit: '1mb'}))
app.use('/', express.static('src/public'));
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
  const { productID, productName, barcode, category, retail, wholesale, quantity, max, min} = req.body
  const product = {productID, productName, barcode, category, retail, wholesale, quantity, max, min}
  pool.query(`UPDATE product
                SET barcode = ${barcode},
                    category = 'Light Roast',
                    retail = ${retail},
                    wholesale = ${wholesale},
                    quantity = ${quantity}, 
                    max_thresh = ${max}, 
                    min_thresh = ${min}
                WHERE product_id = ${productID};`, 
                (err, output) => {
                  if (err) throw err
                  res.send("Product updated successfully!")
                  })
})

app.listen(PORT, () => {
console.log(`App up at port ${PORT}`);
});