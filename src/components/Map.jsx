import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getIconForType, formatDate } from '../utils';

const styles = {
    mapContainer: {
      flex: 1,
      position: 'relative',
      background: 'linear-gradient(135deg, #111827, #374151, #111827)'
    },
}

const Map = ({ events, onSelectEvent, isDarkMode, onToggleDarkMode }) => {
  return (
    <div style={styles.mapContainer}>
        <button
          onClick={onToggleDarkMode}
          style={{
            position: 'absolute',
            zIndex: 1000,
            top: 10,
            right: 10,
            backgroundColor: '#1F2937',
            color: '#fff',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          {isDarkMode ? "Switch to Light Map" : "Switch to Dark Map"}
        </button>
      <MapContainer
        center={[20.0, 0.0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      >
        <TileLayer
          url={
            isDarkMode
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
          attribution={
            isDarkMode
              ? '&copy; <a href="https://carto.com/">CARTO</a>'
              : '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          }
        />

        {events.map((event, index) => (
          event.lat && event.long && (
            <Marker
              key={index}
              position={[event.lat, event.long]}
              icon={getIconForType(event.type)}
              eventHandlers={{
                click: () => onSelectEvent(event)
              }}
            >
              <Popup>
                <div>
                  <strong>{event.type.toUpperCase()}</strong><br />
                  {event.title}<br />
                  <small>{event.source.name}</small><br />
                  <em>{formatDate(event.publishedAt)}</em>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;