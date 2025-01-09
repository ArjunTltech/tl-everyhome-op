import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const Formfeild = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    
    // Show loading toast
    const loadingToast = toast.loading('Sending message...');

    try {
      const response = await fetch('/api/connectform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success toast
      toast.success('Message sent successfully!', {
        id: loadingToast,
        duration: 3000
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Error toast
      toast.error(error.message || 'Failed to send message. Please try again.', {
        id: loadingToast,
        duration: 4000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 position-relative">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            isInvalid={!!errors.name}
            style={{ 
              padding: '0.8rem', 
              borderRadius: '8px'
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4 position-relative">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            isInvalid={!!errors.email}
            style={{ 
              padding: '0.8rem', 
              borderRadius: '8px'
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4 position-relative">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            isInvalid={!!errors.subject}
            style={{ 
              padding: '0.8rem', 
              borderRadius: '8px'
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4 position-relative">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            isInvalid={!!errors.message}
            style={{ 
              padding: '0.8rem', 
              borderRadius: '8px',
              minHeight: '150px'
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          variant="primary"
          type="submit"
          className="w-100 py-3 d-flex align-items-center justify-content-center gap-2"
          disabled={loading}
          style={{ 
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          {loading ? (
            'Sending Message...'
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Formfeild;