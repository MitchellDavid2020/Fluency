/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import A1Image from "./Array1.png";
import A2Image from "./Array2.png";
import con1 from "./con1.jpg";
import con2 from "./con2.jpg";
import loop1 from "./loop1.jpg";
import loop2 from "./loop2.jpg";
import function1 from "./function1.jpg";

class Week1 extends React.Component {
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
                <Image src={A1Image} fluid />

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
                <Image src={A2Image} fluid />
                <Card.Text>
                  <br />
                  You can also change an item in the array by declaring <br />
                  <b>var soda[0] = "Fresca"</b> with the result of{" "}
                  <i>...["Fresca", "Rootbeer", "Sprite"]</i>.
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_arrays.asp</i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Conditional Statements
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title> Conditional Statements</Card.Title>
                <Card.Text>
                  {""}
                  In order to control actions that are being triggered in code,
                  you have to declare conditional statements. The following are
                  a few main conditional statements you can use in javascript:{" "}
                  <br />
                  <br />
                  <li>
                    <b>IF</b>: this condition will be executed if the condition
                    is true.
                  </li>
                  <br />
                  <Image src={con1} fluid />
                  <li>
                    <b>
                      ELSE: this condition will be executed if the same
                      condition is true.
                    </b>
                  </li>
                  <br />
                  <li>
                    <b>ELSE IF</b>: this new condition will be executed in order
                    to test if the first condition is false.
                  </li>
                  <br />
                  <Image src={con2} fluid />
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_arrays.asp</i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Loops
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>FOR and While Loops</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                  Loops are used when it is needed to run through the same code
                  multiple times at once, and each time a new value is being
                  used. <br />
                  <br />
                  <b>FOR</b> loops will run through a block of code a number of
                  time depending on the conditional statement inside. As seen
                  below the first statement inside declares i with the value of
                  0. The second statement is the deciding factor if the loop
                  should end or continue looping. The 3rd statement is used to
                  increment the i variable by 1, so the next time the loop is
                  back to the second statement it will have a new value to
                  decide with. <br /> <br />
                  Example: <br />
                  <Image src={loop1} fluid />
                  <br /> This would return the value of "Fish".
                  <br />
                  <br />
                  <b>WHILE</b> loops will loop through a code as long it is
                  true. The statement inside the parenthesis is the condition to
                  decide if the loop is ran another time. Once the condition is
                  false, then the program will exit the loop. <br />
                  <br />
                  For example: <br />
                  <Image src={loop2} fluid />
                  <br /> This would exit the while loop with a value of "6".
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_arrays.asp</i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Functions
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Card.Title>Javascript Functions</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                  Javascript functions are blocks of code designed to return a
                  value from running a specific task. Code outside of a function
                  will call a function and provide variables or values to pass
                  in to return a new value from that function. <br />
                  <br />
                  <b>Example:</b> <br />
                  <Image src={function1} fluid />
                  <br />
                  <br />
                  The function above has a unique name next to it with
                  parentheses on the end. These parentheses contain the values
                  that are being passed in. Once the values are inside of the
                  function they are acting as if they are local variables to
                  this function being called. Inside this function will contain
                  blocks of code to use with the values that are being being
                  used in the parentheses. <br /> <br />
                  <br />
                  <br /> The output above would return the value of 30.
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_functions.asp</i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

export default Week1;
