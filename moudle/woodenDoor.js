// 传入一个数组，范围一个由每个产品对象组成的数组。
function getRocomenus(menusNameArr) {
  let menusArr = [];
  for (let i in menusNameArr) {
    let menusObj = {};
    menusObj.id = i;
    menusObj.menusName = menusNameArr[i];
    menusObj.children = [];
    menusArr.push(menusObj);
  }
  return menusArr;
}
// parent(Arr)要加到谁里面,childern(Arr)需要增加谁。
function addRocomenus(parentArr, childrenArr) {
  for (let i of childrenArr) {
    parentArr.children.push(i);
  }
}
module.exports = {
  getRocomenus: getRocomenus,
  addRocomenus: addRocomenus,
};
