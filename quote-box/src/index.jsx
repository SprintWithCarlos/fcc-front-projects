import React, { useState, useEffect, Fragment } from 'react';
import { render } from 'react-dom';

// const URL = 'https://jsonplaceholder.typicode.com/todos/';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const SelectedQuote = ({ quote, author }) => (
  <article>
    <p>{quote}</p>
    <p>{author}</p>
  </article>
);

export default function App() {
  const [data, setData] = useState([]);
  const [selectedQuote, setselectedQuote] = useState([]);
  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((results) => setData(results.quotes));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const quoteByIndex = () => {
    const randomNumber = getRandomInt(data.length + 1);
    const quote = data && data.filter((x, index) => index === randomNumber);
    setselectedQuote(quote);
  };
  if (data) {
    useEffect(() => {
      quoteByIndex();
    }, [data]);
  }

  const block = selectedQuote.map(({ quote, author }) => (
    <SelectedQuote key={author} quote={quote} author={author} />
  ));

  const handleClick = (e) => {
    quoteByIndex();
  };

  return (
    <div>
      {block}
      <button type='submit' onClick={handleClick}>
        Renew Quote
      </button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
