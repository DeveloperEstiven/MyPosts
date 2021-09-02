import React, { Component } from 'react';
import { HeartIcon, StarIcon, TrashIcon } from './icons';
import './postListItem.css';

export default class PostListItem extends Component {
  render() {
    const { label, onTrash, onToggleImportant, onToggleLike, important, like } =
      this.props;
    let classNames = 'app-list-item';

    if (important) {
      classNames += ' important';
    }

    if (like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span>{label}</span>

        <div className="app-list-item__btns">
          <button
            type="button"
            className="btn-icon"
            onClick={onToggleImportant}
          >
            <StarIcon />
          </button>

          <button type="button" className="btn-icon" onClick={onTrash}>
            <TrashIcon />
          </button>

          <button type="button" className="btn-icon" onClick={onToggleLike}>
            <HeartIcon />
          </button>
        </div>
      </div>
    );
  }
}
