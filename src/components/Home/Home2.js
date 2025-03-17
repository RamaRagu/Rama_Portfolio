import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Rama.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Rama Raguram, a passionate{" "}
              <b className="purple"> Computer Science student </b> with a love
              for building innovative solutions that make an impact. I
              specialize in{" "}
              <b className="purple"> AI, Full Stack Development,</b>
              and <b className="purple">Quality Assurance (QA),</b> always
              seeking to improve and create scalable, efficient systems. 🚀
              <br />
              <br />
              I'm skilled in{" "}
              <b className="purple">JavaScript, React, Python,</b> and have a
              deep interest in areas like
              <i>
                <b className="purple">
                  {" "}
                  Mobile App Development with React Native{" "}
                </b>
              </i>
              <br />
              <br />I enjoy developing full-stack applications using
              <b className="purple"> Node.js </b> for backend and
              <i>
                <b className="purple"> React.js </b>
              </i>
              for frontend. I also focus on delivering high-quality products
              with
              <i>
                <b className="purple">
                  {" "}
                  automated testing and QA best practices.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RamaRagu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rama-raguram-2763a9292/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rama_ragu28/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
