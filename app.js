const express = require("express");
const url = require("url");
const path = require("path");
const app = express();
const port = 8080;
const wdProcess = require("./moudle/woodenDoor");
const cors = require("cors");
const fs = require("fs");
//加载cors,主要用于解决跨域问题，解决跨域问题
app.use(cors());
// 托管静态资源
app.use(express.static(path.join(__dirname, "public")));
// 定制模块列表请求，请求参数无
app.get("/Custom", (req, res) => {
  // const urlObj = url.parse(req.url ,true);
  // const query = urlObj.query;
  //调用wdProcess的custom方法获得定制模块列表
  res.send(wdProcess.custom());
});
// 门窗定制范围查询
// 请求参数：
// productName:定制产品名称。
app.get("/doorProcess", (req, res) => {
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  res.send(wdProcess.minProcessMax(query.productName));
  // res.send(query);
});
// 计算包框尺寸的值
// 请求参数：
// doorWayWvalue：门洞宽
// doorWayHvalue：门洞高
// wayD：墙厚
app.get("/doorProcess/results", (req, res) => {
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  res.send(
    wdProcess.doorResults(query.doorWayWvalue, query.doorWayHvalue, query.wayD)
  );
  // res.send(query);
});
// 主内容图片
app.get("/img/", function (req, res) {
  fs.readdir("public/img", function (err, files) {
    let arr = [];
    if (err) {
      throw err;
    }
    for (const i of files) {
      arr.push(req.url + i);
    }
    res.send(arr);
    console.log(files);
  });
  // res.sendFile(__dirname + "/" + req.url);
  // console.log("Request for " + req.url + " received.");
});

app.listen(port, () => console.log(`Example app listening on port port!`));
