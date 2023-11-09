import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const {addFavoritePhoto, photoId} = props;

  const handleClick = () => {
    if (isFavorited) {
      setIsFavorited(false);
    }
    else {
      setIsFavorited(true);
      addFavoritePhoto(photoId);
    }
  }

  // Define the style object

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
