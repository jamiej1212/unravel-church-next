import EventList from '../components/eventlist';
import styles from './page.module.css';

export default function EventPage() {
  return (
    <div className={styles.container}>
      <EventList />
    </div>
  );
}
