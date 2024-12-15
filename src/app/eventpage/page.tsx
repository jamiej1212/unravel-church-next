import Link from 'next/link';

import styles from './page.module.css';

import { EVENT_ITEM } from './events-item';

export default function EventPage(){
    return(
        <div className={styles['event-page']}>
            <h3 className={styles['event-page-title']}>UPCOMING EVENTS</h3>
            <div className={styles['event-container']}>
                {EVENT_ITEM.map(eventItem => (<div className={styles['event-items']} key={eventItem.id}>
                    <Link className={styles['event-details']} href={`/eventpage/${eventItem.slug}`}>
                        <img className={styles['event-pic']} src={`/event_images/${eventItem.image}`} alt={eventItem.title}/>
                        <p>{eventItem.title}</p>
                        <p>{eventItem.content}</p>
                        
                    </Link>
                </div>))}
                
            </div>
        </div>
    );
}