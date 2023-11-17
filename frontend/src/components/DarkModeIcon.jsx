import React from 'react';
import darkModeSymbol from '../assets/darkModeSymbol.svg';
import lightModeSymbol from '../assets/lightModeSymbol.svg';

const DarkModeIcon = ({toggleDarkMode, darkMode}) => {
  return (
    // Container for the dark mode symbol
    <div className="top-nav-bar__dark-mode-symbol" onClick={() => toggleDarkMode()}>
      {/* Display the dark mode symbol or light mode symbol based on the value of darkMode */}
      <img src={`${darkMode ? lightModeSymbol : darkModeSymbol }`} alt="dark mode symbol"/>
    </div>
  );
};

export default DarkModeIcon;