$(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });

// PASSWORD SHOW and HIDE SIGNUP PAGE
  $(".toggle-password").click(function() {

    $(this).toggleClass("bi-eye bi-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });