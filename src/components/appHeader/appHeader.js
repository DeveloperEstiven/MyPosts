import React from 'react';
import './appHeader.css';

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">My posts</h1>
      <p className="app-header__counter">
        <span>{allPosts}</span> posts, <span>{liked}</span> liked
      </p>
    </div>
  );
};

export default AppHeader;
