function DBXPclick() {
    var listbutton = $("#selectedDBXP");
    if ($(listbutton).attr("aria-expanded") == "true") {
      $(listbutton).attr("aria-expanded", "false");
      $("#choicelist").css("display", "none");
      $("#selectedDBXP .fa-chevron-down").removeClass("fa-magnifying-glass--open");
    } else {
      $(listbutton).attr("aria-expanded", "true");
      $("#choicelist").css("display", "block");
      $("#selectedDBXP .fa-magnifying-glass").addClass("fa-magnifying-glass--open");
    }
  }
  
  $(function() {
    $("input[name='DBXP']").on("change", function() {
      var itemCount = $("input[name='DBXP']:checked").length;
      if (itemCount == 0)
        $("#DBXPList").html("");
      else if (itemCount == 1)
        $("#DBXPList").html($("label[for='" + $("input[name='DBXP']:checked")[0].id + "']").text());
      else
        $("#DBXPList").html(itemCount + " items selected");
    });
    
      $("input[name='DBXP']").on("keyup", function(e) {
        if (e.keyCode == 27)
          {
            DBXPclick();
            $("#selectedDBXP").focus();
          }
      });
  });