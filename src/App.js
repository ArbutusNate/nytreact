import React, { Component } from 'react';
import logo from './logo.svg';
import ResultBox from "./components/ResultBox";
import SavedBox from "./components/SavedBox";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header"></div>
        <div className="search">
          <form>
            <input type="text" name="topic" />
            <input type="text" name="start-year" />
            <input type="text" name="end-years" />
          </form>
        </div>
        <div className="results">
          {
            // <ResultBox
            // PASS IN RESULT JSON
            // />
          }
        </div>
        <div className="saved-articles">
          {
            // <SavedBox
            // PASS IN SAVED ARTICLES
            // />
          }
        </div>
      </div>
    );
  }
}

export default App;
