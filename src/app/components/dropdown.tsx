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
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Home</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">About Us</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Leadership</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">History</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Our Covering</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Inner Healing</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Intercessory Prayer</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Worship</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Contact Us</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Events</Link></li>
                    <li className={styles['nav-list']}><Link className={styles['nav-link']} href="/">Give</Link></li>
                </ul>
            )}
        </div>
    );
}

export default DropDown;
