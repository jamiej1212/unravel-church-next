// src/app/components/DeleteEventButton.tsx
'use client';

import { useState } from 'react';
import { deleteEvent } from '../actions/deleteevents'; // import deleteEvent
import styles from './delete.module.css';

interface DeleteEventButtonProps {
  eventId: number; // ID of the event to be deleted
  onDelete: () => void; // Handle after deletion
}

export default function DeleteEventButton({ eventId, onDelete }: DeleteEventButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    const result = await deleteEvent(eventId); // call delete function

    if (result.status) {
      onDelete(); // Notify the parent after deletion
    } else {
      setError(result.error || 'Failed to delete event');
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
