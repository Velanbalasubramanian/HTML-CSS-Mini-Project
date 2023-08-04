$(document).ready(function(){
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
  })

  document.addEventListener("DOMContentLoaded", function() {
    

// ACCORDION START
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var currentPanel = this.nextElementSibling;
    var isActive = this.classList.contains("active");

    // Close all panels first
    for (var j = 0; j < panels.length; j++) {
      panels[j].style.maxHeight = null;
    }

    // Remove "active" class from all accordions
    for (var k = 0; k < acc.length; k++) {
      acc[k].classList.remove("active");
    }

    // If the clicked tab was not already active, open its panel
    if (!isActive) {
      this.classList.toggle("active");
      currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
    }
  });
}

// DETAILS ACCORDION START
var accDetails = document.getElementById("accordion-one");
var panelsDetails = document.getElementById("panel-one");
if (accDetails && panelsDetails) {
  accDetails.addEventListener("click", function() {
    var currentPanel = panelsDetails; // Use the correct panel element
    var isActive = this.classList.contains("active");

    // Close all panels first
    panelsDetails.style.maxHeight = null;

    // Remove "active" class from the accordion
    accDetails.classList.remove("active");

    // If the clicked tab was not already active, open its panel
    if (!isActive) {
      accDetails.classList.add("active");
      currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
    }
  });
}
// DETAILS ACCORDION END


  });
  