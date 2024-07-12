import React from 'react';
import QuoteButton from './QuoteButton';
import TwitButton from './TwitterButton';

const QuoteBox = ({ quote, author, twitterURL, onNewQuoteClick }) => (
  <div id="quote-box" className="quote-box">
    <div>
      <p id="text" className="quote-text">
        <i className="quote-icon fa fa-quote-left fa-2x fa-pull-left"></i> {quote}
      </p>
      <cite id="author" className="guote-author"> - {author} </cite>
      <div className="btn-box">
        <TwitButton twitterURL={twitterURL} />
        <QuoteButton onClick={onNewQuoteClick} />
      </div>
    </div>
  </div>
);

export default QuoteBox;