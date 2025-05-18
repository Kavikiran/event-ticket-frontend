// frontend/src/App.js
import React, { useState } from 'react';
import EventList from './components/EventList';
import SeatSelection from './components/SeatSelection';
import Forecast from './components/Forecast';
import Recommendations from './components/Recommendations';
import './styles.css';


function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const userId = 101;

  return (
    <div>
      <h1>Event Ticketing System</h1>

      <EventList onSelectEvent={setSelectedEvent} />

      {selectedEvent && (
        <div>
          <h3>Selected Event: {selectedEvent.name}</h3>
          <Forecast eventId={selectedEvent.id} />
          <SeatSelection eventId={selectedEvent.id} userId={userId} />
          <Recommendations userId={userId} />
        </div>
      )}
    </div>
  );
}

export default App;
