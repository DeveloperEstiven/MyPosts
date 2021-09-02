import React from 'react';
import PostListItem from '../postListItem/';
import './postList.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onTrash={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    );
  });
  return <ul className="app-list">{elements}</ul>;
};

export default PostList;
