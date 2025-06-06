import React from 'react';
import EventList from './EventList';
import EventDetails from './EventDetails';

const styles = {
    sidebar: {
      width: '384px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(8px)',
      borderLeft: '1px solid rgba(96, 165, 250, 0.3)',
      display: 'flex',
      flexDirection: 'column'
    },
    sidebarHeader: {
      padding: '16px',
      borderBottom: '1px solid rgba(96, 165, 250, 0.3)'
    },
    sidebarTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#60A5FA',
      marginBottom: '8px'
    },
    sidebarSubtitle: {
      fontSize: '14px',
      color: '#9CA3AF'
    },
}

const Sidebar = ({ events, selectedEvent, onSelectEvent }) => (
  <div style={styles.sidebar}>
    <div style={styles.sidebarHeader}>
      <h2 style={styles.sidebarTitle}>INTELLIGENCE FEED</h2>
      <div style={styles.sidebarSubtitle}>Real-time event analysis</div>
    </div>

    <EventList events={events} selectedEvent={selectedEvent} onSelectEvent={onSelectEvent} />
    <EventDetails event={selectedEvent} />
  </div>
);

export default Sidebar;