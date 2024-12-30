'use server';

import database from '../lib/db';

// delete event using id
export async function deleteEvent(id: number) {
  try {
    // start query
    const [result] = await database.execute(
      "DELETE FROM events WHERE id = ?",
      [id]
    );

    const affectedRows = (result as { affectedRows: number }).affectedRows;

    // if there's no deleted record, return error 
    if (affectedRows === 0) {
      return {
        status: false,
        error: 'Event not found',
      };
    }

    return {
      status: true,
      message: 'Event deleted successfully',
    };
  } catch (err) {
    console.error('Error deleting event:', err);
    return {
      status: false,
      error: 'Failed to delete event',
    };
  }
}
