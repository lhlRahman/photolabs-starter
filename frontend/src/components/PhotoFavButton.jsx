import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {
  const {
    toggleFavorite,
    updateAlert,
    photoId,
    isPhotoFavorited
  } = props;

  const selected = isPhotoFavorited(photoId);
  let displayAlert = false;

  // Handle the click event when the favorite icon is clicked
  const handleIconClick = () => {
    toggleFavorite(photoId); // Toggle the favorite status of the photo
    displayAlert = updateAlert(); // Update the display alert for favorites
  };

  return (
    <div className="photo-list__fav-icon">
      {/* Render the FavIcon component */}
      {
        <FavIcon displayAlert= {displayAlert} selected={selected} onClick={handleIconClick}/>
      }
    </div>
  );
};

export default PhotoFavButton;