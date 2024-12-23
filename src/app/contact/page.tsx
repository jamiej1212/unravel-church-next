import Banner from '../components/banner';

import Image from 'next/image';
import contactImg from '../assets/contactus.jpg';

import styles from './page.module.css';

export default function ContactUs(){
    return(
        <>
            <Banner prop="CONTACT US" />
            <div className={styles.title}>
                <h1>Any Questions? Send Us a Message. </h1>
                <h2>Fill out the form below and we will be in touch soon </h2>
            </div>
            
            <div className={styles['contact-container']}>
                <Image className={styles['contact-img']} src={contactImg} alt="Scenery image"/>
                
                <form className={styles['contact-form']}>
                    <h2>Contact Us</h2>
                    <label htmlFor="full-name">Full Name *</label>
                    <input
                        className={styles['input-field']}
                        type="text" 
                        name="full-name" 
                        placeholder="Your Name"
                        required 
                    />

                    <label htmlFor="email-address">Email Address *</label>
                    <input 
                        className={styles['input-field']}
                        type="email" 
                        name="email-address" 
                        pattern="[^@]+@[^@]+\.[a-zA-Z0-9-.]+" 
                        placeholder="hello@gmail.com"
                        required 
                    />
                    
                    <label htmlFor="phone-number">Phone Number</label>
                    <input 
                        className={styles['input-field']}
                        type="tel" 
                        name="phone-number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        required
                    />

                    <label htmlFor="message">Enter Message</label>
                    <textarea
                        placeholder="Enter Message"
                    />

                    <input className={styles.submit} type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}