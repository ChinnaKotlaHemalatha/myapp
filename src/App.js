import React from 'react';
feature/form

// ✅ Define Form component
function ContactForm() {
  return (
    <form style={{ margin: '20px' }}>
      <label>Name: </label>
      <input type="text" placeholder="Enter your name" /><br /><br />
      <label>Email: </label>
      <input type="email" placeholder="Enter your email" /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

 main

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
 feature/form
      <h1>Hello React App</h1>
      <ContactForm /> {/* 👈 Include the form here */}

      <Navbar /> {/* Use Navbar here */}
      <h1>Hello React App</h1>
 main
    </div>
  );
}

export default App;
