import Banner from '../components/banner';

import Image from 'next/image';
import contactImg from '../assets/contactus.jpg';

import styles from './page.module.css';
import ContactForm from '../components/contactform';

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
                <ContactForm />
            </div>
        </>
    );
}