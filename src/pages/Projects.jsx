import { Container, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';

import project1Img from '../assets/weather.jpg';
import project2Img from '../assets/kitchen.jpg';
import project3Img from '../assets/cake.jpg';

function Projects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'I have created a weather app using react',
      link: 'https://stupendous-seahorse-3b67ca.netlify.app/',
      image: project1Img,
    },
    {
      title: 'Restaurant UI/UX',
      description: 'This is a UI/UX design for a Restaurant.',
      link: 'https://dribbble.com/shots/25562330-EATCHAMPY-Landing-page',
      image: project2Img,
    },
    {
      title: 'Cake shop UI/UX',
      description: 'This is a UI/UX design for a cake shop.',
      link: 'https://dribbble.com/shots/25950846-Happy-cake-landing-page',
      image: project3Img,
    },
  ];

  return (
    <Container className="projects-section my-5">
      <h2 className="projects-title text-center mb-5">Projects</h2>
      <Carousel
        interval={null}
        indicators={false}
        className="project-carousel"
        nextLabel=""
        prevLabel=""
      >
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <Card className="project-card shadow">
                <Card.Img variant="top" src={project.image} className="project-image" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    className="project-btn"
                    href={project.link}
                    target="_blank"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Projects;
