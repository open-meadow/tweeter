$(document).ready(function () {
  console.log("meeee");

  $(".input-bar").on("keyup", function () {
    
    const counter = $(".counter");
    console.log(counter);
    const characterCount = 140 - $(this).val().length;

    counter.text(characterCount);

    if (characterCount < 0) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }
    
  });

  $(".tweet-button").on("click", function () {
    console.log(characterCount);
    console.log(this);
  });
});
