import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatSelection = ({ eventId, userId }) => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // Fetch available seats
    axios.get(`http://127.0.0.1:8000/available_seats/${eventId}`)
      .then(res => setAvailableSeats(res.data.available_seats))
      .catch(err => console.error(err));

    // Fetch dynamic price
    axios.get(`http://127.0.0.1:8000/pricing/${eventId}`)
      .then(res => setPrice(res.data.dynamic_price))
      .catch(err => console.error(err));
  }, [eventId]);

  // ... rest of your existing code for seat selection and booking

  return (
    <div>
      <h3>Select Your Seat</h3>
      {price !== null && <p>Current Ticket Price: ${price}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px' }}>
        {/* Seat buttons here */}
      </div>
      <button onClick={bookSeat} style={{ marginTop: '10px' }}>Book Selected Seat</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SeatSelection;
