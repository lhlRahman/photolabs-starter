import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const { photos } = props;

  const photoArray = props.photos.map(({ id, location: { city, country }, urls: { full, regular }, user: { id: userId, username, name, profile } }, i) => {
    return (
      <PhotoListItem
        key={i}
        id={id}
        city={city}
        country={country}
        full={full}
        name={name}
        profile={profile}
        setFavoritePhotos={props.setFavoritePhotos}
      />
    );
  });
  
  return (
    <ul className="photo-list">
      {photoArray}
    </ul>
  );
}



export default PhotoList;
