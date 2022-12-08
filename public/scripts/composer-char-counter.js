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

  // this section scrolls to reveal scroll-up button
  $(window).scroll(function() {
    if($(window).scrollTop() > 300) {
      // stop() prevents blinking
      $("nav").stop().fadeOut();
      $("#go-up-button").stop().fadeIn();
    } else {
      $("nav").stop().fadeIn();
      $("#go-up-button").stop().fadeOut();
    }
  });

  // this section makes the window go up when the button is pressed
  $("#go-up-button").click(function() {
    $("html, body").animate({scrollTop:0}, 300);
    $(".new-tweet").slideDown();
  });

});
