import React from 'react';

const TwitterButton = ({ twitterURL }) => (
  <a id="tweet-quote" className="btn btn-tweetr-quote" target="_blank" rel="noopener noreferrer" href={twitterURL}>
    <i className="fa fa-twitter-square fa-2x"></i>
  </a>
);

export default TwitterButton;
