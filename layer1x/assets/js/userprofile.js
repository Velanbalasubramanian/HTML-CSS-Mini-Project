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


  // INPUT CHIPS - SKILL

  // function togglePlaceholderAndLabel() {
  //   var input = document.getElementById("floatingInput");
  //   var label = document.getElementById("developerLabel");
    
  //   if (input.checked) {
  //     input.classList.add("hide-placeholder");
  //     label.classList.add("hide-label");
  //   } else {
  //     input.classList.remove("hide-placeholder");
  //     label.classList.remove("hide-label");
  //   }
  // }


  // var txt = document.getElementById('txt');
  // var list = document.getElementById('list');
  // var items = ['HTML', 'CSS', 'Java', 'Javascript'];
  
  // txt.addEventListener('keypress', function(e) {
  //   if (e.key === 'Enter') {
  //     let val = txt.value;
  //     if (val !== '') {
  //       if (items.indexOf(val) >= 0) {
  //         alert('Tag name is a duplicate');
  //       } else {
  //         items.push(val);
  //         render();
  //         txt.value = '';
  //         txt.focus();
  //       }
  //     } else {
  //       alert('Please type a tag Name');
  //     }
  //   }
  // });
  
  // function render() {
  //   list.innerHTML = '';
  //   items.map((item, index) => {
  //     list.innerHTML += `<h5><span>${item}</span><a href="javascript: remove(${index})"><img src="/assets/images/remove-circle.svg"/></a></h5>`;
  //   });
  // }
  
  // function remove(i) {
  //   items = items.filter(item => items.indexOf(item) != i);
  //   render();
  // }
  
  // window.onload = function() {
  //   render();
  //   txt.focus();
  // }


  var txt = document.getElementById('txt');
  var list = document.getElementById('list');
  var items = ['HTML', 'HTML/CSS','Javascript'];
  
  txt.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      let val = txt.value;
      if (val !== '') {
        if (items.indexOf(val) >= 0) {
          alert('Tag name is a duplicate');
        } else {
          items.push(val);
          render();
          txt.value = '';
          txt.focus();
        }
      } else {
        alert('Please type a tag Name');
      }
    }
  });
  
  function render() {
    list.innerHTML = '';
    items.map((item, index) => {
      list.innerHTML += `<li><span>${item}</span><a href="javascript: remove(${index})"><img src="/assets/images/remove-circle.svg"/></a></li>`;
    });
  }
  
  function remove(i) {
    items = items.filter(item => items.indexOf(item) != i);
    render();
  }
  
  window.onload = function() {
    render();
    txt.focus();
  }


  // $(function () {
  //   $('.datepicker').datepicker({
  //     language: "es",
  //     autoclose: true,
  //     format: "dd/MM/yyyy"
  //   });
  // });



$('.extra-fields-customer').click(function() {
  $('.customer_records').clone().appendTo('.customer_records_dynamic');
  $('.customer_records_dynamic .customer_records').addClass('single remove');
  $('.single .extra-fields-customer').remove();
  $('.single').append('<a href="#" class="remove-field btn-remove-customer">Remove Fields</a>');
  $('.customer_records_dynamic > .single').attr("class", "remove");

  $('.customer_records_dynamic input').each(function() {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr('name', fieldname + count);
    count++;
  });

});

$(document).on('click', '.remove-field', function(e) {
  $(this).parent('.remove').remove();
  e.preventDefault();
});