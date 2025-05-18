// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Event Ticketing System</h1>
      <Link to="/recommendations/1">See Recommendations for User 1</Link>
    </div>
  );
}
