import React from 'react';
// { useState, useEffect, useRef}

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Park Tracker</h1>
    </div>
    
  );
}

const headerStyle = {
  padding: '2rem 20%',
  fontSize: '1.5rem',
  backgroundColor: '#fcfcfc'
}

export default Header;
