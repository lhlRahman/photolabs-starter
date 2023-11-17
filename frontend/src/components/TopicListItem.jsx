import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, slug, title, darkMode} = props;
  return (
    // Container for each topic list item
    <div className={`topic-list__item${darkMode ? '-dark-mode' : ''}`}>
      {/* Display the topic title and handle click event */}
      <span onClick={() => props.setCurrentTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;