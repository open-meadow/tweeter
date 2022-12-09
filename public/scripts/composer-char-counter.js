$(document).ready(function () {
  $(".input-bar").on("input", onInput);
  $(window).scroll(scrollWindow);
  $("#go-up-button").click(goUp);
});

const onInput = function (event) {
  const $inputElement = $(this);
  const divButtonsElement = $inputElement.next()[0];
  const $divButtonsElement = $(divButtonsElement);
  const counterElement = $divButtonsElement.find(".counter")[0];

  const counter = $(counterElement);

  // number of characters user has input
  let len = $(this).val().length;
  const characterCount = 140 - len;

  // display in HTML
  counter.text(characterCount);

  if (characterCount < 0) {
    counter.addClass("red");
  } else {
    counter.removeClass("red");
  }
};

// this section scrolls to reveal scroll-up button
const scrollWindow = function() {
  if ($(window).scrollTop() > 300) {
    // stop() prevents blinking
    $("nav").stop().fadeOut();
    $("#go-up-button").stop().fadeIn();
  } else {
    $("nav").stop().fadeIn();
    $("#go-up-button").stop().fadeOut();
  }
};

// this section makes the window go up when the button is pressed
const goUp = function(event) {
  $("html, body").animate({ scrollTop: 0 }, 300);
  $(".new-tweet").slideDown();
};
