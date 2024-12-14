import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
import Logo from '../logo.ico';
import DropDown from './dropdown';



export default function Header() {
    const about = [
        { id: 1, name: 'About Us', path: '/' },
        { id: 2, name: 'Leadership', path: '/' },
        { id: 3, name: 'History', path: '/' },
        { id: 4, name: 'Our Covering', path: '/' }
    ];

    const ministries = [
        { id: 1, name: 'Inner Healing', path: '/' },
        { id: 2, name: 'Intercessory Prayer', path: '/' },
        { id: 3, name: 'Worship', path: '/' }
    ];

    const planAVisit = [
        { id: 1, name: 'Contact Us', path: '/' },
        { id: 2, name: 'Events', path: '/eventpage' }
    ];

    return (
        <>
            <div className={styles['header-container']}>
                <Image className={styles['header-logo']} src={Logo} alt="Unravel Church Logo" priority />
                <div className={styles['menu-container']}>
                    <div>
                        <Link className={styles['menu-title']} href="/">Home</Link>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="/">About</Link>
                        <ul>
                            {about.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="/">Ministries</Link>
                        <ul>
                            {ministries.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <Link className={styles['menu-title']} href="/">Plan a Visit</Link>
                        <ul>
                            {planAVisit.map((item) => (
                                <li key={item.id} className={styles['dropdown']}>
                                    <Link className={styles['dropdown-item']} href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                    <div>
                        <Link className={styles['menu-title']} href="/">Give</Link>
                    </div>
                    <div>
                    <DropDown />
                    </div>
                    
                </div>
            </div>
            
        </>
        
        
    );
}
