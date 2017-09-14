import React from "react";
import "./ResultBox.css";

const ResultBox = props =>
  <div className="result">
    <div className="result-content">
      <a href="{props.link}"><h2>{props.title}</h2></a>
      <p className="result-summary">{props.summary}</p>
      <p className="result-date">{props.date}</p>
    </div>
    <button className="save-article">Save</button>
  </div>;

export default ResultBox;
