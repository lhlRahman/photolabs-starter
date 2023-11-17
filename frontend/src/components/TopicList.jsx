import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { darkMode } = props;

  // Map through the topics array and create a TopicListItem component for each topic
  const topics = props.topics.map(({id, slug, title}) => {
    return (
      <TopicListItem
        key={id}
        id={id}
        slug={slug}
        title={title}
        setCurrentTopic={props.setCurrentTopic}
        darkMode={darkMode}
      />
    );
  });

  return (
    // Container for the topic list
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;