$(document).ready(function(){
    
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });


   document.getElementById("file-input").addEventListener("change", function() {
    var fileName = this.files.length ? this.files[0].name : '';
    document.getElementById("filename-input").value = fileName;
    
    // Update the preview image source
    var previewImage = document.getElementById("preview-image");
    previewImage.src = '';

    // Clear previous content in the "preview" div
    var previewDiv = document.getElementById("preview");
    previewDiv.style.display = 'none';

    if (fileName !== '') {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        previewImage.src = e.target.result;
        previewDiv.style.display = 'block';
      };
      fileReader.readAsDataURL(this.files[0]);
    }
  });


  function togglePlaceholderAndLabel() {
    var input = document.getElementById("floatingInput");
    var label = document.getElementById("developerLabel");
    
    if (input.checked) {
      input.classList.add("hide-placeholder");
      label.classList.add("hide-label");
    } else {
      input.classList.remove("hide-placeholder");
      label.classList.remove("hide-label");
    }
  }