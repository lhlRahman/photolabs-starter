import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    full,
    regular,
    id,
    profile,
    name,
    city,
    country,
    setFavorites,
    removeFromFavorites,
    onClick,
    updateAlert,
    toggleFavorite,
    isPhotoFavorited,
    similar_photos,
    darkMode
  } = props;

  return (
    // Container for each photo list item
    <div className={`photo-list__item${darkMode ? '-dark-mode' : ''}`}>
      {/* Render the PhotoFavButton component */}
      <PhotoFavButton
        setFavorites={setFavorites}
        removeFromFavorites={removeFromFavorites}
        photoId={id}
        isPhotoFavorited={isPhotoFavorited}
        toggleFavorite={toggleFavorite}
        updateAlert={updateAlert}
      />
      {/* Display the photo image */}
      <img className="photo-list__image" src={full} id={id} onClick={onClick ? () => onClick({
        id,
        city,
        country,
        full,
        profile,
        name,
        setFavorites,
        removeFromFavorites,
        isPhotoFavorited,
        similar_photos,
        toggleFavorite,
        updateAlert
      }) : null} />
      {/* Display the user details */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;