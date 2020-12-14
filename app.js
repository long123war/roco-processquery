const express = require("express");
const url = require("url");
const app = express();
const port = 8080;
const wdProcess = require("./moudle/woodenDoor");
// 定制模块列表请求
app.get("/Custom", (req, res) => {
  // const urlObj = url.parse(req.url ,true);
  // const query = urlObj.query;
  let rocoCustom = ["门窗定制", "家具定制", "厨卫定制"];
  let woodenDoor = ["单开门", "子母门", "双开门"];
  // id——需要设置的id值
  // menusName需要设置的菜单名称
  // ParentObj需要设置的父对象

  res.send(wdProcess.getRocomenus(rocoCustom));
});
// 木门工艺算法结果请求
app.get("/process", (req, res) => {
  res.send("process");
});
app.listen(port, () => console.log(`Example app listening on port port!`));
