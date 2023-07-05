document.getElementById("file-input").addEventListener("change", function () {
  var fileName = this.files.length ? this.files[0].name : "";
  document.getElementById("filename-input").value = fileName;

  // Update the preview image source
  var previewImage = document.getElementById("preview-image");
  previewImage.src = "";

  // Clear previous content in the "preview" div
  var previewDiv = document.getElementById("preview");
  previewDiv.style.display = "none";

  if (fileName !== "") {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      previewImage.src = e.target.result;
      previewDiv.style.display = "block";
    };
    fileReader.readAsDataURL(this.files[0]);
  }
});

// PASSWORD SHOW and HIDE
$(".toggle-password").click(function () {
  $(this).toggleClass("bi-eye bi-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$(".phone").keypress(function (e) {
  var arr = [];
  var kk = e.which;

  for (i = 48; i < 58; i++) arr.push(i);

  if (!(arr.indexOf(kk) >= 0)) e.preventDefault();
});
