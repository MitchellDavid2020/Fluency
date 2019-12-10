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
import A1Image from "./Array1.png";
import A2Image from "./Array2.png";

class Week7 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 1: JavaScript</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Arrays
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>Arrays</Card.Title>
                <Card.Text>
                  {""}
                  Arrays are basically special variables that can hold more than
                  one value at any time. This becomes useful for when you have
                  many similar variables that contain similar values.
                  <br />
                  <br />
                  For example instead of declaring a list of favorite soda
                  drinks like this: <br />
                  <br />
                  var soda1 = "Diet Coke"; <br />
                  var soda2 = "Rootbeer"; <br />
                  var soda3 = "Sprite"; <br />
                  <br />
                  You would instead display it like this:
                </Card.Text>
                <Image src={A1Image} />

                <Card.Title>
                  <br />
                  How to access items in the array
                  <br />
                </Card.Title>
                <Card.Text>
                  <br />
                  In order to select an item in the array you must display it in
                  brackets <b>soda[0]</b> with the value index number.
                  <br />
                  <br />
                  For example: <br />
                </Card.Text>
                <Image src={A2Image} />
                <Card.Text>
                  <br />
                  You can also change an item in the array by declaring <br />
                  <b>var soda[0] = "Fresca"</b> with the result of{" "}
                  <i>...["Fresca", "Rootbeer", "Sprite"]</i>.
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Conditional Statements
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Loops
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Functions
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Arrays
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Arrays
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

export default Week7;
