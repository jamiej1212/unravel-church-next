'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './dropdown.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DropDown: React.FC = () => {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest(`.${styles['nav-container']}`)) {
                setShowComponent(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const clickEve = () => {
        setShowComponent(!showComponent);
    }

    return (
        <div className={styles['nav-container']}>
            <FontAwesomeIcon
                size='lg'
                className={styles['nav-bar']}
                icon={faBars}
                onClick={(clickEve)}
                color='#63625b'
            />
            {showComponent && (
                <ul className={styles['list-container']}>
                    <div>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Home</Link></li>
                    </div>
                    
                    <div>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/about">About Us</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/our-team">Our Team</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/history">History</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/our-covering">Our Covering</Link></li>
                    </div>
                    
                    <div>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/inner-healing">Inner Healing</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/intercessory-prayer">Intercessory Prayer</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/worship">Worship</Link></li>
                    </div>
                    
                    <div>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/contact">Contact Us</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/eventpage">Events</Link></li>
                        <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/give">Give</Link></li>
                    </div>
                </ul>
            )}
        </div>
    );
}

export default DropDown;
