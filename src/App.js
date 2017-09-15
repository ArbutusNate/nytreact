import React, { Component } from 'react';
// import logo from './logo.svg'
import ResultBox from "./components/ResultBox";
import SavedBox from "./components/SavedBox";
import Search from "./components/Search";
import './App.css';

class App extends Component {
  state = {
    search: "",
    results: [],
  }

  searchApi = (event) => {
    event.preventDefault();
  }

  saveArticle = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h2>New York Times Search</h2>
        </div>
        <div className="search">
          {
            <Search
            //Get info from search box
            />
          }
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
