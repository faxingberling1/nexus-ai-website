import React from 'react';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0F0F1B 0%, #1A1A2E 100%)'
    }}>
      <div className="logo">
        <i className="fas fa-robot" style={{fontSize: '3rem', marginRight: '10px'}}></i>
        <span style={{fontSize: '2rem', fontWeight: '700'}}>Nexus AI</span>
      </div>
    </div>
  );
};

export default Loading;