import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css'; // add this line for custom styling
import Lottie from 'lottie-react';
import mainSceneAnimation from '../assets/Main-Scene.json';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div className="hero-section py-5 text-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold custom-heading">Welcome to My Portfolio</h1>
            <p className="lead custom-typing-text">
              <Typewriter
                words={['I\'m a passionate Developer and Designer']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <div className="lottie-wrapper">
              <Lottie animationData={mainSceneAnimation} loop={true} />
            </div>
            <Link to="/projects">
              <Button className="custom-button" size="lg">View Projects</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
