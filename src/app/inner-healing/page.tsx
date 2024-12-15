import Banner from '../components/banner';
import Link from 'next/link';

import styles from './page.module.css';

export default function InnerHealing(){
    return(
        <>
            <Banner prop="INNER HEALING" />
            <div className={styles['inner-healing-container']}>
                <div className={styles['inner-healing']}>
                    <h2>What is Inner-Healing?</h2>
                    <p>At Unravel, we offer inner-healing counseling and prayer sessions.</p>
                    <p>Inner-healing means healing of the wounded soul and the liberation of the hurt soul,
                    so that we can mature in our relationship with Jesus Christ and
                    to live a life of obedience to the Word of God.</p>
                    <p>Inner-healing allows us to live our present with joy and not bind us to live in our past.</p>
                </div>

                <div className={styles['inner-healing-two']}>
                    <h2>Is this biblical?</h2>
                    <p>Yes, God liberates the wounded soul and the oppressed spirit
                        through the power of the Holy Spirit.</p>
                    <p>“… the Spirit of the Lord is on me, because he has anointed me
                        to proclaim the good news to the poor.
                        He has sent me to proclaim freedom for the prisoners
                        and recovery of sight for the blind, to set the oppressed free,
                        to proclaim the year of the Lord&#39;s favor.” (Luke 4:18-19)</p>
                    <ul>
                        <li>Jesus came to heal the wounded spirit</li>
                        <li>Jesus came to liberate the prisoners</li>
                        <li>Jesus came to liberate the oppressed</li>
                    </ul>
                    <br />
                    <p>How can I sign up to receive an inner-healing prayer or attend a workshop?</p>
                    <Link className={styles['inner-healing-btn']} href="/contact">Join Us</Link>
                </div>
            </div>
        </>
    );
}