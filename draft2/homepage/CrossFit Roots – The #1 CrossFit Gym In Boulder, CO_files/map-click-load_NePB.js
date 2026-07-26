(function($){

// map temporary image click remove and place actual map
$(function() {
  $(".but").on("click",function(e) {
    e.preventDefault();
    $(".mapclickshow").hide();
    $("#"+this.id+"div").show();
    $("#addplayer").hide();
  });
  
});
})(jQuery);