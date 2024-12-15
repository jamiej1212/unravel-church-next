import styles from './page.module.css';

import Image from 'next/image';
import bannerImg from '../assets/banner.jpg';
import aboutImg from '../assets/about-1.jpg';
import Banner from '../components/banner';

export default function About(){
    return(
        <>
            <Banner prop="ABOUT US"/>
            <section className={styles['about-container']}>
            <Image className={styles['about-img']} src={aboutImg} alt="Desert road image"/>
            <div className={styles['about-desc']}>
                <h1>Unravel Church</h1>
                <p>Our church is a non-denominational church. The doctrine is modeled after the ministry of Jesus, as in the words of the four Gospels.</p>
                <ul>
                    <li>Declaration of the Word</li>
                    <li>Soul salvation</li>
                    <li>Raising disciples</li>
                </ul>
                <p>At Unravel Church, we are a community of believers committed to worship, fellowship, and service. Our mission is to share the love of Christ and grow in faith together. Whether you&#39;re exploring faith for the first time or have been walking with God for many years, there&#39;s a place for you here.</p>
                <p>Join us for worship, Bible study, and various ministries that support spiritual growth and make a difference in our community. We believe in the power of prayer, the importance of relationships, and the call to live out the gospel in everyday life.
                Come as you are, and let&#39;s grow together in Christ!</p>
            </div>
            </section>
        </>
        
      
    );
}