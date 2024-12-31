'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './contactform.module.css';

// Define the types for the form elements
interface FormElements extends HTMLFormElement {
  from_name: HTMLInputElement;
  from_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const ContactForm = () => {
  const form = useRef<FormElements>(null); // `form` is nullable initially

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Using the non-null assertion operator to bypass null check
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_MAIL_SERVER_KEY as string,
          process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY as string,
          form.current,
          process.env.NEXT_PUBLIC_MAIL_USER_KEY as string
        )
        .then(() => {
          toast.success(
            'Your message has been sent successfully. I will get back to you shortly',
            {
              position: 'bottom-center',
              hideProgressBar: true,
              className: 'toast-message',
            }
          );
          form.current!.reset(); // The non-null assertion is safe now
        })
        .catch((error) => {
          if (error.response) {
            console.error('Response:', error.response);
          }
          if (error.message) {
            console.error('Error message:', error.message);
          }
          toast.error(
            'Failed to send the message. Please send a direct email using the address below.',
            {
              position: 'bottom-center',
              hideProgressBar: true,
              className: 'toast-message',
            }
          );
        });
    }
  };

  return (
    <>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <h2>Contact Us</h2>
        <label htmlFor="full-name">Full Name *</label>
        <input
          className={styles['input-field']}
          type="text"
          name="full-name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email-address">Email Address *</label>
        <input
          className={styles['input-field']}
          type="email"
          name="email-address"
          pattern="[^@]+@[^@]+\.[a-zA-Z0-9-.]+"
          placeholder="hello@gmail.com"
          required
        />

        <label htmlFor="phone-number">Phone Number</label>
        <input
          className={styles['input-field']}
          type="tel"
          name="phone-number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
        />

        <label htmlFor="message">Enter Message</label>
        <textarea
          name="message"
          placeholder="Enter Message"
          required
        />
        
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-message"
      />
    </>
  );
};

export default ContactForm;
