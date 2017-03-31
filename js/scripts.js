$(document).ready(function() {
  $("form#track-selector").submit(function(event) {
    event.preventDefault();

    var app = $("#app").val();
    var website = $("#website").val();
    var company = $("#company").val();
    var design = $("#design").val();
    var backEnd= $("#back-end").val();

    if(company === "yes-company") {
        $("#show-backend").hide();
        $("#show-app").hide();
        $("#show-design").hide();
        $("#show-website").hide();
        $("#show-company").show();

    }else if (website === "yes-website" || company === "yes-company") {
      $("#show-company").hide();
      $("#show-app").hide();
      $("#show-design").hide();
      $("#show-backend").hide();
      $("#show-website").show();

    }else if(backEnd === "yes-backend") {
      $("#show-company").hide();
      $("#show-app").hide();
      $("#show-design").hide();
      $("#show-website").hide();
      $("#show-backend").show();

    }else if(app === "yes-app") {
      $("#show-company").hide();
      $("#show-backend").hide();
      $("#show-design").hide();
      $("#show-website").hide();
      $("#show-app").show();

    }else if(design === "yes-design") {
      $("#show-company").hide();
      $("#show-app").hide();
      $("#show-backend").hide();
      $("#show-website").hide();
      $("#show-design").show();
    } else {
      return false;
    }
  });
});
