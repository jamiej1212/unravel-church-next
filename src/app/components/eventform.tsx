'use client';

import styles from './eventform.module.css';

import { useState, FormEvent } from "react";
import { addEvents } from "../actions/addevents";

export default function EventForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setStatus("idle");
    try {
      const result = await addEvents(formData);
      console.log('Result from addEvents:', result);
      
      if (result.status) {
        setStatus("success");
        e.currentTarget.reset();
      } 
    } catch(error) {
        if(!error) {
        console.error("Upload failed: ", error);
        setStatus("error");
        }
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label id="title">Enter the event title</label>
      <input type="text" name="title" placeholder="Test Event" required />
      <br/>
      <label id="image">Select the event photo</label>
      <input
        type="file"
        name="image"
        placeholder="Event Image"
        accept="image/png, image/jpg, image/jpeg"
        required
      />
      <br/>
      <label id="slug">Enter a name to be used in the event URL.<br/>
            Whitespace should be replaced with a hyphen.
      </label>
      <input type="text" name="slug" placeholder="test-event" required />
      <br/>
      <label id="date">Select the event date</label>
      <input type="date" name="date" placeholder="Event Date" required />
      <br/>
      <label id="details">Enter the event</label>
      <textarea name="details" placeholder="This is a test event" required />
      <br/>
      <button type="submit">Submit</button>

      {status === "success" && <p>Event submitted successfully!</p>}
      {status === "error" && <p>Failed to submit event. Please try again.</p>}
    </form>
  );
}
