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
import js1 from "./js1.jpg";
import str1 from "./str1.jpg";

class Week3 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 3: JSON</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              JSON
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>JSON Parse</Card.Title>
                <Card.Text>
                  {""}
                  JSON is mostly used for passing data to and from a web server.
                  When receiving the data from a web server, the data is always
                  a string. Parse the data with JSON.parse(), then the data
                  becomes a JS object.
                  <br />
                  <br />
                  Notice below where var obj is pulling in JSON data, because
                  '.parse' is converting it into a usable object. <br />
                  <Image src={js1} fluid />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_json_parse.asp </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Stringify
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>JSON Stringify</Card.Title>
                <Card.Text>
                  {""}
                  JSON.stringify is a little different. Here it will convert an
                  object into a string. Below we can see that obj has three
                  values that are all objects. Once we use JSON.stringify(obj)
                  it receives the objects and converts them in the same order
                  but back as JSON in strings.
                  <br />
                  <br />
                  <Image src={str1} fluid />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source: https://www.w3schools.com/js/js_json_stringify.asp
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

export default Week3;
