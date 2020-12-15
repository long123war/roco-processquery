const express = require("express");
const url = require("url");
const app = express();
const port = 8080;
const wdProcess = require("./moudle/woodenDoor");
// 定制模块列表请求，请求参数无
app.get("/Custom", (req, res) => {
  // const urlObj = url.parse(req.url ,true);
  // const query = urlObj.query;
  //调用wdProcess的custom方法获得定制模块列表
  res.send(wdProcess.custom());
});
// 门窗定制范围查询，请求参数：productName定制产品名称。
app.get("/process", (req, res) => {
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  res.send(wdProcess.minProcessMax(query.productName));
  // res.send(query);
});
app.listen(port, () => console.log(`Example app listening on port port!`));
