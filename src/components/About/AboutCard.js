import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rama Raguram</span>
            from <span className="purple"> Colombo, SriLanka.</span>
            <br />
            I am currently Completed my 2nd year in BSc in Computer Science at
            University of Westminster - IIT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}> </p>"Build. Innovate. Leave
          a mark. 🚀"
          <br />
          <br />
          <footer className="blockquote-footer"> Rama Raguram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
