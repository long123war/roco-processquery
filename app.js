const express = require('express')
const app = express()
const port = 8080

app.get('/Custom', (req, res) => {
  res.send('Custom')
})
app.get('/process', (req, res) => {
  res.send('process')
})
app.listen(port, () => console.log(`Example app listening on port port!`))