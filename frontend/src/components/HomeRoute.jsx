import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import React from "react";

export default function HoemRoute(props) {
  const { photos, topics } = props;
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
}