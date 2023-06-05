$(document).ready(function () {
  //DropDown input - select
  $(".t-dropdown-input").on("click", function () {
    $(this).parent().next().slideDown("fast");
  });

  $(".t-select-btn").on("click", function () {
    $(".t-dropdown-list").slideUp("fast");

    if (!$(this).prev().attr("disabled")) {
      $(this).prev().trigger("click");
    }
  });

  $(".t-dropdown-input").width(
    $(".t-dropdown-select").width() - $(".t-select-btn").width() - 13
  );

  $(".t-dropdown-list").width($(".t-dropdown-select").width());

  $(".t-dropdown-input").val("");

  $("li.t-dropdown-item").on("click", function () {
    var text = $(this).html();
    $(this).parent().prev().find(".t-dropdown-input").val(text);
    $(".t-dropdown-list").slideUp("fast");
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".t-dropdown-input, .t-select-btn").length)
      return;
    $(".t-dropdown-list").slideUp("fast");
    event.stopPropagation();
  });
  // END //
});

// COLLEGE NAME
$(document).ready(function(){

  //DropDown input - select
  $('.two-dropdown-input').on('click', function() {
    $(this).parent().next().slideDown('fast');
  });
  
  $('.t-select-btn').on('click', function() {
     $('.two-dropdown-list').slideUp('fast');
  
    if(!$(this).prev().attr('disabled')){
      $(this).prev().trigger('click');
    }
  });
  
  $('.two-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13);
  
  $('.two-dropdown-list').width($('.t-dropdown-select').width());
  
  $('.two-dropdown-input').val('');

  
  
  $('li.two-dropdown-item').on('click', function() {
    var text = $(this).html();
    $(this).parent().prev().find('.two-dropdown-input').val(text);
    $('.two-dropdown-list').slideUp('fast');
  });
//   $('li.two-dropdown-item').on('click', function() {
//     var text = $(this).html();
//     var imageSrc = $(this).find('img').attr('src');
//     var inputField = $(this).parent().prev().find('.two-dropdown-input');
    
//     inputField.val(text);
//     inputField.next('.image-preview').attr('src', imageSrc);
//     inputField.show();
//     $('.two-dropdown-list').slideUp('fast');
// });

  // const img = document.querySelector("#kprclg"); 
  // img.src = "//assets/images/kpr.png";
  
  $(document).on('click', function(event) {
    if ($(event.target).closest(".two-dropdown-input, .t-select-btn").length)
      return;
    $('.two-dropdown-list').slideUp('fast');
    event.stopPropagation();
  });
  // END //
  
  });


 