import React, { Component } from 'react';
import './MainPage.css';
import EntryList from './EntryList.js';

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <EntryList />
      </div>
    );
  }
}

export default MainPage;