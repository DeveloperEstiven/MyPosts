import React, { Component } from 'react';
import AppHeader from '../appHeader/';
import PostAddForm from '../postAddForm/';
import PostList from '../postList/';
import SearchPanel from '../searchPanel/';
import PostStatusFilter from '../postStatusFilter/';
import styled from 'styled-components';
import './app.css';

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 26px;
`;

export default class App extends Component {
  maxId = 4;

  state = {
    data: [
      { label: 'React', important: false, like: true, id: 'dfgdhfh' },
      { label: 'JavaScript', important: false, like: false, id: 'dfgdhdfhm' },
      { label: 'Redux', important: false, like: false, id: 'dfgdh34' },
    ],

    term: '',
    filter: 'all',
  };

  deleteItem = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return { data: newArr };
    });
  };

  addItem = body => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return { data: newArr };
    });
  };

  onToggleLike = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return { data: newArr };
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    console.log(term.length);

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  };

  onUpdateSearch = term => {
    this.setState({ term });
  };

  filterPosts = (items, filter) => {
    switch (filter) {
      case 'liked':
        return items.filter(item => item.like);
      case 'all':
        return items;
      default:
        return;
    }
  };

  onFilterSelect = filter => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>

        <PostList
          posts={visiblePosts}
          onDelete={id => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />

        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
