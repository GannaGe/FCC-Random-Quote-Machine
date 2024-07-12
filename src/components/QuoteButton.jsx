import React from 'react';

const QuoteButton = ({ onClick }) => (
  <button id="new-quote" className="btn btn-new-quote" onClick={onClick}>New Quote</button>
);

export default QuoteButton;