$(".msg-userview").hide();

$(".tab-btn-details").click(function () {
    $(".msg-userview").css("width", "50%");
  $(".msg-userview").show("1000");
  $(".tab-btn-details").hide();
});
$(".back").click(function () {
    $(".tab-btn-details").css("width", "50%");
  $(".msg-userview").hide();
  $(".tab-btn-details").show("1000");
});






$(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });