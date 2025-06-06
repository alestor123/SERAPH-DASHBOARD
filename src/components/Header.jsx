import React from 'react';
import { Shield } from 'lucide-react';

const styles = {
    header: {
      height: '64px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(96, 165, 250, 0.3)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px'
    },
    logo: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      color: '#60A5FA',
      marginRight: '16px'
    },
    subtitle: {
      fontSize: '14px',
      color: '#9CA3AF'
    },
    headerRight: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    statusOnline: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#10B981'
    },
    statusDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#10B981',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
}

const Header = ({ eventCount }) => (
  <div style={styles.header}>
    <div style={styles.logo}>
      <Shield size={20} color="white" />
    </div>
    <h1 style={styles.title}>SERAPH</h1>
    <div style={styles.subtitle}>TACTICAL INTELLIGENCE SYSTEM</div>
    <div style={styles.headerRight}>
      <div style={styles.statusOnline}>
        <div style={styles.statusDot}></div>
        <span style={{ fontSize: '14px' }}>ONLINE</span>
      </div>
      <div style={{ fontSize: '14px', color: '#9CA3AF' }}>
        {eventCount} ACTIVE EVENTS
      </div>
    </div>
  </div>
);

export default Header;