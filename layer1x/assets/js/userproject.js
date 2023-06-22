$(function() {
  var defaultButtonText = "HTML"; // Default placeholder text

  // Function to update the button text
  function updateButtonPlaceholder() {
    var itemCount = $("input[name='DBXP']:checked").length;
    if (itemCount == 0) {
      $("#selectedDBXP .placeholder").text(defaultButtonText);
      $("#selectedDBXP .fa-search").show();
    } else if (itemCount == 1) {
      $("#selectedDBXP .placeholder").text($("label[for='" + $("input[name='DBXP']:checked")[0].id + "']").text());
      $("#selectedDBXP .fa-search").hide();
    } else {
      $("#selectedDBXP .placeholder").text(itemCount + " items selected");
      $("#selectedDBXP .fa-search").hide();
    }
  }

  // Update the button text on change of input fields
  $("input[name='DBXP']").on("change", updateButtonPlaceholder);

  // Button click event handler
  function DBXPclick() {
    var listbutton = $("#selectedDBXP");
    if ($(listbutton).attr("aria-expanded") == "true") {
      $(listbutton).attr("aria-expanded", "false");
      $("#choicelist").fadeOut(50, function() {
        $(listbutton).removeClass("hover");
      });
      $("#selectedDBXP .fa").removeClass("fa-magnifying-glass--open");
    } else {
      $(listbutton).attr("aria-expanded", "true");
      $(listbutton).addClass("hover");
      $("#choicelist").fadeIn(50);
      $("#selectedDBXP .fa").addClass("fa-magnifying-glass--open");
    }
  }

  // Function to handle outside click
  function handleOutsideClick(event) {
    var target = $(event.target);
    if (
      !target.closest("#selectedDBXP").length &&
      !target.closest("#choicelist").length &&
      $("#choicelist").is(":visible")
    ) {
      var listbutton = $("#selectedDBXP");
      $(listbutton).attr("aria-expanded", "false");
      $("#choicelist").fadeOut(50, function() {
        $(listbutton).removeClass("hover");
      });
      $("#selectedDBXP .fa").removeClass("fa-magnifying-glass--open");
    }
  }

  // Attach outside click event listener
  $(document).on("click", handleOutsideClick);

  // Other parts of your script...

  // Initial button text setup
  updateButtonPlaceholder();

  // Button click event listener
  $("#selectedDBXP").on("click", DBXPclick);
});







  $(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });