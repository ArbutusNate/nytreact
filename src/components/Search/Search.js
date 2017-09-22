import React, { Component } from 'react';
import axios from "axios";
import ResultBox from "../ResultBox"
import "./Search.css";

class Search extends Component {

  state = {
    results: [],
  };

  searchApi = (event) => {
    event.preventDefault();
    const topicField = document.getElementById("topic").value;
    const startYear = document.getElementById("start-year").value + "0101";
    const endYear = document.getElementById("end-year").value + "0101";
    const apiKey = "825f2b6e80614d6899832df94c142bf2";
    axios({
      method:'GET',
      url:'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='
        + topicField
        + '&begin_date=' + startYear
        + '&end_date=' + endYear
        + '&fq=document_type:("article")'
        + '&api-key=' + apiKey,
    })
      .then((response, err) => {
        if(!err){
          // console.log(response.data.response.docs);
          this.setState(
            {results: response.data.response.docs});
          console.log(this.state);
        } else {
          console.log(err);
        }
      })
    };

  // saveToDb = (event) => {
  //   document.getElementById("");
  //   event.preventDefault();
  //   Article.save({

  //   })
  // }

  render(props) {
    return (
      <form>

        <label htmlFor="topic">Topic</label><br/>
        <input
          type="text"
          id="topic"
          name="topic"
        /><br/>

        <label htmlFor="start-year">Start Year</label><br/>
        <input
          type="text"
          id="start-year"
          name="start-year"
        /><br/>

        <label htmlFor="end-year">End Year</label><br/>
        <input
          type="text"
          id="end-year"
          name="end-year"
        /><br/>

        <button
          type="submit"
          id="search-btn"
          onClick={this.searchApi}
        >Search</button>

        <ResultBox
          results={this.state.results}
         />

      </form>
      )

  }

}

export default Search;