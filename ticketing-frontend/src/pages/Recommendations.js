import React, { useEffect, useState } from 'react';

function Recommendations() {
  const [eventIds, setEventIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/recommendations/1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setEventIds(data.event_ids);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Recommended Events for User 1</h2>
      <ul>
        {eventIds.map(id => (
          <li key={id}>Event ID: {id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
