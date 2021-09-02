import React, { Component } from 'react';
import './postStatusFilter.css';

export default class PostStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'liked', label: 'Liked' },
  ];

  render() {
    const { filter, onFilterSelect } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const activeClass = active ? 'active' : '';

      return (
        <button
          key={name}
          className={`btn ${activeClass}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
