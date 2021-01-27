import React from 'react';
// { useState, useEffect, useRef}

function Header() {
  return (
    <div style={headerStyle} className="gradient">
      <h1>{"Parkeer Tracker"}</h1>
    </div>
    
  );
}

const headerStyle = {
  padding: '2rem 10%',
  fontSize: '1.5rem',
  color: 'white',
  // backgroundColor: '#fcfcfc'
}

export default Header;
