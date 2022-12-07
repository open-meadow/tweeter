$(document).ready(function () {

  $(".input-bar").on("keyup", function () {
    const $inputElement = $(this);
    const divButtonsElement = $inputElement.next()[0];
    const $divButtonsElement = $(divButtonsElement);
    const counterElement = $divButtonsElement.find("p")[0]; 


    const counter = $(counterElement);
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
