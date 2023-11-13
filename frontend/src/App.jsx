import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hook/useApplicationData';

const App = () => {
  const {isModalOpen, selectedPhoto, favorites, selected, displayAlert, openModal, closeModal, addFavPhoto, removeFavPhoto, iconLiked, iconUnliked} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favorites={favorites} selected={selected} displayAlert={displayAlert} addFavPhoto={addFavPhoto} removeFavPhoto={removeFavPhoto} onClick={openModal} iconLiked={iconLiked} iconUnliked={iconUnliked} />
      {isModalOpen && <PhotoDetailsModal
        {...selectedPhoto}
        onClick={closeModal}
      />}
    </div>
  );
};

export default App;