$(document).ready(function() {
  $("form#track-selector").submit(function(event) {
    event.preventDefault();

    var app = $("#app").val();
    var website = $("#website").val();
    var company = $("#company").val();
    var design = $("#design").val();
    var backEnd= $("#back-end").val();

    if (website === "yes-website" || company === "yes-company") {
      $("#company").hide();
      $("#app").hide();
      $("#design").hide();
      $("#back-end").hide();
      $("#website").show();

    }else if(backEnd === "yes-backend") {
      $("#company").hide();
      $("#app").hide();
      $("#design").hide();
      $("#website").hide();
      $("#back-end").show();

    }else if(app === "yes-app") {
      $("#company").hide();
      $("#back-end").hide();
      $("#design").hide();
      $("#website").hide();
      $("#app").show();

    }else if(company === "yes-company") {
      $("#back-end").hide();
      $("#app").hide();
      $("#design").hide();
      $("#website").hide();
      $("#company").show();

    }else if(design === "yes-design") {
      $("#company").hide();
      $("#app").hide();
      $("#back-end").hide();
      $("#website").hide();
      $("#design").show();
    } else {
      return false;
    }
  });
});
