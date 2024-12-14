import styles from './page.module.css';

import { EVENT_ITEM } from '../events-item';

interface Params{
    id: string;
}


// params: get dynamic URL as an id
// Manually specify type of params.id
export default function EventDetailPage({params} : {params: Params}){
    const eventId = params.id;
    const eventItem = EVENT_ITEM.find((eventItem) => eventItem.slug === eventId);

    // prevent 'eventItem' is possibly 'undefined' error
    if(!eventItem){
        return <p>Event not found</p>;
    }

    return(
        <article className={styles['event-container']}>
            <h1>{eventItem.title}</h1>
            <img className={styles['event-pic']} src={`/event_images/${eventItem.image}`} alt={eventItem.title} />
            <time dateTime={eventItem.date}><p>{eventItem.date}</p></time>
            <p>{eventItem.content}</p>
        </article>
    )
}