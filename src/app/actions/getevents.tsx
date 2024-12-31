'use server';

import database from '../lib/db';

type Event = {
  id: number;
  title: string;
  image: string;
  slug: string;
  date: string;
  details: string;
};

// Get every events
export async function getEvents() {
  try {
    // The query result is of type RowDataPacket[]. It should be cast to Event[].
    const [rows] = await database.execute(
      "SELECT id, title, image, slug, date, details FROM events ORDER BY date DESC"
    );
    console.log('Rows from database:', rows);
    console.log('Rows:', rows);

    // Cast RowDataPacket[] to Event[] type
    const events = rows as Event[];

    if (events.length === 0) {
      return {
        status: false,
        error: 'No events found.',
      };
    }

    return {
      status: true,
      data: events,
    };
  } catch (err: unknown) {
    if(err instanceof Error)
    {
      console.error('Error fetching events:', err.message);
      return {
        status: false,
        error: 'Failed to fetch events',
      };
    }else{
      console.error('Unknown error: ', err)
      return{
        status: false,
        error: "Failed to fetch events due to an unknown error."
      }
    }
    
  }
}

// Fetch a specific event (by ID)
export async function getEventBySlug(slug: string) {
    try {
      // The query result is of type RowDataPacket[]. It should be cast to Event[].
      const [rows] = await database.execute(
        "SELECT id, title, image, slug, date, details FROM events WHERE slug = ?",
        [slug]
      );
      
      const events = rows as Event[];
  
      if (events.length === 0) {
        return {
          status: false,
          error: 'Event not found',
        };
      }
  
      return {
        status: true,
        data: events[0], // return the first event
      };
    } catch (err) {
      console.error('Error fetching event by slug:', err);
      return {
        status: false,
        error: 'Failed to fetch event',
      };
    }
  }
