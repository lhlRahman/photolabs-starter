import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hook/useApplicationData';

const App = () => {
  // Destructure the values from the custom hook useApplicationData
  const {isModalOpen, selectedPhoto, favorites, selected, displayAlert, openModal, closeModal, addFavPhoto, removeFavPhoto, iconLiked, iconUnliked} = useApplicationData();

  return (
    // Container for the entire application
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute photos={photos} topics={topics} favorites={favorites} selected={selected} displayAlert={displayAlert} addFavPhoto={addFavPhoto} removeFavPhoto={removeFavPhoto} onClick={openModal} iconLiked={iconLiked} iconUnliked={iconUnliked} />
      {/* Render the PhotoDetailsModal component if the modal is open */}
      {isModalOpen && <PhotoDetailsModal
        {...selectedPhoto}
        onClick={closeModal}
      />}
    </div>
  );
};

export default App;