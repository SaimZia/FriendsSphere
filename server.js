const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// handle form submission
app.post('/submit', (req, res) => {
  const report = req.body.report
  // save the report to the database
  // ...
  res.send('Report submitted successfully')
})

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
