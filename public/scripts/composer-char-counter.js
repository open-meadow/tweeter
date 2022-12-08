$(document).ready(function () {

  $(".input-bar").on("keyup", function () {
    const $inputElement = $(this);
    const divButtonsElement = $inputElement.next()[0];
    const $divButtonsElement = $(divButtonsElement);
    const counterElement = $divButtonsElement.find("p")[0]; 


    const counter = $(counterElement);
    const characterCount = 140 - $(this).val().length;

    // display in HTML
    counter.text(characterCount);

    if (characterCount < 0) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > 300) {
      $("#go-up-button").fadeIn();
      $("nav").fadeOut();
    } else {
      $("#go-up-button").fadeOut();
      $("nav").fadeIn();
    }
  });

  $("#go-up-button").click(function() {
    $("html, body").animate({scrollTop:0}, 300);
    $(".new-tweet").slideDown();
  });

});
