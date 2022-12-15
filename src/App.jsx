import React, { useState } from 'react';
import './App.css';
import { Info } from './components/Info';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState);
  }

  console.log(isDarkMode);

  return (
    <div className={`app ${!isDarkMode ? 'light' : ''}`}>
      <Info darkmode={isDarkMode} handleClick={toggleDarkMode} />
      <About darkmode={isDarkMode} />
      <Interests darkmode={isDarkMode} />
      <Footer darkmode={isDarkMode} />
    </div>
  );
}

export default App;
