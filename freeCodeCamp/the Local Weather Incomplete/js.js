$(document).ready(function() {
  var city = "北京";
  $("#weather-btn").on("click", function() {
    $.ajax({
      type: "GET",
      headers: {
        "apikey": "748c339ee2c1de0d66aeb28287b3718a"
      },
      url: "http://apis.baidu.com/apistore/weatherservice/cityname?cityname=" + city,
      //dataType: "text/html",
      success: function(data){
        data = JSON.parse(data)["retData"];
        var html = "";
        var keys = Object.keys(data);
        $(keys).each(function(index){
          html += "<p>"+keys[index]+":"+data[keys[index]]+"</p>";
        })
        $("#weather-wrap").append(html);
      }
    });
  })
})
