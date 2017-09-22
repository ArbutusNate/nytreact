import ResultBox from "../ResultBox";
import SavedBox from "../SavedBox";
import Search from "../Search";
import Header from "../Header";
import React from "react";
import "./Wrapper.css";

const Wrapper = props =>

  <div className="wrapper">

    <Header />

    <Search />

    <SavedBox />

  </div>

export default Wrapper;
