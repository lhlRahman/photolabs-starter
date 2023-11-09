import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, city, country, full, name, profile, setFavoritePhotos } = props;
  return (
    <div className='photo-list__item'>
      <PhotoFavButton setFavoritePhotos={setFavoritePhotos} photoId={id} />
      <img className='photo-list__image' src={full} id={id} alt={`${name}'s post`} />
      <div className="photo-list__user-info">
        <img className='photo-list__user-profile' src={profile} alt={`${name}'s profile`} />
        <div>
          <p className="photo-list__user-name">{name}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;