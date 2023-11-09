import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React from "react";

export default function HoemRoute(props) {
  const [favoritePhotos, setFavoritePhotos] = React.useState([]);
  const { photos, topics } = props;
  const addFavoritePhoto = (photo) => {
    setFavoritePhotos([...favoritePhotos, photo]);
  }
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} setFavoritePhotos={setFavoritePhotos} />
    </div>
  );
}