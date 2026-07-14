"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd107e643-e692-4fee-904e-a90c58c62007',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: 'Fuzail Ahmad Portfolio'
        }),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <div className={styles.contactWrapper}>
          <div className={styles.info}>
            <h3>Ready to transform your business?</h3>
            <p>Whether you need strategic advice, process optimization, or a complete digital overhaul, I am here to help. Reach out today to start the conversation.</p>
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.contactSvg}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Global Consultant</span>
              </div>
              <div className={styles.detailItem}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.contactSvg}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:officialfuzailahmad@gmail.com" className={styles.emailLink}>officialfuzailahmad@gmail.com</a>
              </div>
            </div>
          </div>
          <form className={`${styles.form} glass`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn" disabled={status === 'submitting'} style={{ width: '100%' }}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.error}>Something went wrong. Please try again later.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
