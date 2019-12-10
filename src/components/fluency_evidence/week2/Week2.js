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
import object1 from "./object1.jpg";
import object2 from "./object2.jpg";
import object3 from "./object3.jpg";
import inh1 from "./inh1.jpg";
import property1 from "./property1.jpg";
import method1 from "./method1.jpg";
import instant1 from "./instant1.png";

class Week2 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 2: Javascript Objects</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Object Creation Functions
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>Objects</Card.Title>
                <Card.Text>
                  {""}
                  Almost everything is an object in JavaScript:
                  <ul>
                    <li>Booleans</li>
                    <li>Numbers</li>
                    <li>Strings</li>
                    <li>Dates</li>
                    <li>Maths</li>
                    <li>Regular Expressions</li>
                    <li>Arrays</li>
                    <li>Functions</li>
                    <li>Objects</li>
                  </ul>
                  <br />
                  What can't be an object in JavaScript are <b>
                    primitives
                  </b>{" "}
                  <Card.Title>
                    Creating a Javascript Object with Functions
                  </Card.Title>
                  <br />
                  <br />
                  The following are ways you can create new objects: <br />
                  <ul>
                    <li>Using an Object Literal</li>{" "}
                  </ul>
                  <br />
                  When doing it this way, you are both defining and creating an
                  object in one statement. Names being paird up with values:
                  <br />
                  <Image src={object1} />
                  <ul>
                    <li>Using the JavaScript keyword new</li>
                  </ul>
                  The following shows that a new keyword can do with objects.
                  Var person is tied to new Object() then additional objects are
                  created as person.values. This way is more complicated to
                  read, but still an option:
                  <br />
                  <Image src={object2} />
                  <ul>
                    {" "}
                    <li>Javascript Objects are Mutable</li>
                  </ul>
                  Objects are mutable, they are called out by reference, not by
                  the value of the object. This shows the value from person
                  x.age is changed from 50 to 10:
                  <br />
                  <Image src={object3} />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://www.w3schools.com/js/js_object_definition.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Inheritance
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>Classes</Card.Title>
                <Card.Text>
                  {""}
                  With using inheritance we must learn about class definition.
                  Using a keyword class to create a class, requires us to use
                  the contructor() method. In order to get an object from a
                  class the contructor method is called each time.
                  <Card.Title>Inheritance</Card.Title>
                  <br />
                  <br />
                  To create class inheritance, we must use the extends keyword.
                  Classes with a class inheritance inherits all the methods from
                  another class: <br />
                  <br />
                  <Image src={inh1} />
                  <br />
                  Notice in this example the document calls mycar.show() which
                  is an object that calls model which it extends the car class.
                  Passing in the values it returns 'I have a Ford, it is a
                  Mustang.'
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_classes.asp </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Properties: Objects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>Javascript Object Properties</Card.Title>
                <Card.Text>
                  {""}
                  Properties that are associated with an object. Properties can
                  be changed, added, and deleted, but some are read only.
                  <br />
                  <br />
                  Notice the following below shows the syntax of what can be
                  used in changing values. Such as dog["collarName"] + " is " +
                  dog["age"] + " human years old.";
                  <br />
                  <Image src={property1} />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://www.w3schools.com/js/js_object_properties.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Methods
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Card.Title>JavaScript Methods</Card.Title>
                <Card.Text>
                  {""}
                  These are actions that can be performed by objects. Javascript
                  method is a property containing a function definition. Methods
                  are functions stored as object properties.
                  <br />
                  <br />
                  <br />
                  <Image src={method1} />
                  <br />
                  <br />
                  Notice above the method fullName() is assecced from the person
                  object.
                  <br />
                  <br />
                  <br />
                  <i>
                    Source: https://www.w3schools.com/js/js_object_methods.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Instantiation
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <Card.Title>Javascript Instantiation Patterns</Card.Title>
                <Card.Text>
                  {""}
                  One of the most basic of these patterns in the Functional
                  Instantiation pattern. Below we see an example where the
                  object is created within the function. All within the scope,
                  the keys and methods can be added to the object. Then at the
                  end the object is returned.
                  <br />
                  <br />
                  <Image src={instant1} />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
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

export default Week2;
