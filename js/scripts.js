$(document).ready(function() {
  $("form#track-selector").submit(function(event) {
    event.preventDefault();

    var app = $("#app").val();
    var website = $("#website").val();
    var company = $("#company").val();
    var design = $("#design").val();
    var backEnd= $("#back-end").val();

    if (website === "yes-website" || company === "yes-company") {
      $("#result").text("You should choose the Ruby/Rails path.");

    }else if (company === "yes-company" && backEnd === "yes-backend") {
      $("#result").text("You should choose the PHP/Drupel path.");

    }else if (app === "yes-app") {
      $("#result").text("You should choose the Java/Javascript path.");

    }else if (company === "yes-company") {
      $("#result").text("You should choose the C# path due to the large backing of microsoft and wide acceptance in other corporations.")

    }else if (design === "yes-design") {
      $("#result").text("You should choose the CSS/Design path due to your creativity.")

    } else {
      $("#result").text("Please try again");
    }
  });
});
