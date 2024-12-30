'use client';
import { useEffect, useState } from 'react';
import { getEvents } from "../actions/getevents"; // Get event list
import { deleteEvent } from "../actions/deleteevents"; // Get event delete
import DeleteEventButton from "../components/deleteeventbutton";
import EventForm from '../components/eventform';
import styles from './page.module.css';
import Banner from '../components/banner';

type Event = {
  id: number;
  title: string;
  image: string;
  slug: string;
  date: string;
  details: string;
};

export default function AdminPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await getEvents();

      if (result.status && result.data) {
        setEvents(result.data);
      } else {
        console.error("Failed to fetch events:", result.error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (deletedEventId: number) => {
    const result = await deleteEvent(deletedEventId);

    if (result.status) {
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deletedEventId));
    } else {
      console.error(result.error);
    }
  };

  return (
    <>
      <Banner prop="ADMIN" />
      <div className={styles.container}>
        <h2>Set Event</h2>
        <EventForm />
        <h2>Delete Event</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <DeleteEventButton
                eventId={event.id}
                onDelete={() => handleDeleteEvent(event.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}
