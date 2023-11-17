import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import SearchBar from './SearchBar';
import DarkModeIcon from './DarkModeIcon';

const TopNavigation = (props) => {
  const { toggleDarkMode, darkMode } = props;
  return (
    // Container for the top navigation bar
    <div className={`top-nav-bar${darkMode ? '-dark-mode' : ''}`}>
      {/* Display the logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render the TopicList component */}
      <TopicList topics={props.topics} setCurrentTopic={props.setCurrentTopic} darkMode={darkMode}/>
      {/* Render the SearchBar component */}
      <SearchBar setSearchTerm={props.setSearchTerm}/>
      {/* Render the DarkModeIcon component */}
      <DarkModeIcon toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* Render the FavBadge component */}
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} displayFavorites={props.displayFavorites} showFavorites={props.showFavorites}/>
    </div>
  );
};

export default TopNavigation;