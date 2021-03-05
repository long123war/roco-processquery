// 传入数组，返回一个由每个产品对象组成的数组
function getRocomenus(menusNameArr, pathArr) {
  let menusArr = [];
  for (let i in menusNameArr) {
    let menusObj = {};
    menusObj.id = i;
    menusObj.menusName = menusNameArr[i];
    menusObj.children = [];
    if (!pathArr) {
      menusObj.path = null;
    } else {
      menusObj.path = pathArr[i];
    }
    menusArr.push(menusObj);
  }
  return menusArr;
}
// 添加子列表的方法
// parentArr必须未数组对象，childrenArr可为数组对象，也可以是值。
// parentArr(Arr)要加到谁里面,childrenArr(Arr)需要增加谁
function addRocomenus(parentArr, childrenArr) {
  if (typeof childrenArr === "object") {
    for (let i of childrenArr) {
      parentArr.children.push(i);
    }
  } else {
    for (let i of childrenArr) {
      parentArr.path = childrenArr;
    }
  }
}
// 返回定制模块列表数组对象
function custom() {
  // 定义定制模块
  let rocoCustom = ["门窗定制", "家具定制", "厨卫定制"];
  // 定义定制模块的子模块
  let rocoCustomChildren = {
    woodenDoor: [
      "单开门",
      "双开门",
      "子母门",
      "通用推拉门01",
      "哑口套，三边窗套01，方形飘窗",
      "四边窗套",
      "L型飘窗",
      "通用玻璃门02",
      "通用推拉门02",
      "通用吊趟门01",
      "哑口套02，窗套02",
      "轻奢主义",
    ],
    woodenDoorPath: [
      "single",
      "doubles",
      "lash",
      "sliding",
      "dumbs",
      "windowt",
      "Wave",
      "glassdoor",
      "generalSliding",
      "hanging",
      "dumb",
      "luxurious",
    ],
    furniTure: ["五角柜掩门"],
    furniTurePaht: ["pentagon"],
    amBry: ["暂无"],
    amBryPaht: ["unknow"],
  };
  /// custom需要响应的数组。
  const custom = getRocomenus(rocoCustom);
  // 循环要添加到子菜单的数组，加到对应的响应数组对象中
  for (let i in custom) {
    // addRocomenus(Arr)要加到谁里面,(Arr)需要增加谁。
    switch (custom[i].menusName) {
      case "门窗定制":
        addRocomenus(
          custom[i],
          getRocomenus(
            rocoCustomChildren.woodenDoor,
            rocoCustomChildren.woodenDoorPath
          )
        );

        break;
      case "家具定制":
        addRocomenus(
          custom[i],
          getRocomenus(
            rocoCustomChildren.furniTure,
            rocoCustomChildren.furniTurePaht
          )
        );
        break;
      case "厨卫定制":
        addRocomenus(
          custom[i],
          getRocomenus(rocoCustomChildren.amBry, rocoCustomChildren.amBryPath)
        );
        break;

      default:
        break;
    }
  }
  return custom;
}

// 返回一个对象，该对象包含门洞定制范围和包框定制范围
function doorScope(doorWayW, doorWayH, doorframeW, doorframeH) {
  return {
    // 门洞范围最小最大W
    doorWayMinw: doorWayW.min,
    doorWayMaxw: doorWayW.max,
    // 门洞范围最小最大H
    doorWayMinh: doorWayH.min,
    doorWayMaxh: doorWayH.max,
    // 包框范围最小最大W
    doorframeMinw: doorframeW.min,
    doorframeMaxw: doorframeW.max,
    // 包框范围最小最大H
    doorframeMinH: doorframeH.min,
    doorframeMaxH: doorframeH.max,
  };
}
// 范围对应定制品类的工艺范围。
function minProcessMax(name) {
  switch (name) {
    // doorScope传入对象依次未：门洞范围最小最大W，门洞范围最小最大H，包框范围最小最大W，包框范围最小最大H
    // 产品换算规则对象：sortW,sortH，sort:1需要换算，门洞是范围，间隔sizeSpace。包框相对门洞尺寸差值dValue
    // sort:2需要换算，门洞是固定值，间隔sizeSpace。包框相对门洞尺寸差值dValue
    // 如果为 "0"则无需换算
    case "单开门":
      return {
        doorScope: doorScope(
          { min: 655, max: 1055 },
          { min: 1746, max: 2356 },
          { min: 635, max: 1015 },
          { min: 1736, max: 2336 }
        ),
        sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    case "子母门":
      return {
        doorScope: doorScope(
          { min: 928, max: 1388 },
          { min: 1746, max: 2356 },
          { min: 908, max: 1348 },
          { min: 1736, max: 2336 }
        ),
        sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    case "双开门":
      return {
        doorScope: doorScope(
          { min: 1228, max: 1988 },
          { min: 1746, max: 2356 },
          { min: 1208, max: 1948 },
          { min: 1736, max: 2336 }
        ),
        sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    case "垭口套":
      return {
        doorScope: doorScope(
          { min: 320, max: 5840 },
          { min: 310, max: 5820 },
          { min: 300, max: 5800 },
          { min: 300, max: 5800 }
        ),
        sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    // 哑口套02和窗套02
    case "垭口套02":
      return {
        doorScope: doorScope(
          { min: 310, max: 4810 },
          { min: 305, max: 4805 },
          { min: 300, max: 4800 },
          { min: 300, max: 4800 }
        ),
        sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    case "通用推拉门01":
      return [
        {
          num: "2",
          doorScope: doorScope(
            { min: 1108, max: 1868 },
            { min: 1794, max: 2354 },
            { min: 1088, max: 1828 },
            { min: 1784, max: 2334 }
          ),
          sortH: { sort: 1, sizeSpace: 10, dValue: 10 },
          sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
        },
      ];
    case "四边窗套":
      return {
        doorScope: doorScope(
          { min: 320, max: 5840 },
          { min: 320, max: 5840 },
          { min: 300, max: 5800 },
          { min: 300, max: 5800 }
        ),
        sortH: { sort: 1, sizeSpace: 20, dValue: 20 },
        sortW: { sort: 1, sizeSpace: 20, dValue: 20 },
      };
    case "轻奢主义":
      return {
        doorScope: doorScope(
          { min: 639, max: 1059 },
          { min: 1738, max: 2383 },
          { min: 629, max: 1049 },
          { min: 1733, max: 2383 }
        ),
        sortH: { sort: 2, sizeSpace: 1, dValue: 5 },
        sortW: { sort: 2, sizeSpace: 1, dValue: 10 },
      };
    case "通用玻璃门02":
      return {
        doorScope: doorScope(
          { min: 666, max: 1166 },
          { min: 1848, max: 2448 },
          { min: 666, max: 1166 },
          { min: 1848, max: 2448 }
        ),
        sortH: "0",
        sortW: "0",
      };
    case "通用推拉门02":
      return [
        {
          num: "2",
          doorScope: doorScope(
            { min: 1337, max: 2537 },
            { min: 1885, max: 2485 },
            { min: 1337, max: 2537 },
            { min: 1885, max: 2485 }
          ),
          sortH: "0",
          sortW: "0",
        },
        {
          num: "4",
          doorScope: doorScope(
            { min: 2421, max: 5021 },
            { min: 1885, max: 2485 },
            { min: 2421, max: 5021 },
            { min: 1885, max: 2485 }
          ),
          sortH: "0",
          sortW: "0",
        },
      ];
    case "通用吊趟门01":
      return [
        {
          num: "2",
          doorScope: doorScope(
            { min: 1237, max: 2537 },
            { min: 1890, max: 2490 },
            { min: 1237, max: 2537 },
            { min: 1890, max: 2490 }
          ),
          sortH: "0",
          sortW: "0",
        },
        {
          num: "4",
          doorScope: doorScope(
            { min: 2421, max: 5021 },
            { min: 1890, max: 2490 },
            { min: 2421, max: 5021 },
            { min: 1890, max: 2490 }
          ),
          sortH: "0",
          sortW: "0",
        },
      ];

    default:
      break;
  }
}
//门洞尺寸和包框尺寸的关系，返回门洞对应的包框尺寸
// 形参：
// name：产品名
// doorLine: 门套线款式
// doorWayWvalue：门洞宽
// doorWayHvalue：门洞高
// wayD：墙厚
// doorNum：门扇数
function doorResults(
  name,
  doorLine,
  doorWayWvalue,
  doorWayHvalue,
  wayD,
  doorNum = 1
) {
  // 初始化门对象
  let door = {
    // 包框宽
    doorframeWvalue: 0,
    // 包框高
    doorframeHvalue: 0,
    // 墙厚
    wayD: wayD,
    // 套板开启面盖墙尺寸，宽度方向
    buildWayOpenW: 0,
    // 套板开启面盖墙尺寸，高度方向
    buildWayOpenH: 0,
    // 套板非开启面盖墙尺寸，宽度方向
    buildWayNotOpenW: 0,
    // 套板非开启面盖墙尺寸，高度方向
    buildWayNotOpenH: 0,
  };
  // 开启面门套板见光厚
  openD = 12;
  // 非开启面门套板见光厚
  notOpenD = 24;
  // 计算包框尺寸
  // 如果有门扇数量
  if (doorNum == 1) {
    // 获得对应产品的工艺范围对象scope
    let scope = minProcessMax(name);
    // 获取门洞对应包框H
    // getsize(doorValue：需要查询值。doorWayMinh：产品工艺最小值。doorWayMaxh：产品工艺最大值。sortObj：产品换算规则对象)
    door.doorframeHvalue = getsize(
      doorWayHvalue,
      scope.doorScope.doorWayMinh,
      scope.doorScope.doorWayMaxh,
      scope.sortH
    );
    // 获取门洞对应包框W
    door.doorframeWvalue = getsize(
      doorWayWvalue,
      scope.doorScope.doorWayMinw,
      scope.doorScope.doorWayMaxw,
      scope.sortW
    );
    // 如果没有门扇数量
  } else {
    // 获得对应产品的工艺范围数组对象scope
    let scope = minProcessMax(name);
    for (const i of scope) {
      if (i.num == doorNum) {
        // 获取门洞对应包框H
        door.doorframeHvalue = getsize(
          doorWayHvalue,
          i.doorScope.doorWayMinh,
          i.doorScope.doorWayMaxh,
          i.sortH
        );
        // 获取门洞对应包框W
        door.doorframeWvalue = getsize(
          doorWayWvalue,
          i.doorScope.doorWayMinw,
          i.doorScope.doorWayMaxw,
          i.sortW
        );
      }
    }
  }
  door.buildWayOpenW = doorBuildWaySize(
    doorLine,
    doorWayWvalue,
    door.doorframeWvalue,
    openD,
    2
  );
  door.buildWayOpenH = doorBuildWaySize(
    doorLine,
    doorWayHvalue,
    door.doorframeHvalue,
    openD,
    1
  );
  door.buildWayNotOpenW = doorBuildWaySize(
    doorLine,
    doorWayWvalue,
    door.doorframeWvalue,
    notOpenD,
    2
  );
  door.buildWayNotOpenH = doorBuildWaySize(
    doorLine,
    doorWayHvalue,
    door.doorframeHvalue,
    notOpenD,
    1
  );
  return door;
  // 算法函数getsize
  // doorValue：需要查询值。doorWayMinh：产品工艺最小值。doorWayMaxh：产品工艺最大值。
  // sortObj：获取尺寸的类别。
  // "0":无需换算，门洞直接等于包框。
  // "obj={sort:1,sizeSpace:10,dValue:10}":sort:1需要换算，门洞是范围，间隔sizeSpace。包框相对门洞尺寸差值dValue
  // "obj={sort:2,sizeSpace:1,dValue:5}":sort:2需要换算，门洞是固定值，间隔sizeSpace。包框相对门洞尺寸差值dValue
  function getsize(doorValue, doorWayMin, doorWayMax, sortObj) {
    // 如果门洞高/宽在可做工艺范围内才执行
    if (
      !isNaN(doorValue) &&
      doorValue >= doorWayMin &&
      doorValue < doorWayMax
    ) {
      // 如果sortObj是字符串"0"，泽不需要换算,否则需要换算
      if (typeof sortObj === "string") {
        switch (sortObj) {
          case "0":
            // 因为不需要换算，直接范围doorValue
            return doorValue;

          default:
            return console.log(sortObj + "不是有效的参数！");
        }
      } else {
        switch (sortObj.sort) {
          // 需要换算，门洞是范围值
          case 1:
            // 从可做最小工艺~最小工艺+sortObj.sizeSpace开始，如果值不在范围内，就把范围值+sortObj.sizeSpace，继续对比。直到找到对应范围。
            while (
              !(
                doorValue >= doorWayMin &&
                doorValue < doorWayMin + sortObj.sizeSpace
              )
            ) {
              doorWayMin = doorWayMin + sortObj.sizeSpace;
            }
            // 找到对应范围后，可做工艺最小值-sortObj.dValue就是对应的包框尺寸
            return doorWayMin - sortObj.dValue;
          // 需要换算，门洞是固定值
          case 2:
            // 如果sortObj.sizeSpace是1,就是从工艺最小尺寸开始逐一匹配。无需计算递进值。
            if (sortObj.sizeSpace == 1) {
              // 包框尺寸=doorValue-sortObj.dValue
              return doorValue - sortObj.dValue;
            } else {
              // 暂无需求
              console.log("暂无需求");
            }
            break;

          default:
            return console.log(sortObj.sort + "不是有效的参数！");
        }
      }
    } else {
      return null;
    }
  }
}
// 门套线款式列表
function doorBuildMenus() {
  const doorBuildMenus = ["TX01", "TX02", "TX03", "TX09", "other"];
  return doorBuildMenus;
}
// 计算木门套线盖墙尺寸
// doorLine：门套线款式
// doorWayValue：门洞尺寸
// doorValue：包框尺寸
// cleadingD:套板见光厚度
// glueLineNum:胶缝数，默认为1，体现为安装胶缝有多少边，一般宽度方向有2边
function doorBuildWaySize(
  doorLine,
  doorWayValue,
  doorValue,
  cleadingD,
  glueLineNum = 1
) {
  // 套线宽度
  let doorLineW = 0;
  // 安装胶缝
  let glueLine = 0;
  switch (doorLine) {
    case "TX01":
      doorLineW = 80;
      break;
    case "TX02":
      doorLineW = 70;
      break;
    case "TX03":
      doorLineW = 60;
      break;
    case "TX09":
      doorLineW = 60;
      break;

    default:
      break;
  }
  if (glueLineNum == 2) {
    glueLine = (doorWayValue - doorValue) / 2;
  } else {
    glueLine = doorWayValue - doorValue;
  }
  // 计算盖墙尺寸
  const buildWayD = doorLineW - cleadingD - glueLine;
  return buildWayD;
}
module.exports = {
  // 定制模块列表
  custom: custom,
  // 工艺门洞定制范围和包框定制范围
  minProcessMax: minProcessMax,
  // 计算包框尺寸的值
  doorResults: doorResults,
  // 计算木门套线盖墙尺寸
  doorBuildWaySize: doorBuildWaySize,
  // 门套线款式列表
  doorBuildMenus: doorBuildMenus,
};
