import React from 'react';

// ✅ Define Navbar component here
function Navbar() {
  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '10px' }}>
      <h3>Navbar Component</h3>
    </div>
  );
}

// ✅ Main App component
function App() {
  return (
    <div>
      <Navbar /> {/* Use Navbar here */}
      <h1>Hello React App</h1>
    </div>
  );
}

export default App;
