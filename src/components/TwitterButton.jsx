import React from 'react';

const TwitterButton = ({ twitterURL }) => (
  <a id="twitter-quote" className="btn btn-twitter-quote" target="_blank" rel="noopener noreferrer" href={twitterURL}>
    <i className="fa fa-twitter-square fa-2x"></i>
  </a>
);

export default TwitterButton;