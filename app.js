const wdProcess = require("./moudle/woodenDoor");
const mainContent = require("./moudle/mainContent");
const express = require("express");
const url = require("url");
const path = require("path");
const app = express();
const port = 8080;
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
// name：产品名
// doorLine: 门套线款式
// doorWayWvalue：门洞宽
// doorWayHvalue：门洞高
// wayD：墙厚
// doorNum：门扇数
app.get("/doorProcess/results", (req, res) => {
  // 解析请求参数
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  res.send(
    wdProcess.doorResults(
      query.name,
      query.doorLine,
      query.doorWayWvalue,
      query.doorWayHvalue,
      query.wayD,
      query.doorNum
    )
  );
  // res.send(query);
});

// 主内容图片，响应木门图片
// 请求地址是服务器存放对应品类图片的文件夹，如woodenDoor对应门窗定制
// 请求参数是产品文件夹，如single是单开门。
app.get("/img/woodenDoor", function (req, res) {
  // 解析请求参数
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  // 确认请求的是什么产品,获取应该响应哪个文件夹
  const imgDir = mainContent.mainImg(query);
  // 读取对应产品文件夹，响应文件夹内的图片
  fs.readdir(`public/img/woodenDoor/${imgDir}`, function (err, files) {
    let arr = [];
    if (err) {
      throw err;
    }
    // files是一个数组，是文件夹每个文件的名称组成的数组。
    for (const i of files) {
      // req.url.substring(0, req.url.indexOf("?"))只取url里?前面的字符串
      // 把文件名称加上路径，组成一个新数组
      arr.push(`${req.url.substring(0, req.url.indexOf("?"))}${imgDir}/${i}`);
    }
    // 响应请求，发送新数组
    res.send(arr);
  });
});
// 门套线列表请求
app.get("/doorBuild", function (req, res) {
  // 解析请求参数
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  res.send(wdProcess.doorBuildMenus());
});

app.listen(port, () => console.log(`Example app listening on port port!`));
