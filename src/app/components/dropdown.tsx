'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';

const DropDown = () => {
  // State to control whether the dropdown menu is visible or not
  const [showComponent, setShowComponent] = useState(false);

  // State to control the input checkbox
  const [isChecked, setIsChecked] = useState(false);

  const pathname = usePathname();

  // Close the dropdown when clicking outside
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this only runs on the client side

    setIsChecked(false);

    // Function to close the dropdown if a click occurs outside of the 'nav-container' element
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the event target is outside the nav-container
      
      if (!(event.target instanceof HTMLElement) || !event.target.closest(`.${styles['nav-container']}`)) {
        setShowComponent(false);
        // Revert the checkbox to its initial state after routing to a new page
        setIsChecked(false);
      }
    };

    // Listening for clicks outside the dropdown to close it
    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowComponent(false);
    setIsChecked(false);
  }, [pathname]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowComponent(!showComponent);
  };

  return (
    <div className={styles['nav-container']}>
      <div className={styles['hamburger-container']}>
        <input
          type="checkbox"
          id="hamburger"
          onClick={() => setShowComponent(!showComponent)}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      {showComponent && (
        <ul className={styles['list-container']}>
          <div>
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/">
                Home
              </Link>
            </li>
          </div>

          <div>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/about">
                About Us
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/our-team">
                Our Team
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/history">
                History
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/our-covering">
                Our Covering
              </Link>
            </li>
          </div>

          <div>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/inner-healing">
                Inner Healing
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/intercessory-prayer">
                Intercessory Prayer
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/worship">
                Worship
              </Link>
            </li>
          </div>

          <div>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/plan-a-visit">
                Plan a Visit
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/contact">
                Contact Us
              </Link>
            </li>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/eventpage">
                Events
              </Link>
            </li>
          </div>
          <div>
            <hr />
            <li className={styles['nav-list']}>
              <Link className={styles['nav-link']} href="/give">
                Give
              </Link>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
