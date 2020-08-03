import React,{useState,useEffect } from 'react'
import IndiaBreak from './IndiaBreak'

function IndiaApi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=285906bd7d7f4c0a825bb5dc2e37dadd")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.articles);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.name}>
          <IndiaBreak key={item.url} item={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default IndiaApi