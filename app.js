const express = require('express')
const url = require('url')
const app = express()
const port = 8080
// 定制模块列表请求
app.get('/Custom', (req, res) => {
  // const urlObj = url.parse(req.url ,true);
  // const query = urlObj.query;
  let custom = {}
  let woodenDoor = [
    "单开门","子母门","双开门"
  ]

  res.send(urlObj)
})
// 木门工艺算法结果请求
app.get('/process', (req, res) => {
  res.send('process')
})
app.listen(port, () => console.log(`Example app listening on port port!`))