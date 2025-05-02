// src/components/Services.jsx

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Lottie from 'lottie-react';
import './Services.css';

import webAnimation from '../assets/web-3d.json';
import mobileAnimation from '../assets/mobile-3d.json';
import designAnimation from '../assets/design-3d.json';

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites with the latest technologies.",
      animation: webAnimation,
    },
    {
      title: "Mobile App Development",
      description: "Creating mobile applications for both Android and iOS with Flutter.",
      animation: mobileAnimation,
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and enhancing user experience.",
      animation: designAnimation,
    },
  ];

  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="services-title text-center mb-5">My Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="d-flex">
              <Card className="service-card flex-fill text-center shadow-sm border-0">
                <div className="service-icon mx-auto mt-4">
                  <Lottie animationData={service.animation} loop={true} />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.description}</Card.Text>
                  <Button className="learn-more-btn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
