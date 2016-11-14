var clock = getDOM('clock');
var timeInput = getDOM('set-time');
var ensureBtn = getDOM('ensure-btn');
var startBtn = getDOM('start-btn');
var resetBtn = getDOM('reset-btn');

var index = false;
var timer;

function getDOM(id) {
  return document.getElementById(id);
}

/*初始化时间*/
function setTime() {
  clearInterval(timer);
  index = false;
  startBtn.innerHTML = "启动";
  var t = timeInput.value ? timeInput.value : 25;
  clock.innerHTML = carry(t) + ":00";
}
/*对于个位数补0*/
function carry(str){
  if (str.length <= 1) {
    str = "0" + str;
  }
  return str;
}
/*时间转换*/
function ToSecond(str) {
  var arr = str.split(":");
  num = parseInt(arr[0])*60 + parseInt(arr[1]);
  return num;
}

/*时间转换*/
function ToMinAndSecond(num) {
  var str = "";
  str += carry(Math.floor(num/60).toString()) + ":" + carry((num%60).toString());
  return str;
}

/*启动时钟*/
function clockRun() {
  if (!index) {
    timer = setInterval(function(){
      t = clock.innerHTML;
      t = ToSecond(t);
      if (t === 0) {
        clearInterval(timer);
        alert("时间到");
      } else {
        t --;
      clock.innerHTML = ToMinAndSecond(t);
      }
    },1000);
    index = true;
    startBtn.innerHTML = "暂停";
  } else {
    clearInterval(timer);
    index = false;
    startBtn.innerHTML = "启动";
  }
}

/*初始化*/
function init() {
  setTime();
  ensureBtn.addEventListener("click",function(){
    setTime();
    timeInput.value = "";
  });
  startBtn.addEventListener("click",clockRun);
  resetBtn.addEventListener("click",setTime);
}

init();  