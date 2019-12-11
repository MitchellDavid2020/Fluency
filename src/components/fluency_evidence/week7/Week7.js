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
import css1 from "./css1.jpg";
import css2 from "./css2.jpg";
import mobile1 from "./mobile1.jpg";

class Week7 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 7: Manipulating CSS Class Properties Using JavaScript</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Manipulating CSS class properties using javascript
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>
                  Manipulating CSS class properties using javascript
                </Card.Title>
                <Card.Text>
                  {""}
                  Manipulating CSS through javascript can be simple by calling a
                  function changeBGColor() as seen below. Once this function is
                  called, it can be used to change columns and the background
                  color to the color of Blue.
                  <br />
                  <br />
                  <Image src={css1} fluid />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://stackoverflow.com/questions/19353331/getting-or-changing-css-class-property-with-javascript-using-dom-style
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Creating CSS3 Transitions and Animations in CSS and triggering
              them with JavaScript
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>
                  CSS3: Creating transitions and animations with javascript
                </Card.Title>
                <Card.Text>
                  {""}
                  One example below shows you can transition a color of text
                  from calling for an element to change onclick to the color
                  red. Doing so below changes the heading to red.
                  <br />
                  <br />
                  <Image src={css2} fluid />
                  <br />
                  <br />
                  Below we see a function being called to animate an object from
                  top left to the bottom right. Doing so will display an
                  animation that will be seen only once. Example shown here:
                  <a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3">
                    Animation example from code screenshot below
                  </a>
                  <Image src={css2} fluid />
                  <br />
                  <br />
                  A
                  <br />
                  <i>
                    Source: https://www.w3schools.com/js/js_json_stringify.asp
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Standard JavaScript Events including those for mobile devices and
              animation and transition events
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>
                  JavaScript events for devices using animation and transitions.
                  Standards
                </Card.Title>
                <Card.Text>
                  {""}
                  Animating with CSS is simple when using something like moving
                  objects on the screen. Declarative is the best approach
                  because you specify what you'd like to happen. The below code
                  is CSS that moves an element 100px in both the X and Y axes,
                  back and forth. Tthe CSS transition that's set to take 500ms.
                  When the move class is added, the transform value is changed
                  and the transition begins. .
                  <br />
                  <br />
                  <Image src={mobile1} fluid />
                  <a href="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/animations/box-move-simple.html">
                    Try it out
                  </a>
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript,
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

export default Week7;
