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
      case "luxurious":
        imgDir = "luxurious";
        break;

      default:
        break;
    }
  }
  return imgDir;
}
// filesPath文件路径，isTmg判断路径文件是不是图片
function isImg(filesPath) {
  let suffixIndex = filesPath.lastIndexOf(".");
  let suffix = filesPath.substr(suffixIndex + 1).toLocaleLowerCase();
  // 图片文件的格式
  const imglist = [
    "png",
    "jpg",
    "jpeg",
    "bmp",
    "gif",
    "webp",
    "psd",
    "svg",
    "tiff",
  ];
  // 判断传入的文件路径，判断文件是不是图片，返回布尔值
  return imglist.find((item) => item === suffix);
}
module.exports = {
  // 响应产品图片文件夹API
  // 主内容区的图片
  mainImg: mainImg,
  // 判断路劲文件是否为图片
  isImg: isImg,
};
