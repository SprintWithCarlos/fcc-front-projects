import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

// const URL = 'https://jsonplaceholder.typicode.com/todos/';
const URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const todo = fetch(URL)
      .then((res) => res.json())
      .then((results) => setData(results.quotes));
  }, []);

  if (data) {
    const selectedQuote = data
      .filter((item, i) => i === 69)
      .map((x) => (
        <>
          <p>{x.quote}</p>
          <p>{x.author}</p>
        </>
      ));
    console.log(selectedQuote);

    return <div>{selectedQuote}</div>;
  }
}

render(<App />, document.getElementById('root'));
