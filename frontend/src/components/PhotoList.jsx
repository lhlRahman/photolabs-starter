import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoArray = props.photos.map(({ id, location: { city, country }, urls: { full, regular }, user: { id: userId, username, name, profile } }, i) => {
    return (
      <PhotoListItem
        key={i}
        id={id}
        city={city}
        country={country}
        full={full}
        name={name}
        regular={regular}
        profile={profile}
        isPhotoFavorited={props.isPhotoFavorited}
        setFavorites={props.setFavorites}
        removeFromFavorites={props.removeFromFavorites}
        onClick={props.onClick}
      />
    );
  });
  return (
    <ul className="photo-list">
      {photoArray}
    </ul>
  );
};

export default PhotoList;