'use client'

import Link from 'next/link';
import styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

export default function Footer(){
    return(
        <div className={styles['outer-container']}>
            <div className={styles['main-inner-container']}>
                <h3>Unravel Church</h3>
                <p>5883 Eden Park Pl, San Jose, CA 95138</p>
                <p>Rear Entrance of Gateway City Church</p>
                <div className={styles['icon-container']}>
                    <Link className={styles['icons']} href="https://www.instagram.com/unravelchurch/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link className={styles['icons']} href="mailto:abc@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /></Link>
                    <Link className={styles['icons']} href="https://www.google.com/maps/place/5883+Eden+Park+Pl,+San+Jose,+CA+95138/@37.2494967,-121.7785265,17z/data=!3m1!4b1!4m6!3m5!1s0x808e2e5a7b8fc263:0x3e04e7375fac0311!8m2!3d37.2494967!4d-121.7759516!16s%2Fg%2F11c27jg_y_?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <FontAwesomeIcon icon={ faMap } />
                    </Link>
                </div>
            </div>
            <div className={styles['sub-inner-container']}>
                <div className={styles['inner-container']}>
                    <br/>
                    <p><Link className={styles['sub-link']} href="/">About Us</Link></p>
                    <p><Link className={styles['sub-link']} href="/">Leadership</Link></p>
                    <p><Link className={styles['sub-link']} href="/">History</Link></p>
                    <p><Link className={styles['sub-link']} href="/">Our Covering</Link></p>
                </div>
                <div className={styles['inner-container']}>
                    <br/>
                    <p><Link className={styles['sub-link']} href="/">Inner Healing</Link></p>
                    <p><Link className={styles['sub-link']} href="/">Intercessory Prayer</Link></p>
                    <p><Link className={styles['sub-link']} href="/">Worship</Link></p>
                </div>
                <div className={styles['inner-container']}>
                    <br/>
                    <p><Link className={styles['sub-link']} href="/">Contact Us</Link></p>
                    <p><Link className={styles['sub-link']} href="/">Events</Link></p></div>
                <div className={styles['inner-container']}>
                    <br/>
                    <p><Link className={styles['sub-link']} href="/">Give</Link></p>
                </div>
            </div>
        </div>
    );
}