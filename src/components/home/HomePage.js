import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="week1" className="btn btn-primary btn-lg">
      Week 1 Javascript
    </Link>
  </div>
);

export default HomePage;
