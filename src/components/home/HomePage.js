import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>CIT 270 David Mitchell</h1>
    <p>Having fun with my first react app this semester.</p>
    <Link to="week1" className="btn btn-primary btn-lg">
      Week 1 Javascript
    </Link>
  </div>
);

export default HomePage;
