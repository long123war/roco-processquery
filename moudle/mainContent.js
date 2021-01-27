// query请求参数的对象
function mainImg(query) {
  let imgDir = "";
  // 确认请求的是什么产品
  for (let item in query) {
    switch (query[item]) {
      case "single":
        imgDir = "single";
        break;
      case "doubles":
        imgDir = "doubles";
        break;
      case "lash":
        imgDir = "lash";
        break;
      case "sliding":
        imgDir = "sliding";
        break;
      case "dumbs":
        imgDir = "dumbs";
        break;
      case "windowt":
        imgDir = "windowt";
        break;
      case "Wave":
        imgDir = "Wave";
        break;
      case "glassdoor":
        imgDir = "glassdoor";
        break;
      case "generalSliding":
        imgDir = "generalSliding";
        break;
      case "hanging":
        imgDir = "hanging";
        break;
      case "dumb":
        imgDir = "dumb";
        break;
      case "doorframeWvalue":
        imgDir = "doorframeWvalue";
        break;
      case "doorframeHvalue":
        imgDir = "doorframeHvalue";
        break;
      case "wayD":
        imgDir = "wayD";
        break;
      case "buildWayOpenW":
        imgDir = "buildWayOpenW";
        break;
      case "buildWayOpenH":
        imgDir = "buildWayOpenH";
        break;
      case "buildWayNotOpenW":
        imgDir = "buildWayNotOpenW";
        break;
      case "buildWayNotOpenH":
        imgDir = "buildWayNotOpenH";
        break;

      default:
        break;
    }
  }
  return imgDir;
}
module.exports = {
  // 响应产品图片文件夹API
  mainImg: mainImg,
};
