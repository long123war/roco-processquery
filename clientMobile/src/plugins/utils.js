// 节流函数
function throttle(fn, delay = 1000) {
  // 上次执行的时间
  let lastTime = 0;
  return function() {
    let now = Date.now();
    // 如果现在的时间-上一次执行的时间，大于定义的时间，就执行函数fn
    if (now - lastTime > delay) {
      fn.call(this);
    }
    lastTime = now;
  };
}
module.exports = {
  throttle: throttle,
};
