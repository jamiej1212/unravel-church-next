'use client';

import { useEffect, useState } from 'react';
import { getEventBySlug } from '../actions/getevents';
import styles from './eventdetails.module.css';

type Event = {
  id: number;
  title: string;
  image: string;
  slug: string;
  date: string | Date; // data can be string or Data
  details: string;
};

interface Props {
  params: { slug: string }; // the slug parameter extracted from the page URL
}

export default function EventDetail({ params }: Props) {
  const [event, setEvent] = useState<Event | null>(null); // event: Event or null
  const [error, setError] = useState<string | null>(null); // error: string or null
  const [deleteStatus, setDeleteStatus] = useState<string | null>(null); // status: deleted

  const { slug } = params;

  useEffect(() => {
    if (slug) {
      const fetchEvent = async () => {
        const result = await getEventBySlug(slug); // find event using slug

        if (result.status) {
          if (result.data) {
            setEvent(result.data); // set Event object
          } else {
            setError('Event not found');
          }
        } else {
          setError(result.error || 'Failed to fetch event');
        }
      };

      fetchEvent();
    }
  }, [slug]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (deleteStatus) {
    return <div>{deleteStatus}</div>;
  }

  if (!event) {
    return <div>Loading...</div>;
  }

  // handle the case when `event.date` is a Date object
  const formattedDate = new Date(event.date).toLocaleDateString(); // Convert the date to the locale format

  return (
    <div className={styles.container}>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} width={500} />
      <p>{event.details}</p>
      <p>{formattedDate}</p> {/* Display the converted date */}
    </div>
  );
}
