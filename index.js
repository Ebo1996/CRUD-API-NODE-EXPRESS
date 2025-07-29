const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
  res.send('Hello from Node API Server')
})
mongoose.connect("mongodb+srv://ebisaberhanu1996:@crud.io8xdkz.mongodb.net/?retryWrites=true&w=majority&appName=CRUD")
  .then(() => console.log('Connected!'));