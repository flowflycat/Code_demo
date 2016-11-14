$(document).ready(function(){
  $("#search").on("click",function(){
    if ($("#search-input").val()) {
      $.ajax({
        type:"POST",
        url:"http://www.mediawiki.org/wiki/API:Main_page",
        data
      })
    }
  })
})