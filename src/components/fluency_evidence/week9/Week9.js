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
import scratch1 from "./scratch1.jpg";

class Week9 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 9: Design, Define, and Trigger CSS3</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Transitions without custom libraries
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>Transitions without custom libraries</Card.Title>
                <Card.Text>
                  {""}
                  <a href="https://codepen.io/pen/?&editable=true">
                    Here we can see how this animation can be done without
                    triggering custom libraries.{" "}
                  </a>
                  <br />
                  Much of what will happen in doing it without an library is
                  understanding that the x,y values play a huge role in creating
                  a situation of transitioning and triggering libraries.
                  <br />
                  <Image src={scratch1} />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions{" "}
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

export default Week9;
