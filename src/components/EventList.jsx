import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { getEventColor, getEventIcon, formatDate } from '../utils';

const styles = {
    articlesList: {
      flex: 1,
      overflowY: 'auto'
    },
    articleItem: {
      padding: '16px',
      borderBottom: '1px solid rgba(107, 114, 128, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    articleItemSelected: {
      padding: '16px',
      borderBottom: '1px solid rgba(107, 114, 128, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(96, 165, 250, 0.2)',
      borderLeft: '4px solid #60A5FA'
    },
    articleContent: {
      display: 'flex',
      gap: '12px'
    },
    articleIcon: {
      width: '40px',
      height: '40px',
      border: '1px solid',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    articleBody: {
      flex: 1,
      minWidth: 0
    },
    articleMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '4px'
    },
    badge: {
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: 'bold'
    },
    badgeWar: {
      backgroundColor: 'rgba(248, 113, 113, 0.2)',
      color: '#F87171'
    },
    badgeHurricane: {
      backgroundColor: 'rgba(96, 165, 250, 0.2)',
      color: '#60A5FA'
    },
    badgeDefault: {
      backgroundColor: 'rgba(245, 158, 11, 0.2)',
      color: '#F59E0B'
    },
    sourceName: {
      fontSize: '10px',
      color: '#6B7280'
    },
    articleTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    articleDescription: {
      fontSize: '12px',
      color: '#9CA3AF',
      marginBottom: '8px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    articleFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '10px',
      color: '#6B7280'
    },
    footerItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
}

const EventList = ({ events, selectedEvent, onSelectEvent }) => (
  <div style={styles.articlesList}>
    {events.map((event, index) => (
      <div
        key={index}
        className="article-item"
        style={selectedEvent === event ? styles.articleItemSelected : styles.articleItem}
        onClick={() => onSelectEvent(event)}
      >
        <div style={styles.articleContent}>
          <div style={{ ...styles.articleIcon, ...getEventColor(event.type) }}>
            {getEventIcon(event.type)}
          </div>
          <div style={styles.articleBody}>
            <div style={styles.articleMeta}>
              <span style={{
                ...styles.badge,
                ...(event.type === 'war' ? styles.badgeWar :
                   event.type === 'hurricane' ? styles.badgeHurricane :
                   styles.badgeDefault)
              }}>
                {event.type.toUpperCase()}
              </span>
              <span style={styles.sourceName}>{event.source.name}</span>
            </div>
            <h3 style={styles.articleTitle}>{event.title}</h3>
            <p style={styles.articleDescription}>{event.description}</p>
            <div style={styles.articleFooter}>
              <div style={styles.footerItem}>
                <Clock size={12} />
                <span>{formatDate(event.publishedAt)}</span>
              </div>
              <div style={styles.footerItem}>
                <MapPin size={12} />
                <span>{event.lat.toFixed(2)}, {event.long.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default EventList;