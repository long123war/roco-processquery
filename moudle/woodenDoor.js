// 传入一个数组，返回一个由每个产品对象组成的数组
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
      "子母门",
      "双开门",
      "内置双推拉门",
      "哑口套，三边窗套01，方形飘窗",
      "四边窗套",
      "L型飘窗",
      "通用玻璃门02",
      "通用推拉门02",
      "通用吊趟门01",
      "哑口套02，窗套02",
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
    ],
    furniTure: ["五角柜掩门"],
    furniTurePaht: ["pentagon"],
    amBry: [""],
    amBryPaht: [""],
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
    case "单开门":
      return doorScope(
        { min: 655, max: 1055 },
        { min: 1746, max: 2356 },
        { min: 635, max: 1015 },
        { min: 1736, max: 2336 }
      );
    case "子母门":
      return doorScope(
        { min: 928, max: 1388 },
        { min: 1746, max: 2356 },
        { min: 908, max: 1348 },
        { min: 1736, max: 2336 }
      );
    case "双开门":
      return doorScope(
        { min: 1228, max: 1988 },
        { min: 1746, max: 2356 },
        { min: 1208, max: 1948 },
        { min: 1736, max: 2336 }
      );

    default:
      break;
  }
}
//门洞尺寸和包框尺寸的关系，返回门洞对应的包框尺寸
// 形参：
// doorWayWvalue：门洞宽
// doorWayHvalue：门洞高
// wayD：墙厚
function doorResults(doorWayWvalue, doorWayHvalue, wayD) {
  return {
    doorframeWvalue: 1736,
    doorframeHvalue: 635,
  };
}
module.exports = {
  // 定制模块列表
  custom: custom,
  // 工艺门洞定制范围和包框定制范围
  minProcessMax: minProcessMax,
  // 计算包框尺寸的值
  doorResults: doorResults,
};
