import Image from 'next/image';

import styles from './page.module.css';
import bannerImg from '../assets/banner.jpg';
import pastor from '../assets/pastors.jpg';
import reverend from '../assets/reverends.jpg';
import minister from '../assets/ministers.jpg';

export default function OurTeam(){
    return(
        <>
            <section className={styles['banner-container']}>
                <Image className={styles['banner-img']} src={bannerImg} alt="Banner Image" />
                <div></div>
                <h1>ABOUT US</h1>
            </section>

            <section className={styles['team-container']}>
                <h1>Meet Our Team</h1>
                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={pastor} alt="Picture of our pastor" />
                    <div>
                        <h4>Pastor A</h4>
                        <p>Hello, my name is A, and I am blessed to serve as the pastor of Unravel Church. With a heart for ministry and a passion for spreading God&#39;s love, I aim to guide and support our congregation in faith, hope, and spiritual growth. I look forward to walking alongside each of you in this journey of faith.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={pastor} alt="Picture of our pastor" />
                    <div>
                        <h4>Pastor B</h4>
                        <p>Hello, my name is B, and I am blessed to serve as the pastor of Unravel Church. With a heart for ministry and a passion for spreading God&#39;s love, I aim to guide and support our congregation in faith, hope, and spiritual growth. I look forward to walking alongside each of you in this journey of faith.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h4>Reverend A</h4>
                        <p>Greetings, I am Reverend A, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h4>Reverend B</h4>
                        <p>Greetings, I am Reverend B, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h4>Minister A</h4>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
                
                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h4>Minister A</h4>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
               
            </section>
        </>
    );
}