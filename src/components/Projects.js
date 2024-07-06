import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SnowBuddy",
      description: "A comprehensive web application designed to bring all essential information about Canadian ski resorts into one accessible platform",
      imgUrl: projImg4,
      projectUrl: "https://github.com/Celinezzzzz/SnowBuddy",
    },
    {
      title: "InStock",
      description: "An Inventory Management System designed for efficient tracking and management of stock levels. It features full CRUD capabilities, ensuring complete control over inventory data.",
      imgUrl: projImg5,
      projectUrl: "https://github.com/Celinezzzzz/instock",
    },
    {
      title: "Industry Project: BrainStation x Kijiji",
      description: "Led the team clinched 1st place in a 24-hour Hackathon presented by BrainStation and Kijiji Canada.Our innovative approach led us to design and present a suite of five new features aimed at enhancing user interactions and fostering a vibrant community on the Kijiji platform.",
      imgUrl: projImg6,
      projectUrl: "https://www.linkedin.com/posts/zhouceline_brainstation-x-kijiji-industry-project-presentation-activity-7195846956827463681-_g3q?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Specialized in web development and machine learning. Demonstrated ability to collaborate effectively in a distrubuted environment, tackling challenges in machine learning model development and web-application development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
