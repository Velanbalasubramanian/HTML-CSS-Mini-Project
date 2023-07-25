$(".msg-userview").hide();

$(".tab-btn-details").click(function () {
    $(".msg-userview").css("width", "100%");
  $(".msg-userview").show("1000");
  $(".msg-fullview").hide();
});
$(".back").click(function () {
    $(".msg-fullview").css("width", "100%");
  $(".msg-userview").hide();
  $(".msg-fullview").show("1000");
});






$(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });