import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Week1 from "./fluency_evidence/week1/Week1";
import Week2 from "./fluency_evidence/week2/Week2";
import Week3 from "./fluency_evidence/week3/Week3";
import Week4 from "./fluency_evidence/week4/Week4";
import Week5 from "./fluency_evidence/week5/Week5";
import Week6 from "./fluency_evidence/week6/Week6";
import Week7 from "./fluency_evidence/week7/Week7";
import Week8 from "./fluency_evidence/week8/Week8";
import Week9 from "./fluency_evidence/week9/Week9";
import Week10 from "./fluency_evidence/week10/Week10";
import FinalApp from "./fluency_evidence/final_app/FinalApp";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/week1" component={Week1} />
        <Route exact path="/week2" component={Week2} />
        <Route exact path="/week3" component={Week3} />
        <Route exact path="/week4" component={Week4} />
        <Route exact path="/week5" component={Week5} />
        <Route exact path="/week6" component={Week6} />
        <Route exact path="/week7" component={Week7} />
        <Route exact path="/week8" component={Week8} />
        <Route exact path="/week9" component={Week9} />
        <Route exact path="/week10" component={Week10} />
        <Route exact path="/final_app" component={FinalApp} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
