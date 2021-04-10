// 引入模块
const wdProcess = require("./moudle/woodenDoor");
const mainContent = require("./moudle/mainContent");
const xlsx = require("xlsx");
const express = require("express");
const QueryString = require("querystring");
const path = require("path");
const url = require("url");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 8000;

// gzip
const compression = require("compression");
//加载cors,主要用于解决跨域问题，解决跨域问题
app.use(cors());
// 导入gzip压缩中间件
app.use(compression());
// 托管静态资源
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "./dist")));
// app.use(express.static(path.join(__dirname, "./public/check-kjl")));

// 监听客户端请求

// // 定制模块列表请求，请求参数无
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
      // 判断目录里的文件是不是图片
      if (mainContent.isImg(i)) {
        arr.push(`${req.url.substring(0, req.url.indexOf("?"))}${imgDir}/${i}`);
      }
    }
    // 响应请求，发送新数组
    res.send(arr);
  });
});

// 结果图解图片，响应图解图片
// 请求地址是服务器存放对应品类图片的文件夹，如woodenDoor对应门窗定制
// 请求参数是产品文件夹，如single是单开门。
app.get("/img/diagram", function (req, res) {
  // 解析请求参数
  const urlObj = url.parse(req.url, true);
  const query = urlObj.query;

  // 确认请求的是什么产品,获取应该响应哪个文件夹
  const imgDir = mainContent.mainImg(query);
  // 读取对应产品文件夹，响应文件夹内的图片
  fs.readdir(`public/img/diagram/${imgDir}`, function (err, files) {
    let arr = [];
    if (err) {
      throw err;
    }
    // files是一个数组，是文件夹每个文件的名称组成的数组。
    for (const i of files) {
      // req.url.substring(0, req.url.indexOf("?"))只取url里?前面的字符串
      // 把文件名称加上路径，组成一个新数组
      if (mainContent.isImg(i)) {
        arr.push(`${req.url.substring(0, req.url.indexOf("?"))}${imgDir}/${i}`);
      }
    }
    // 响应请求，发送新数组
    res.send(arr);
  });
});
// 门套线列表请求
app.get("/doorBuild", function (req, res) {
  res.send(wdProcess.doorBuildMenus());
});

// 劳卡酷家乐账号查询请求
app.all("/userid", (req, res) => {
  //跨域处理
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Method", "*");
  res.setHeader("Content-type", "application/json");

  const url = req.url;
  const method = req.method;
  //以?为分界截取第一段，这里query表示客户在页面输入的值，query是一个对象
  const query = QueryString.parse(url.split("?")[1]);
  const queryValue = Object.values(query)[0];

  const wb = xlsx.readFile("account-data.xls");
  const ws = wb.Sheets;
  const str = xlsx.utils.sheet_to_json(ws["账号信息"]);

  //判断客户编号
  //创建一个数据存放遍历好的行对象。
  let message = [];
  if (
    queryValue.slice(0, 2) == "LJ" ||
    queryValue.slice(0, 2) == "LK" ||
    queryValue.slice(0, 2) == "LZ"
  ) {
    //遍历每一个行对象，line结果是一个对象
    for (let line of str) {
      //遍历行对象里面的每一个格（元素），并与queryValue对比
      for (let grid in line) {
        //如果此对象元素等于queryValue，那么返回对应行对象。否者退出if。
        if (line[grid] == queryValue) {
          message.push(line);
          break;
        }
      }
    }
  } else {
    message = "请输入以LJ开头+5位数字的客户编号";
  }

  const hello = { account: message };
  res.send(JSON.stringify(hello));
  // const hello = {name: queryValue, age:'18'}
  // res.send(JSON.stringify(hello));
});

app.listen(port, () => {
  console.log(`Example app listening on port port!`);
});
