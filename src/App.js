import React, { Component } from 'react';
// import logo from './logo.svg'
import ResultBox from "./components/ResultBox";
import SavedBox from "./components/SavedBox";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h2>New York Times Search</h2>
        </div>
        <div className="search">
          <form>
            <label for="topic">Topic</label><br/>
            <input type="text" id="topic" name="topic" /><br/>
            <label for="start-year">Start Year</label><br/>
            <input type="text" id="start-year" name="start-year" /><br/>
            <label for="end-year">End Year</label><br/>
            <input type="text" id="end-year" name="end-year" /><br/>
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="results">
          {
            <ResultBox
            // PASS IN RESULT JSON
            />
          }
        </div>
        <div className="saved-articles">
          {
            <SavedBox
            // PASS IN SAVED ARTICLES
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
