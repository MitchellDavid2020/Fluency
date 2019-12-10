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
import get1 from "./get1.jpg";

class Week4 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 4: AJAX</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Requesting a JSON file
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>AJAX Requesting a JSON file</Card.Title>
                <Card.Text>
                  {""}
                  Sending a request to a server, we will be using the open() and
                  send() methods of the XMLHttpRequest object: <br />
                  <br />
                  xhttp.open("GET", "ajax_data.txt", true);
                  <br />
                  xhttp.send();
                  <br />
                  Using this with a loadDoc function as seen below will return a
                  response when it was requested. These are very useful when
                  working with POSTMAN and hitting endpoints.
                  <br />
                  <Image src={get1} />
                  <br />
                  <br />
                  Same can be done with the POST method. GET is mostly used
                  because it is simple and faster. Post can be used in most
                  cases. But we should always use post when needing to do the
                  following:
                  <ul>
                    <li>
                      When a cached file is not an option(updating a file on a
                      database for example).
                    </li>
                    <li>Sending a large amount of data to the server.</li>
                    <li>
                      Sending a user input (Which can containt unknown
                      characters), POST is more robust and secure than GET.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <i>
                    Source: https://www.w3schools.com/js/js_ajax_http_send.asp{" "}
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

export default Week4;
