const express = require('express')
const app = express()
require ('dotenv').config()

// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('About Page')
})

app.post('/contact', (req, res) => {
  res.send('Contact Page')
})
app.put('/update', (req, res) => {
  res.send('Update Page')
})
app.delete('/delete', (req, res) => {
  res.send('Delete Page')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
