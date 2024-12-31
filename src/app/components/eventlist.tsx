'use client';

import { useEffect, useState } from 'react';
import { getEvents } from '../actions/getevents';
import Link from 'next/link';
import styles from './eventlist.module.css';

type Event = {
  id: number;
  title: string;
  image: string;
  slug: string;
  date: string;
  details: string;
};

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await getEvents();

      console.log('API result:', result);

      if (result.status) {
        if (result.data) {
          setEvents(result.data); // Set event list
        } else {
          setError('No events found.');
        }
      } else {
        setError(result.error || 'Failed to load events');
      }
    };

    fetchEvents();
    console.log('DB_HOST:', process.env.NEXT_PUBLIC_DB_HOST_END_POINT);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Event List</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Link href={`/eventpage/${event.slug}`}>
                <h2>{event.title}</h2>
                <img
                  src={event.image || '/default-image.png'} // 이미지가 없으면 기본 이미지 사용
                  alt={event.title}
                  width={100}
                />
                <p>{event.details || 'No details available'}</p> {/* 세부 정보가 없으면 기본 텍스트 */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
