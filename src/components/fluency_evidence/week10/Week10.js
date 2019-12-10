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
import xml1 from "./xml1.jpg";
import xml2 from "./xml2.jpg";
import xml3 from "./xml3.jpg";

class Week10 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 10: Using XMLHTTPRequest to Consume a JSON Web Service</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Using XMLHTTPRequest to Consume a JSON Web Service
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>XMLHttpRequest Objects</Card.Title>
                <Card.Text>
                  {""}
                  Today all browsers are using XMLHttpRequest objects. They can
                  be used to exchange data with a web server behind the scenes.
                  This makes it so you can update the page without having to
                  reload the page. <br />
                  <br /> This can be seen below:
                  <br />
                  <br />
                  <Image src={xml1} />
                  <Image src={xml2} />
                  <Image src={xml3} />
                  <br />
                  <br />
                  <br />
                  <i>Source: https://www.w3schools.com/js/js_ajax_http.asp </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

export default Week10;
