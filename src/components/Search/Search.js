import React from "react";
import "./Search.css";

const Search = props =>
    <form>
      <label for="topic">Topic</label><br/>
      <input
        type="text"
        id="topic"
        name="topic"
      /><br/>

      <label for="start-year">Start Year</label><br/>
      <input
        type="text"
        id="start-year"
        name="start-year"
      /><br/>

      <label for="end-year">End Year</label><br/>
      <input
        type="text"
        id="end-year"
        name="end-year"
      /><br/>

      <button
        type="submit"
        value="Search"
      >Search</button>
    </form>

export default Search;