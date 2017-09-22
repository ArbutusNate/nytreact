import React from "react";
import "./ArticleBox.css";

const ArticleBox = props =>

  <div className="article-box">
    <div className="result-content">
      <a href="{props.link}"><h2>{props.title}</h2></a>
      <p className="result-summary">{props.summary}</p>
      <p className="result-date">{props.date}</p>
    </div>
    <button className="save-article">Save</button>
  </div>


export default ArticleBox;