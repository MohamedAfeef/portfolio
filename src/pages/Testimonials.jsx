import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Testimonials.css';

import project1Img from '../assets/man1.jpg';
import project2Img from '../assets/girl.jpg';
import project3Img from '../assets/man2.jpg';

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This was an amazing experience! Highly recommend.",
      photo: project1Img,
    },
    {
      name: "Jane Smith",
      feedback: "Fantastic work! Very professional and timely.",
      photo: project2Img,
    },
    {
      name: "Bob Johnson",
      feedback: "Absolutely loved the results. Great attention to detail!",
      photo: project3Img,
    },
  ];

  return (
    <Container className="testimonials-section my-5">
      <h2 className="testimonials-title text-center mb-5">What People Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
            <Card className="testimonial-card shadow-sm">
              <Card.Img variant="top" src={testimonial.photo} className="testimonial-img" />
              <Card.Body>
                <Card.Title className="testimonial-name">{testimonial.name}</Card.Title>
                <Card.Text className="testimonial-feedback">{testimonial.feedback}</Card.Text>
                <Button className="testimonial-btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
