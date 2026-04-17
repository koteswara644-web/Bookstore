import React from 'react';

const Header = () => {
  return (
    <nav style={{
      backgroundColor: '#1e2937',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#22d3ee' }}>📖 KukuBooks</div>
      
      <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
        <a href="/" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Library</a>
        <a href="#" style={{ color: '#red', textDecoration: 'none' }}>My List</a>
      </div>

      <input 
        type="text" 
        placeholder="Search audiobooks..." 
        style={{
          backgroundColor: '#334155',
          border: 'none',
          padding: '0.7rem 1.2rem',
          borderRadius: '9999px',
          width: '280px',
          color: 'white',
          hover:' red',
        }}
      />
    </nav>
  );
};

export default Header;