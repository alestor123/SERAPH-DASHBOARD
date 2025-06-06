import React from 'react';
import { AlertTriangle } from 'lucide-react';

const styles = {
    errorContainer: {
      height: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    errorContent: {
      textAlign: 'center'
    },
    errorText: {
      color: '#F87171',
      fontFamily: 'Courier New, monospace',
      fontSize: '18px'
    },
    retryButton: {
      marginTop: '16px',
      padding: '8px 24px',
      backgroundColor: 'rgba(248, 113, 113, 0.2)',
      border: '1px solid #F87171',
      color: '#F87171',
      fontFamily: 'Courier New, monospace',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
}

const ErrorScreen = ({ error, onRetry }) => (
  <div style={styles.errorContainer}>
    <div style={styles.errorContent}>
      <AlertTriangle size={64} color="#F87171" style={{ margin: '0 auto 16px' }} />
      <div style={styles.errorText}>{error}</div>
      <button 
        style={styles.retryButton}
        className="retry-button"
        onClick={onRetry}
      >
        RETRY CONNECTION
      </button>
    </div>
  </div>
);

export default ErrorScreen;