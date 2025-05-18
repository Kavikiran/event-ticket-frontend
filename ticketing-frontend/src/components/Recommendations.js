// frontend/src/components/Recommendations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!userId) return;
    axios.get(`http://127.0.0.1:8000/recommendations/${userId}`)
      .then(res => setRecommendations(res.data.recommendations))
      .catch(err => console.error(err));
  }, [userId]);

  if (!userId) {
    return <p>Please log in to see recommendations.</p>;
  }

  return (
    <div>
      <h2>Recommended Events For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        <ul>
          {recommendations.map(event => (
            <li key={event.id}>
              <strong>{event.name}</strong> - {new Date(event.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
