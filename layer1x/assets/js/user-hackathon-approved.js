document.getElementById("file-input").addEventListener("change", function () {
    var fileName = this.files.length ? this.files[0].name : "";
    document.getElementById("filename-input").value = fileName;
  
    // Update the preview image source
    var previewImage = document.getElementById("preview-image");
    previewImage.src = "";
  
    // Clear previous content in the "preview" div
    var previewDiv = document.getElementById("preview");
    previewDiv.style.display = "block";
  
    if (fileName !== "") {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        previewImage.src = e.target.result;
        previewDiv.style.display = "none";
      };
      fileReader.readAsDataURL(this.files[0]);
    }
  });

