import Banner from '../components/banner';
import Image from 'next/image';

import styles from './page.module.css'
import worship from '../assets/worship.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function OurCovering(){

    return(
        <>
            <Banner prop="Worship" />

            <section className={styles.container}>
                <p>Worship is a huge part of Unravel Church. We believe in the power of worship, declarations, and spiritual songs and when we do, we invite His presence into our lives. He abides in the praises of His people and thus we magnify Him in our services. </p>
                <Image className={styles['worship-img']} src={worship} alt="worship image" />
                <h1>Why We Worship the Way We Do</h1>
                <div className={styles['worship-content']}>
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we stand when we sing?</b>
                    </div>
                    <p>”The Levites stood up to praise the Lord God of Israel with a loud voice on high” (2 Chronicles 20:19) </p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we clap our hands?</b>
                    </div>
                    <p>“Oh clap your hands all ye people; shout unto God with the voice of triumph” (Psalm 47:l )</p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we lift our hands?</b>
                    </div>
                    <p>“Thus I will bless thee while I live; I will lift up my hands in Thy name” (Psalm 63:4) </p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we dance?</b>
                    </div>
                    <p>“Let Israel rejoice in Him that made him: let the children of Zion by joyful in their King, let them praise his name in the dance…” (Psalm 149:2-3) </p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we anoint with oil and pray for the sick?</b>
                    </div>
                    <p>“Is there any sick among you? Let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: and the prayer of faith shall save the sick, and the Lord shall raise him up, and if he committed sins, they shall be forgiven.” (James 5:14-15) </p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we minister deliverance?</b>
                    </div>
                    <p>“And these signs shall follow them that believe; in my name shall they cast out devils; they shall speak with new tongues…” (Mark 16:17) </p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we sing in tongues?</b>
                    </div>
                    <p>“For if I pray in a tongue, my spirit prays, but my understanding is unfruitful. What is the conclusion then? I will pray with the spirit, and I will also pray with the understanding. I will sing with the spirit, and I will also sing with the understanding.” (1 Corinthians 12: 14-15)</p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why do we have speaking in tongues and their interpretation?</b>
                    </div>
                    <p>“But the manifestation of the Spirit is given to each one for the profit of all…10 to another the working of miracles, to another prophecy, to another discerning of spirits, to another different kinds of tongues, to another the interpretation of tongues.” (1 Corinthians 12: 7,10)</p>
                    
                    <div className={styles['inner-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <b>Why does the whole church pray at once for specific needs?</b>
                    </div>
                    <p>“So when they heard that, they raised their voice to God with one accord and said: “Lord, You are God, who made heaven and earth and the sea, and all that is in them,” (Acts 4:24)</p>
                </div>
            </section>
        </>
    );
}