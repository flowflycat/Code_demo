$(document).ready(function() {
  var previousInput,data=[],str="";
  $(".btn-long:nth-child(1)").on("click", function() {
    $(".result").html("");
  })
  $(".btn-long:nth-child(2)").on("click", function() {
    var str = $(".result").html();
    $(".result").html(parse(str));
  })
  $(".num").on("click", function() {
    var _this = $(this).html();
    if (/[\+\-\*\/\%\.]/.test(previousInput) && /[\+\-\*\/\%\.]/.test(_this)) {
      alert("error");
      return false;
    }
    str += _this;
    previousInput = _this;
    $(".result").html($(".result").html()+_this);
  })
  function calculate(str){
    var result = parse(str1);
    return result;
}
  function parse(content){
    var index = content.indexOf("+");
    if (index != -1) {
      return parse(content.substring(0,index)) + parse(content.substring(index+1));
    }

    index = content.lastIndexOf("-");
    if (index != -1) {
      return parse(content.substring(0,index)) - parse(content.substring(index+1));
    }

    index = content.indexOf("*");
    if (index != -1) {
      return parse(content.substring(0,index)) * parse(content.substring(index+1));
    }

    index = content.lastIndexOf("/");
    if (index != -1) {
      return parse(content.substring(0,index)) / parse(content.substring(index+1));
    }

    return parseFloat(content);
  }
})


