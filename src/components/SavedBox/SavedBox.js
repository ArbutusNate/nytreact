import React from "react";
import "./SavedBox.css";

const SavedBox = props =>
  <div className="saved">
    <div className="saved-content">
      <div>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
      <div>
        <p>notes module (probably)</p>
      </div>
    </div>
    <span className="remove">Remove</span>
  </div>;

export default SavedBox;
