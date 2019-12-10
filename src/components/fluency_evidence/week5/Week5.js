/* eslint-disable react/no-unescaped-entities */
import React from "react";
/* import { connect } from "react-redux";
import * as courseActions from "../../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux"; */
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import store1 from "./store1.jpg";

class Week5 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 5: Local Storage</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              API
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>Local Storage: API</Card.Title>
                <Card.Text>
                  {""}
                  LocalStorage object stores the data with no expiration data.
                  The data will not be deleted when the browser is closed, and
                  will be available the next day, week, or year. localStorage
                  does this with no expiration data. sessionStorage stores data
                  for only one session, when the browser tab is closed.
                  <br />
                  <br />
                  <Image src={store1} />
                  <br />
                  As seen above the information is localStorage.setItem() into
                  the localStorage. Then if it is ever needing to be requested
                  use the localStorage.getItem().
                  <br />
                  <br />
                  <i>
                    {" "}
                    Source: https://www.w3schools.com/html/html5_webstorage.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

export default Week5;
