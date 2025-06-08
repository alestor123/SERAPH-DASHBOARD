import React from 'react';

const styles = {
    loadingContainer: {
      height: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loadingContent: {
      textAlign: 'center'
    },
    spinner: {
      width: '32px',
      height: '32px',
      border: '2px solid #60A5FA',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      margin: '0 auto 16px',
      marginTop: '16px', 
      animation: 'spin 1s linear infinite'
    },
    loadingText: {
      color: '#60A5FA',
      fontFamily: 'Courier New, monospace',
      fontSize: '13px'
    },
}

const LoadingScreen = () => (
    <div style={styles.loadingContainer}>
      <div style={styles.loadingContent}>
        {/* ICON */}
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛡️</div>

        {/* FULL FORM */}
        <div style={{
          fontSize: '14px',
          color: '#9CA3AF',
          textAlign: 'center',
          lineHeight: '1.5',
          maxWidth: '100%',
          fontFamily: "'Courier New', monospace",
          marginBottom: '15px'
        }}>
      
 <div style={{ fontSize: '45px', fontWeight: 'bold', color: '#60A5FA', letterSpacing: '0.15em', marginBottom: '8px' }}>
    SERAPH
  </div>
    <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>S</span><span style={{ color: 'white', fontSize: '21px' }}>ituational</span>&nbsp;

    <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>E</span>    <span style={{ color: 'white', fontSize: '21px' }}>vent</span>&nbsp;&amp;&nbsp;

    <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>R</span>    <span style={{ color: 'white', fontSize: '21px' }}>eporting</span>&nbsp;with&nbsp;

    <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>A</span>    <span style={{ color: 'white', fontSize: '21px' }}>nalysis</span>&nbsp;
 <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>P</span>    <span style={{ color: 'white', fontSize: '21px' }}>latform</span>&nbsp;

    <span style={{
      color: '#FFD700',
      fontWeight: 'bold',
      fontSize: '22px',
      textShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
    }}>H</span> <span style={{ color: 'white', fontSize: '21px' }}>azards</span>
</div>
        {/* INITIALIZING TEXT */}
        <div style={styles.loadingText}>INITIALIZING...</div>

        {/* SPINNER (optional) */}
        <div style={styles.spinner}></div>
      </div>
    </div>
);

export default LoadingScreen;