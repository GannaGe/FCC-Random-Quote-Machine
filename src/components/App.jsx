import React, { useState, useCallback, useEffect } from 'react';
import './App.scss';
import QuoteBox from './QuoteBox';

const dataBaseUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const App = () => {
  const [quotes, setQuotes] = useState([
    {quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse"}
  ]);
  const [index, setIndex] = useState(0);

  const fetchQuotes = useCallback (async () => {
    try {
      const response = await fetch(dataBaseUrl);
      const data = await response.json();
      setQuotes(data.quotes);
      setIndex(Math.floor(Math.random() * data.quotes.length))
    } catch (error) {
      console.log("Error fetching quotes:", error);
    }
  }, []);

  const getRandomIndex = useCallback(() => {
    setIndex(prevIndex => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return randomIndex !== prevIndex ? randomIndex : (randomIndex + 1) % quotes.length;
    });
  }, [quotes.length]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const randomQuote = quotes[index];
  const twitterURL = `http://www.twitter.com/intent/tweet?text=${randomQuote.quote} - ${randomQuote.author}`;

  return (
    <div className="container">
      <QuoteBox
        quote={randomQuote.quote}
        author={randomQuote.author}
        onNewQuoteClick={() => getRandomIndex()}
        twitterURL={twitterURL}
      />
    </div>
  );
};

export default App;
