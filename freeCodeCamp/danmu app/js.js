var layout = getDOM("layout");
var danmu = getDOM("danmu");
var input_btn = getDOM("input-btn");
var clear_btn = getDOM("clear-btn");

var data = [],
  lineIndexDefalut = 0,
  isRunning = false;
/*封装getElementById*/
function getDOM(id) {
  return document.getElementById(id);
}

/*发送弹幕*/
function sendD() {
  var d = danmu.value;
  if (d =="") {
    return false;
  }
  data.push(d);
  addD(d);
  danmu.value = "";
  if (!isRunning) {
    randomD();
    isRunning = true;
  }
}
/*添加弹幕到layout*/
function addD(item) {
  var oSpan = document.createElement("span");
  oSpan.innerHTML = item;
  layout.appendChild(oSpan);
  oSpan.style.left = layout.offsetWidth + "px";
  oSpan.style.top = d_t(oSpan);
  oSpan.style.color = d_color();
  scrollD(oSpan);
}
/*弹幕高度*/
function d_t(el) {
  var lines = 10;
  var lineIndex;
  do {
    lineIndex = Math.floor(Math.random() * lines);
  }
  while (lineIndex == lineIndexDefalut);
  lineIndexDefalut = lineIndex;
  var t = (layout.offsetHeight / lines - el.offsetHeight) / 2 + layout.offsetHeight / lines * lineIndex + "px";
  return t;
}
/*弹幕颜色*/
function d_color() {
  var i = 3;
  var color = "#";
  while (i > 0) {
    color += Math.floor(Math.random() * 256).toString(16);
    i--;
  }
  return color;
}

/*弹幕滚动*/
function scrollD(el) {
  var timer, left = el.offsetLeft;
  timer = setInterval(function() {
    if (left > -el.offsetWidth) {
      left -= 1;
      el.style.left = left + "px";
    } else {
      layout.removeChild(el);
      clearInterval(timer);
    }
  }, 20);
}

/*随机生成弹幕*/
function randomD() {
  var t = setInterval(function() {
    if (data.length != 0) {
      var item = data[Math.floor(Math.random() * data.length)];
      addD(item);
    } else {
      clearInterval(t);
      isRunning = false;
    }
  }, 10000);
}

/*清屏*/
function clearD() {
  layout.innerHTML = "";
  data = [];
}

function addEvent(el, event, fn) {
  if (el.addEventListener) {
    return el.addEventListener(event, fn, false);
  } else if (obj.attachEvent) {
    return el.attachEvent("on" + event, fn);
  } else {
    el["on" + event] = fn;
  }
}

function init() {
  addEvent(input_btn, "click", sendD);
  addEvent(clear_btn, "click", clearD);
  randomD();
}
init();
