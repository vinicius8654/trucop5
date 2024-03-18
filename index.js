const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening osn port ${port}`)
  app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(path.join(__dirname + "/trucop5.html"))
  })
})