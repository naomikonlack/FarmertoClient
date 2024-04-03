import React, { useState, useEffect } from 'react';

function App() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    fetch('/produce')
      .then(response => response.json())
      .then(data => setProduce(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Available Produce:</h1>
      <ul>
        {produce.map(item => (
          <li key={item.id}>{item.name} - {item.quantity} available</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
