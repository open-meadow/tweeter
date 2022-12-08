/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  console.log("new beenz");

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Convert Input Text into Tweet
  const createTweetElement = function (tweetData) {
    // create tweet element
    const tweet = $(`
    <div class="tweet-container">
      <header>
        <img class="image" src=${tweetData.user.avatars}"></img>
        <p class="username">${tweetData.user.name}</p>
        <p class="handle">${tweetData.user.handle}</p>
      </header>
      <article class="tweet">${escape(tweetData.content.text)}</article>
      <footer>
        <div>${timeago.format(tweetData.created_at)}</div>
        <div class="small-icons">
          <a><i class="fa-solid fa-flag"></i></a>
          <a><i class="fa-solid fa-repeat"></i></a>
          <a><i class="fa-solid fa-heart"></i></a>
        </div>
      </footer>
    </div>
    `);
    return tweet;
  };

  // Render All Loaded Tweets in single page
  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // get return value and append it to tweets container

    tweets.forEach((element) => {
      const $tweet = createTweetElement(element);
      $("#tweets-container").prepend($tweet[0]);
    });
  };

  // load tweets from server
  const loadTweets = function () {
    // AJAX function sends loaded data to renderTweets
    $.ajax("/tweets", { method: "GET" }).then(function (data) {
      renderTweets(data);
    });
  };

  // initial load function
  loadTweets();

  // this section loads the 'new tweets' input once the button is pressed
  $(".nav-text").click(() => {
    if($(".new-tweet").is(":visible")) {
      $(".new-tweet").slideUp();
    } else {
      $(".new-tweet").slideDown();
    }
  })


  // this section dictates what to do after 'submit' has been pressed.
  $("form").submit(function (event) {
    event.preventDefault();

    // hides the error message when the 'submit' button is clicked
    $(".error-message").html(" ");
    $(".error-message").slideUp(0);

    // get length of typed in text
    const inputData = $(".input-bar").val();

    // check if user has valid input
    let isValid = true;

    if (!inputData) {
      $(".error-message").html("<i class='fa-solid fa-circle-exclamation'></i> &emsp;Please input some text.");
      $(".error-message").slideDown(400);
      isValid = false;
    }

    if (inputData.length > 140) {
      $(".error-message").html("<i class='fa-solid fa-circle-exclamation'></i> &emsp;Please stay under 140 characters.");
      $(".error-message").slideDown(400);
      isValid = false;
    }

    // if input is valid, perform operation
    if (isValid) {
      // convert JSON data to query-text format
      const serializedData = $(this).serialize();
      console.log(serializedData);

      // jQuery AJAX post request
      $.post("/tweets", serializedData).then(() => {
        loadTweets();
      });
    }
  });
});
