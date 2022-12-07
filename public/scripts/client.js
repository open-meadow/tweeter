/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  console.log("new beenz");

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
      <article class="tweet">${tweetData.content.text}</article>
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

  const validation = (data) => {
    if (!data) {
      return false;
    }

    if (data.length > 140) {
      return false;
    }

    return true;
  };

  // initial load function
  loadTweets();

  // this section dictates what to do after 'submit' has been pressed.
  $("form").submit(function (event) {
    event.preventDefault();

    const inputData = $(".input-bar").val();
    // console.log("input box", length);

    const isValid = validation(inputData);
    console.log(isValid);

    if (isValid) {
      // convert JSON data to query-text format
      const serializedData = $(this).serialize();
      console.log(serializedData);

      // jQuery AJAX post request
      $.post("/tweets", serializedData).then(() => {
        loadTweets();
      });
    } else {
      alert("Baaaaaaah")
    }
  });
});
