import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mindMendImage from "../../Assets/projects/mindmend.png";
import ticketingImage from "../../Assets/projects/ticketing.png";
import marketingImage from "../../Assets/projects/mindmend.png";
import studentManagementImage from "../../Assets/projects/python.jpeg";
import journeyXImage from "../../Assets/projects/tour.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* MindMend Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindMendImage}
              isBlog={false}
              title="MindMend (Ongoing)"
              description="MindMend is an AI-powered mobile application that supports children with autism. It offers personalized therapy sessions and autism severity assessments. The app allows caretakers to assess the child's condition, access AI-driven therapy activities, and book online or in-person therapy sessions for effective support."
              ghLink="https://github.com/RamaRagu/Mindmend74"
            />
          </Col>

          {/* Real-Time Ticketing System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketingImage}
              isBlog={false}
              title="Real-Time Ticketing System"
              description="A high-performance online ticket booking platform designed to manage concurrent ticket reservations. This system ensures real-time availability updates, priority-based ticket allocation (VIP/Regular customers), and secure transaction handling. Built using Spring Boot backend with PostgreSQL and React frontend for seamless booking and management."
              frontendLink="https://github.com/RamaRagu/RealTimeTicketing_Frontend"
              backendLink="https://github.com/RamaRagu/RealTimeTicketing_Backend"
              demoLink="https://realtime-ticketing-system.com"
            />
          </Col>

          {/* MindMend74 Marketing Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketingImage}
              isBlog={false}
              title="MindMend74 Marketing Website"
              description="A marketing website designed to showcase MindMend's features, benefits, and overall impact. It uses React with Vite for a smooth and fast-loading user experience, helping to promote the MindMend app effectively."
              ghLink="https://mindmend74.COM"
            />
          </Col>

          {/* Student Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentManagementImage}
              isBlog={false}
              title="Student Management System"
              description="A Python-based system to track and manage student progression. The system classifies students into different categories (Progress, Trailer, Retriever, Excluded) based on their credit distribution, with built-in data validation and graphical representations (histograms) of student performance."
              ghLink="https://github.com/rama-raguram/Student-Management-System"
            />
          </Col>

          {/* JourneyX - Tour Guidance */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journeyXImage}
              isBlog={false}
              title="JourneyX - Tour Guidance"
              description="A travel application inspired by TripAdvisor, offering travel recommendations, itineraries, and more. Built with HTML, CSS, JavaScript, and Figma for prototyping, the app demonstrates user experience (UX) design and front-end development skills."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
