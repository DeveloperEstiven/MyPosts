import React, { Component } from 'react';
import './searchPanel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onUpdateSearch = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="what are we looking for?"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
