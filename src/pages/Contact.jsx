import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'; // Don't forget to import your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hi1jqm3',
        'template_fzrnqj4',
        e.target,
        'iOfSkXjePBk2Bw6Pv'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <Container className="contact-section py-5">
      <h2 className="contact-title text-center mb-4">Contact Me</h2>
      {status && (
        <Alert
          variant={status.includes('success') ? 'success' : 'danger'}
          className="contact-alert"
        >
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className="contact-form mx-auto">
        <Form.Group controlId="name">
          <Form.Label className="contact-label">Your Name</Form.Label>
          <Form.Control
            className="contact-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label className="contact-label">Email Address</Form.Label>
          <Form.Control
            className="contact-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="message" className="mt-3">
          <Form.Label className="contact-label">Your Message</Form.Label>
          <Form.Control
            className="contact-textarea"
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="contact-btn mt-4">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
