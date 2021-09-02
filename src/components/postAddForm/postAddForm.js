import React, { Component } from 'react';
import './postAddForm.css';

export default class PostAddForm extends Component {
  state = {
    text: '',
  };

  onValueChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }

    this.props.onAdd(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form className="bottom-panel" onSubmit={this.onSubmit}>
        <input
          className=""
          type="text"
          placeholder="enter the text of the new post"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    );
  }
}
