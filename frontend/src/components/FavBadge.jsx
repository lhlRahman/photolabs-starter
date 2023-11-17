import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavorites, displayFavorites }) => {
  return (
    // Container for the favorite badge
    <div className='fav-badge' onClick={() => showFavorites()}>
      {/* Render the FavIcon component */}
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} displayFavorites={displayFavorites}/>
    </div>
  );
};

export default FavBadge;