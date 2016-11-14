$(document).ready(function() {
  $('#quote-btn').on("click", function() {
    $.ajax({
      type:"GET",
      url:"http://apis.baidu.com/txapi/dictum/dictum",
      headers:{"apikey":"748c339ee2c1de0d66aeb28287b3718a"},
      success: function(data){
        data = JSON.parse(JSON.stringify(data));
        //console.log(data);
        //console.log(data["newslist"][0]["content"]);
        var html = "<p>" + data["newslist"][0]["content"] + "</p>";
        $("#info").html(html);
      }
    })
  })
})
