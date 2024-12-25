import Image from 'next/image';

import styles from './page.module.css';
import pastorKim from '../assets/pastor_1.png';
import pastorHong from '../assets/pastor_2.png';
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
                    <Image className={styles['team-img']} src={pastorHong} alt="Picture of our pastor" />
                    <div>
                        <h3>Pastor Insook Hong</h3>
                        <p>
                        </p>
                    </div>
                </div>

                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={pastorKim} alt="Picture of our pastor" />
                    <div>
                        <h3>Pastor Chris and Deborah Kim</h3>
                        <p>
                            Pastor Chris Kim and Pastor Deborah Kim are the English Pastors of Unravel Church in San Jose, 
                            leading with a passion for God's Kingdom and Jesus Christ. They are committed to seeing God's 
                            kingdom manifest on earth through healing, miracles, and the power of the Holy Spirit. 
                            Their ministry emphasizes the importance of walking in supernatural power and equipping believers 
                            to live out their faith boldly. Together, they raise a family deeply rooted in ministry, with a 
                            growing legacy of spiritual impact. They're a family of 3 and recently welcomed into the world 
                            their son Joey Kim.
                        </p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h3>chaplain David and Reverend Rachel Lee</h3>
                        <p>Greetings, I am Reverend A, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={reverend} alt="Picture of our reverend" />
                    <div>
                        <h3>Reverend Esther and Minister Joseph So</h3>
                        <p>Greetings, I am Reverend B, and I am honored to serve the community of Unravel Church. With a deep commitment to faith, service, and spiritual growth, I look forward to walking with you on this journey of God's love and grace.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h3>Reverend John and Jael Roh</h3>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
                
                <div className={styles['team-desc-two']}>
                    <Image className={styles['team-img-two']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h3>Reverend Jiwon Hong</h3>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>

                <div className={styles['team-desc']}>
                    <Image className={styles['team-img']} src={minister} alt="Picture of our minister" />
                    <div>
                        <h3>Minister Minki Kim</h3>
                        <p>Hello, I&#39;m Minister A, and it&#39;s a privilege to serve alongside you in faith. My goal is to help nurture our spiritual growth and strengthen our community through God&#39;s love and guidance. I look forward to walking with you on this journey of faith and service.</p>
                    </div>
                </div>
               
            </section>
        </>
    );
}