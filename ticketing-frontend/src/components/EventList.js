import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = ({ onSelectEvent }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/events/')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <button onClick={() => onSelectEvent(event)}>
              {event.name} - {new Date(event.date).toLocaleDateString()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
