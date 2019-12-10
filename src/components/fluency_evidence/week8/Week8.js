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
import vid1 from "./vid1.jpg";
import aud1 from "./aud1.jpg";
import can1 from "./can1.jpg";
import can2 from "./can2.jpg";

class Week8 extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2> Week 8: HTML5 Tags</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              HTML5 Tags: Video
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Title>HTML5 Tags: Video</Card.Title>
                <Card.Text>
                  {""}
                  Before html5 we had to sue flash to play videos. But now HTML5
                  gets rid of the old and in with the new in using the video
                  html tags in our elements as a standard way of embedding
                  videos into pages. Height and Width are always a good idea to
                  include incase the page or device can't handle the size of the
                  video. Also auto play is an option to pull in the user into
                  the site or app as they visit the application. Like seen here:{" "}
                  <br />
                  <br />
                  <br />
                  <Image src={vid1} />
                  <br />
                  <br />
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xos2MnVxe-c"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <br />
                  <br />
                  <br />
                  <i>
                    Source: https://www.youtube.com/watch?v=xos2MnVxe-c ,
                    https://www.w3schools.com/html/html5_video.asp{" "}
                  </i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              HTML5 Tags: Audio
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Title>HTML5 Tags: Audio</Card.Title>
                <Card.Text>
                  {""}
                  Here we see audio html tag being used. Audio files can only be
                  played in a browser with a plugin, with html5 a standard is
                  created to use this audio tag. <br />
                  <br />
                  <br />
                  <Image src={aud1} />
                  <br />
                  Above we see that the audio tag is being called with controls.
                  Along with this the type format is declared. Audio can also be
                  autoplayed on the website/application.
                  <br />
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xos2MnVxe-c"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <br />
                  <br />
                  <br />
                  <i>https://www.w3schools.com/html/html5_audio.asp </i>
                </Card.Text>
              </Card.Body>{" "}
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              HTML5 Tags: Canvas
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Title>HTML5 Tags: Canvas</Card.Title>
                <Card.Text>
                  {""}
                  Canvas element is used to draw graphics on the fly with
                  JavaScript. The canvas element is only a container for
                  graphics. You must use JavaScript to draw the graphics. :{" "}
                  <br />
                  <br />
                  <br />
                  <Image src={can1} />
                  <br />
                  <br />
                  Above we see that a square is drawn on the page as seen here:{" "}
                  <br />
                  <br />
                  <Image src={can2} />
                  <br />
                  <br />
                  <i>
                    Source: https://www.youtube.com/watch?v=xos2MnVxe-c ,
                    https://www.w3schools.com/html/html5_video.asp{" "}
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

export default Week8;
