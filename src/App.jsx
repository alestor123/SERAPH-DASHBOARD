import 'leaflet/dist/leaflet.css';
import './animation.css' // Import the animations
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';
import ErrorScreen from './components/ErrorScreen';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/v1/main');
      const data = await response.json();
      if (data.success) {
        setEvents(data.data);
        if (data.data.length > 0) {
          setSelectedEvent(data.data[0]);
        }
      }
    } catch (err) {
      setError('Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} onRetry={fetchEvents} />;
  }

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#111827',
      color: 'white',
      fontFamily: 'Courier New, monospace',
      overflow: 'hidden'
    }}>
      <Header eventCount={events.length} />

      <div style={{
        display: 'flex',
        height: 'calc(100vh - 64px)'
      }}>
        <Map
          events={events}
          onSelectEvent={setSelectedEvent}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
        />
        <Sidebar
          events={events}
          selectedEvent={selectedEvent}
          onSelectEvent={setSelectedEvent}
        />
      </div>
    </div>
  );
};

export default App;