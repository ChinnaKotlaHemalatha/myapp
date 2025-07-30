import React from 'react';

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

function App() {
  return (
    <div>
      <h1>Hello React App</h1>
      <ContactForm /> {/* 👈 Include the form here */}
    </div>
  );
}

export default App;
