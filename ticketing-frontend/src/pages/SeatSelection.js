// src/pages/SeatSelection.js
import React, { useState } from 'react';
import './SeatSelection.css'; // We’ll style it next

const rows = 5;
const cols = 10;

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleConfirm = () => {
    alert(`You have booked: ${selectedSeats.join(', ')}`);
    // TODO: Send to backend later
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div className="seats">
        {Array.from({ length: rows }).map((_, rowIdx) =>
          Array.from({ length: cols }).map((_, colIdx) => {
            const seatId = `${String.fromCharCode(65 + rowIdx)}${colIdx + 1}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <div
                key={seatId}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(seatId)}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>
      <button onClick={handleConfirm}>Confirm Selection</button>
    </div>
  );
};

export default SeatSelection;
