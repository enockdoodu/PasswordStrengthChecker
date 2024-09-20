import React from 'react';
import './App.css';
import PasswordChecker from './PasswordChecker';
import PasswordGuide from './PasswordGuide';

function App() {
  return (
    <div className="App">
      <PasswordChecker />
      <PasswordGuide />
    </div>
  );
}

export default App;
