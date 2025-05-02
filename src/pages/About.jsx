import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <div className="about-wrapper py-5">
      <Container className="about-container">
        {/* 🎥 Video Background */}
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src="/assets/4K_52.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🧾 Content Above Video */}
        <div className="about-content">
          <div className="about-heading-bg text-center mb-4">
            <h2>About Me</h2>
          </div>

          <Row className="justify-content-center">
            <Col md={10} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <h4>Bio</h4>
                  <p>
                    I'm a passionate web developer and designer with experience in
                    creating scalable and responsive applications. My journey
                    started with web development, and now I'm exploring ui/ux as well.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={10} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <h4>Education</h4>
                  <p>Bachelor's in Computer Science</p>
                  <p>Esoft Metro Campus (Kingston University) | Jan 2024 – Jan 2025</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;
