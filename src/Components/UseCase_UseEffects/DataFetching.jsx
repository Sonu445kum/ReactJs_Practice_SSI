// import React, { useEffect, useState } from 'react';

// export default function DataFetching() {
//   // State to store fetched data
//   const [data, setData] = useState(null);   //  []
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts") 
//       .then(res => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <ul>
//         {data.slice(0, 5).map(item => ( // show first 5 items
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

// Simple CSS spinner
 export const Spinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <div className="loader"></div>
    <style>
      {`
        .loader {
          border: 8px solid #f3f3f3; 
          border-top: 8px solid #3498db; 
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default function DataFetching() {
  const [data, setData] = useState(null);   // [] bhi rakh sakte ho
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    fetch("https://jsonplaceholder.typicode.com/posts/")
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

  if (loading) return <Spinner />;
  if (error) return <h2 style={{ color: "red" }}> Error: {error}</h2>;

  return (
    <div>
      <h1> Fetched Data:</h1>
      <ul>
        {data.slice(0, 5).map(item => ( // show first 5 items
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
