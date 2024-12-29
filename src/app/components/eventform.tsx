'use client';

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
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Event Title" required />
      <input
        type="file"
        name="image"
        placeholder="Event Image"
        accept="image/png, image/jpg, image/jpeg"
        required
      />
      <input type="text" name="slug" placeholder="Event Slug" required />
      <input type="date" name="date" placeholder="Event Date" required />
      <textarea name="details" placeholder="Event Details" required />
      <button type="submit">Submit</button>

      {status === "success" && <p>Event submitted successfully!</p>}
      {status === "error" && <p>Failed to submit event. Please try again.</p>}
    </form>
  );
}
