//
function rocoMenus1(oneArr, twoArr, threeArr) {
  // 一级、二级、三级导航栏数据。
  let levelOne = [];
  let levelTwo = [];
  let levelThree = [];
  //   如果有一级菜单数组
  if (oneArr) {
    //   循环传进来的一级菜单数组，封装成对象，在push到levelOne中。
    for (let num in oneArr) {
      let oneObj = {};
      oneObj.id = num;
      oneObj.levelName = oneArr[num];
      levelOne.push(oneObj);
    }
    //   如果有二级菜单数组
    if (twoArr) {
      //   循环传进来的二级菜单数组，封装成对象，在push到levelTwo中。
      for (let num in twoArr) {
        let twoObj = {};
        twoObj.id = num;
        twoObj.levelName = twoArr[num];
        levelTwo.push(twoObj);
      }
      levelOne.children = levelTwo;
      //   如果有三级菜单数组
      if (threeArr) {
        //   循环传进来的三级菜单数组，封装成对象，在push到levelThree中。
        for (let num in threeArr) {
          let threeObj = {};
          threeObj.id = num;
          threeObj.levelName = threeArr[num];
          levelThree.push(threeObj);
        }
        levelTwo.children = levelThree;
      }
    }
  }

  return levelOne;
}
//oneString父层级菜单列表，string
// twoArr二层级菜单列表，array
// threeArr三层级菜单列表，array
function rocoMenus() {
  // 一级、二级、三级导航栏数据。
  let levelOne = [];
  let levelTwo = [];
  let levelThree = [];
  if (oneString) {
    for (let item in twoArr) {
      levelOne.push(getRocomenus(toString(item), oneString[item]));
    }
  }
}
// id——需要设置的id值
// menusName需要设置的菜单名称
// ParentObj需要设置的父对象
function getRocomenus1(id, menusName, parentObj) {
  let menusObj = {};
  if (parentObj) {
    parentObj.children = [];
    menusObj.id = id;
    menusObj.menusName = menusName;
    parentObj.children.push(menusObj);
    return menusObj;
  }

  //   创建响应数据
  menusObj.id = id;
  menusObj.menusName = menusName;

  return menusObj;
}
function getRocomenus(menusNameArr) {
  let menusObj = {};
  let menusArr = [];
  for (let i in menusNameArr) {
    menusObj.id = i;
    menusObj.menusName = menusNameArr[i];
    menusObj.children = [];
    menusArr.push(menusObj);
  }
  return menusArr;
}
module.exports = {
  rocoMenus: rocoMenus,
  getRocomenus: getRocomenus,
};
