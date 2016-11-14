var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?callback=?';
    };
    $.getJSON(makeURL("streams", channel), function(data) {
      var game,
          status;
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      $.getJSON(makeURL("channels", channel), function(data) {
        var logo = data.logo != null ? data.logo : "http://img1.imgtn.bdimg.com/it/u=606860295,1050170800&fm=21&gp=0.jpg",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row ' + 
          status + '"><div class="col-xs-3 col-sm-3 icon"><img src="' + 
          logo + '" class="logo"></div><div class="col-xs-5 col-sm-5 name"><a href="' + 
          data.url + '" target="_blank">' + 
          name + '</a></div><div class="col-xs-4 col-sm-4 streaming">'+ 
          game + '<span class="hidden-xs">' + 
          description + '</span></div></div>';
        status === "online" ? $("#content").prepend(html) : $("#content").append(html);
      });
    });
  });
};
$(document).ready(function() {
  getChannelInfo();
  $("#btn1").on("click",function(){
    $(".online,.offline").removeClass("hidden");
  })
  $("#btn2").on("click",function(){
    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  })
  $("#btn3").on("click",function(){
    $(".offline").removeClass("hidden");
    $(".online").addClass("hidden");
  });
});

