'use client';
import styles from './ContactForm.module.css';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xwkdplaa');

  return (
    <form className={styles.contact__form} onSubmit={handleSubmit}>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        required
      ></input>
      <ValidationError prefix="name" field="name" errors={state.errors} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        required
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        rows={12}
        spellCheck="true"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        {state.succeeded ? 'Merci !' : 'ENVOYER'}
      </button>
    </form>
  );
}
