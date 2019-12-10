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
import dom1 from "./dom1.jpg";
import dom2 from "./dom1.1.jpg";
import child1 from "./child1.jpg";
import before1 from "./before1.jpg";
import remove1 from "./remove1.jpg";

class Week6 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 6: DOM</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              DOM{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>DOM: Manipulation using createElement</Card.Title>
                <Card.Text>
                  {""}
                  As seen in the image below tagName is used as the element to
                  be created. Using the createElement() converts tagName to
                  lower case before creating the element.
                  <br />
                  <br />
                  <Image src={dom1} />
                  <br />
                  <br />
                  Below we can see that 'p' element with some text, used
                  innerText to set the text, and append it to the document: An
                  element object, which represents the created element node is
                  the return value.
                  <Image src={dom2} />
                  <br />
                  <br />
                  <br />
                  <i>
                    {" "}
                    Source:
                    https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
                    ,
                    https://www.w3schools.com/jsref/met_document_createelement.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              appendChild
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>appendChild</Card.Title>
                <Card.Text>
                  {""}
                  <br />
                  <br />
                  AppendChild() is a method that appends a node as the last
                  child of a node. Appending a paragraph would look like you
                  created a new paragraph, with tex, create text as a text node
                  which appends to the paragraph. You can also use it to move an
                  element from one element to another.
                  <br />
                  <Image src={child1} />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://www.w3schools.com/jsref/met_node_appendchild.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              insertBefore()
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>insertBefore()</Card.Title>
                <Card.Text>
                  {""}
                  <br />
                  Here we learn that the insertBefore() method inserts a node as
                  a child, right before an existing child, which you specify.
                  Creating a new list item, with text, remember to create the
                  text as a text node which you append to the li element, then
                  insert li to the list. You can use insertBefore() method to
                  insert or move an existing elements.
                  <br />
                  <Image src={before1} />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://www.w3schools.com/jsref/met_node_insertbefore.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              removeChild
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Card.Title>removeChild()</Card.Title>
                <Card.Text>
                  {""}
                  <br />
                  Here we learn the removeChild() method removes a specified
                  child node of the specified element. Returns the removed node
                  as a Node object, or null if the node does not exist. !!Looks
                  like removeChild is no longer part of the DOM. But as seen
                  below the first in the array list is Coffee, once the child
                  was removed for the index of 0, Coffee was removed when it was
                  outputed.
                  <br />
                  <Image src={remove1} />
                  <br />
                  <br />
                  <br />
                  <i>
                    Source:
                    https://www.w3schools.com/jsref/met_node_removechild.asp{" "}
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

export default Week6;
