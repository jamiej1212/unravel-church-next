import styles from "./page.module.css";

import Banner from '../components/banner';
import Image from "next/image";
import pastorPeter from '../assets/history.jpg';

export default function History(){
    
    return(
        <>
            <Banner prop="History" />
            <div className={styles.container}>
                <h1>Let me tell you about our church</h1>
                <div>
                    <Image src={pastorPeter} alt="Pastor Peter's photo" />
                    <div>
                        <h2>Foundation Motivation</h2>
                        <p>
                            Pastor Peter Kim, formerly known as Myung Sun Kim, 
                            experienced significant internal conflicts during his life 
                            as a layperson. His life changed at the "Inner Healing and Restoration" 
                            seminar led by Pastor Sun Fannin, where he encountered the Holy Spirit 
                            and received inner healing, freeing him from deep wounds and 
                            bitterness from his past. This transformative experience led him to 
                            recognize God's calling for his life. Following this revelation, 
                            he pursued theological studies at Agape Theological University and 
                            committed himself to active ministry as a pastor and healing minister, 
                            helping many young people find restoration.
                        </p>
                        <h2>About Unravel Church</h2>
                        <p>
                            Our church is a vibrant and dynamic community that embraces 
                            the fullness of the Holy Spirit and the transformative power 
                            of God&#39;s Word. Whether you are new to the area or seeking 
                            a deeper connection with God, we are thrilled that you are considering 
                            joining us.
                        </p>
                        <p>
                            Our church is not traditional in the usual sense. We believe in 
                            the active presence of the Holy Spirit and the manifestation of 
                            His gifts, such as speaking in tongues, prophecy, healing, and 
                            miracles. Our worship services are passionate and heartfelt, 
                            designed to foster a deep sense of intimacy with God and to 
                            allow the Holy Spirit to lead and guide us. Unlike many others, 
                            our services are not pre-programmed or cookie-cutter. Each 
                            week, we are led by the Holy Spirit, which means our gatherings 
                            are unique and dynamic. This approach allows us to be more 
                            responsive to the needs of our congregation and the guidance 
                            we receive. 
                        </p>
                        <p>
                            We are committed to teaching the entire Bible, believing that 
                            every part of God&#39;s Word is vital for our spiritual growth 
                            and understanding. Our sermons and teachings are rooted in 
                            Scripture, aiming to equip and empower you to live out your 
                            faith in every aspect of your life. In our gatherings, you will 
                            experience fervent worship, spontaneous prayer, and a community 
                            that is eager to encounter the living God. We encourage you to 
                            come as you are, with an open heart and a readiness to experience 
                            the transformative work of the Holy Spirit.
                        </p>
                        <p>
                        We look forward to meeting you and walking this journey of faith 
                        together. May you find a home here where you can grow, serve, and 
                        experience the fullness of God&#39;s love and power.
                        </p>
                    </div>
                </div>
                
                
            </div>
        </>
        
    );
}