$(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });

  function readURL(input) {
    console.log("Halo");
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            console.log(e)
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}