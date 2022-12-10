(function () {
  // jquery ready function
  $(document).ready(function () {
    $(window).scroll(scrollWindow);
    $("#go-up-button").click(goUp);
    $(".nav-text").click(navTextClick);
  });

  // this section scrolls to reveal scroll-up button
  const scrollWindow = function () {
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
  const goUp = function (event) {
    $("html, body").animate({ scrollTop: 0 }, 300);
    $(".new-tweet").slideDown();
  };

  // this section loads the 'new tweets' input once the button is pressed
  const navTextClick = () => {
    if ($(".new-tweet").is(":visible")) {
      $(".new-tweet").slideUp();
    } else {
      $(".new-tweet").slideDown();
    }
  };
})();
