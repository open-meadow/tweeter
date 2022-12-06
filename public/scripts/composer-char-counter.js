$(document).ready(function () {
  console.log("meeee");
  let characterCount;

  $(".input-bar").on("keyup", function () {
    
    const counter = $(".counter");
    characterCount = 140 - this.value.length;
    
    counter.html(characterCount);

    if (characterCount < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "#545149");
    }
    
  });

  // $(".tweet-button").on("click", function () {
  //   console.log(characterCount);
  //   console.log(this);
  // });
});
