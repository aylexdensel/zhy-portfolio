import React, { useState } from 'react';
import { sendContactForm } from '../../../services/contactService';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitResult({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    const result = await sendContactForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitResult({ type: 'success', text: '✓ Sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitResult({ type: 'error', text: 'Failed to send.' });
    }
  };

  const isFormActive = isInteracting || formData.name || formData.email || formData.message;

  return (
    <div className={`${styles.card} ${isFormActive ? styles.cardExpanded : ''}`}>
      {/* Top Right Mail Icon */}
      <div className={styles.mail}>
        <svg
          strokeJoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx="2" y="4" x="2" height="16" width="20"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </div>

      {/* Background Portrait Photo */}
      <div className={styles.profilePic}>
        <img 
          src="/assets/1.png" 
          alt="Ailex Denzel Estrada portrait" 
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
          }}
        />
      </div>

      {/* Centered101 Expandable Bottom Panel */}
      <div className={styles.bottom}>
        <div className={styles.content}>
          <span className={styles.name}>Send a Message</span>

          {/* Clean 3-Field Contact Form */}
          <form 
            className={styles.formFields} 
            onSubmit={handleSubmit}
            onFocus={() => setIsInteracting(true)}
            onBlur={() => setIsInteracting(false)}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={styles.input}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={styles.textarea}
              required
            />

            {submitResult && (
              <span className={submitResult.type === 'success' ? styles.successText : styles.errorText}>
                {submitResult.text}
              </span>
            )}

            <button type="submit" className={styles.button}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}