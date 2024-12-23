import Image from 'next/image';

import styles from './page.module.css';
import pastor from '../assets/pastor_1.png';
import reverend from '../assets/reverends.jpg';
import minister from '../assets/ministers.jpg';
import Banner from '../components/banner';

export default function OurTeam(){
    return(
        <>
            <Banner prop="Our Team" />

            <section className={styles['team-container']}>
                <h1>Meet Our Team</h1>
                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={pastor} alt="Picture of our pastor" />
                    <div>
                        <h3>Pastor Chris and Deborah Kim</h3>
                        <p>Pastor Chris Kim and Pastor Deborah Kim are the English Pastors of Unravel Church in San Jose, leading with a passion for God's Kingdom and Jesus Christ. They are committed to seeing God's kingdom manifest on earth through healing, miracles, and the power of the Holy Spirit. Their ministry emphasizes the importance of walking in supernatural power and equipping believers to live out their faith boldly. Together, they raise a family deeply rooted in ministry, with a growing legacy of spiritual impact. They're a family of 3 and recently welcomed into the world their son Joey Kim.
                        Personal photos</p>
                    </div>
                </div>

                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={pastor} alt="Picture of our pastor" />
                    <div>
                        <h3>Pastor B</h3>
                        <p>Hello, my name is B, and I am blessed to serve as the pastor of Unravel Church. With a heart for ministry and a passion for spreading God&#39;s love, I aim to guide and support our congregation in faith, hope, and spiritual growth. I look forward to walking alongside each of you in this journey of faith.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h3>Reverend A</h3>
                        <p>Greetings, I am Reverend A, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h3>Reverend B</h3>
                        <p>Greetings, I am Reverend B, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h3>Minister A</h3>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
                
                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h3>Minister A</h3>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
               
            </section>
        </>
    );
}