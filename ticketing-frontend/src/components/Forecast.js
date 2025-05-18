// frontend/src/components/Forecast.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Forecast({ eventId }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!eventId) return;                        // don’t fetch until an event is selected
    axios
      .get(`http://127.0.0.1:8000/forecast/${eventId}?days=7`)
      .then(response => {
        setForecast(response.data.forecast);
      })
      .catch(error => console.error(error));
  }, [eventId]);

  if (!eventId) {
    return <p>Please select an event to see its forecast.</p>;
  }

  return (
    <div>
      <h2>Forecasted Ticket Sales (Next 7 days)</h2>
      <ul>
        {forecast.map(item => (
          <li key={item.ds}>
            {new Date(item.ds).toLocaleDateString()}: {Math.round(item.yhat)} tickets
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
