const express = require("express");
const url = require("url");
const app = express();
const port = 8080;
const wdProcess = require("./moudle/woodenDoor");
// 定制模块列表请求
app.get("/Custom", (req, res) => {
  // const urlObj = url.parse(req.url ,true);
  // const query = urlObj.query;
  // 定义定制模块
  let rocoCustom = ["门窗定制", "家具定制", "厨卫定制"];
  // 定义定制模块的子模块
  let rocoCustomChildren = {
    woodenDoor: ["单开门", "子母门", "双开门"],
    furniTure: ["五角柜掩门"],
    amBry: ["测试"],
  };
  // custom需要响应的数组。
  const custom = wdProcess.getRocomenus(rocoCustom);
  // 循环要添加到子菜单的数组，加到对应的响应数组对象中
  for (let i in custom) {
    // (Arr)要加到谁里面,(Arr)需要增加谁。
    if (custom[i].menusName === "门窗定制") {
      wdProcess.addRocomenus(
        custom[i],
        wdProcess.getRocomenus(rocoCustomChildren.woodenDoor)
      );
    } else if (custom[i].menusName === "家具定制") {
      wdProcess.addRocomenus(
        custom[i],
        wdProcess.getRocomenus(rocoCustomChildren.furniTure)
      );
    } else if (custom[i].menusName === "厨卫定制") {
      wdProcess.addRocomenus(
        custom[i],
        wdProcess.getRocomenus(rocoCustomChildren.amBry)
      );
    }
  }

  res.send(custom);
});
// 木门工艺算法结果请求
app.get("/process", (req, res) => {
  res.send("process");
});
app.listen(port, () => console.log(`Example app listening on port port!`));
