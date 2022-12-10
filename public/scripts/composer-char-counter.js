(function () {

  // jquery ready function
  $(document).ready(function () {
    $(".input-bar").on("input", onInput);
    $(window).scroll(scrollWindow);
    $("#go-up-button").click(goUp);
  });

  // changes character counter
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
})();
