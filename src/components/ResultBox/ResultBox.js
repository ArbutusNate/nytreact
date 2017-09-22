import React from "react";
import ArticleBox from "../ArticleBox";

const ResultBox = props =>

  <div className="result-box">

    <ul className="list-group search-results">
      {props.results.map(results =>
        <li key={results.title} className="list-group-item">
          <a href={results.web_url}> <h2>{results.headline.main}</h2> </a>
          <button
            data-name={results.headline.main}
          > X </button>
          <button
            data-name={results.headline.main}
            data-url={results.web_url}
          >Save</button>
        </li>
      )}
    </ul>

  </div>;

export default ResultBox;


