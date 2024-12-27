import Link from 'next/link';

import Banner from '../components/banner';

import styles from './page.module.css'

export default function OurCovering(){

    return(
        <>
            <Banner prop="Our Covering" />
            <div className={styles.container}>
                <div>
                    <div>
                    <h1>Our spiritual covering over Unravel Church</h1>
                    <p>
                        Unravel Church is under EACM which stands for 
                        Evangel Association of Churches & Ministries
                    </p>
                    <p>Our church practice the ministry of Jesus Christ as described 
                        in the Bible, focusing on:
                    </p>
                    <ul>
                        <li>Sharing the Gospel</li>
                        <li>Soul Salvation</li>
                        <li>Building discipleship</li>
                    </ul>
                    <h3>(Acts 1:8)</h3>
                    <p>
                        "But you will receive power when the Holy Spirit comes on you; and you will be 
                        my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
                    </p>
                    <p>
                        &nbsp; - Let us be witness of Jsus and evangelize to the ends of the earth.
                        This is the motif of Unravel Church (the church that is not bound).
                    </p>
                    <p>
                        EACM (Evangelical Alliance Church Mission) provides our church with support to 
                        become self-sufficient, offering benefits such as venue provision, legal advice, 
                        insurance, certification, and ordination through our network partner, 
                        Gateway City Church in the United States.
                    </p>
                    <Link href="https://evangelchurchgreenfield.com/" target="_blank">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}