import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
import Logo from '../assets/logo.png';
import DropDown from './dropdown';



export default function Header() {
    const about = [
        { id: 1, name: 'About Us', path: '/about' },
        { id: 2, name: 'Our Team', path: '/our-team' },
        { id: 3, name: 'History', path: '/history' },
        { id: 4, name: 'Our Covering', path: '/our-covering' }
    ];

    const ministries = [
        { id: 1, name: 'Inner Healing', path: '/inner-healing' },
        { id: 2, name: 'Intercessory Prayer', path: '/intercessory-prayer' },
        { id: 3, name: 'Worship', path: '/worship' }
    ];

    const planAVisit = [
        { id: 1, name: 'Plan a Visit', path: '/plan-a-visit'},
        { id: 2, name: 'Contact Us', path: '/contact' },
        { id: 3, name: 'Events', path: '/eventpage' }
    ];

    return (
        <div className={styles['hd-container']}>
            <div className={styles['header-container']}>
                <Image className={styles['header-logo']} src={Logo} alt="Unravel Church Logo" priority />
                <div className={styles['menu-container']}>
                    <div>
                        <Link className={styles['menu-title']} href="/">Home</Link>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="about">About</Link>
                        <ul>
                            {about.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="/inner-healing">Ministries</Link>
                        <ul>
                            {ministries.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <Link className={styles['menu-title']} href="/plan-a-visit">Plan a Visit</Link>
                        <ul>
                            {planAVisit.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="/give">Give</Link>
                    </div>
                    <div>
                    <DropDown />
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        
    );
}
