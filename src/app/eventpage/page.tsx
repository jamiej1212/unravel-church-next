import Link from 'next/link';

export default function EventPage(){
    return(
        <>
            <h1>Event Page</h1>
            <ul>
                <li>
                    <Link href="/eventpage/first-event">First Event</Link>
                </li>
                <li>
                    <Link href="/eventpage/second-event">Second Event</Link>
                </li>
                <li>
                    <Link href="/eventpage/third-event">Third Event</Link>
                </li>
            </ul>
        </>
    );
}