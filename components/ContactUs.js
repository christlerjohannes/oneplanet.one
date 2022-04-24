import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Form.module.css'

export const ContactUs = () => {
  const form = useRef();
  const [disableButton, setDisasbleButton] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setDisasbleButton(true)

    emailjs.sendForm('service_u0emxmi', 'template_mtj07ac', form.current, 'CwHSxBgv6QMDgLyFA')
      .then((result) => {
        alert("Nachricht gesendet")
        setDisasbleButton(false)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="text" name="user_name" />
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" name="user_email" />
        <label className={styles.label}>Message</label>
        <textarea className={styles.textarea} lines="5" name="message" />

        <input disabled={disableButton} className={styles.button} type="submit" value="Senden" />
      </form>
  );
};