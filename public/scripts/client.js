/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  console.log("new beenz");

  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };
  
  const createTweetElement = function(tweetData) {
    console.log(tweetData.content.text);
    const tweet = $(`
    <div class="tweet-container">
      <header>
        <img class="image" src=${tweetData.user.avatars}"></img>
        <p class="username">${tweetData.user.name}</p>
        <p class="handle">${tweetData.user.handle}</p>
      </header>
      <article class="tweet">${tweetData.content.text}</article>
      <footer>
        <div>${tweetData.created_at}</div>
        <div class="small-icons">
          <a><i class="fa-solid fa-flag"></i></a>
          <a><i class="fa-solid fa-repeat"></i></a>
          <a><i class="fa-solid fa-heart"></i></a>
        </div>
      </footer>
    </div>
    `);
    return tweet;
  }

  const $tweet = createTweetElement(tweetData);

  const renderTweets = function() {}

  // Test / driver code (temporary)
  console.log($tweet[0]); // to see what it looks like
  $("#tweets-container").append($tweet[0]); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});
