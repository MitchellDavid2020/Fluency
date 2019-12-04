import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import week1 from "./fluency_evidence/week1/Week1";
import week2 from "./fluency_evidence/week2/Week2";
import week3 from "./fluency_evidence/week3/Week3";
import week4 from "./fluency_evidence/week4/Week4";
import week5 from "./fluency_evidence/week5/Week5";
import week6 from "./fluency_evidence/week6/Week6";
import week7 from "./fluency_evidence/week7/Week7";
import week8 from "./fluency_evidence/week8/Week8";
import week9 from "./fluency_evidence/week9/Week9";
import week10 from "./fluency_evidence/week10/Week10";
import FinalApp from "./fluency_evidence/final_app/FinalApp";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/week1" component={week1} />
      <Route exact path="/week2" component={week2} />
      <Route exact path="/week3" component={week3} />
      <Route exact path="/week4" component={week4} />
      <Route exact path="/week5" component={week5} />
      <Route exact path="/week6" component={week6} />
      <Route exact path="/week7" component={week7} />
      <Route exact path="/week8" component={week8} />
      <Route exact path="/week9" component={week9} />
      <Route exact path="/week10" component={week10} />
      <Route exact path="/final_app" component={FinalApp} />
    </div>
  );
}

export default App;
