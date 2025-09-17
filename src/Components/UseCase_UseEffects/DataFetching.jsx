import React, { useEffect, useState } from 'react';

export default function DataFetching() {
  // State to store fetched data
  const [data, setData] = useState(null);   //  []
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.slice(0, 5).map(item => ( // show first 5 items
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
