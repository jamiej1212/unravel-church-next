import Image from 'next/image';
import intercessory from '../assets/intercessory.jpg';

import styles from './page.module.css';
import Banner from '../components/banner';

export default function IntercessoryPrayer(){
    return(
        <>
            <Banner prop="INTERCESSORY PRAYER" />
            <section className={styles['top-container']}>
                <Image className={styles['intercessory-img']} src={intercessory} alt="Image of praying" />
                <p>Every Wednesday Night, the leaders gather together to pray and intercede for our nation, 
                    personal break throughs and special prayer requests.</p>
                <hr />
            </section>

            <section className={styles['bottom-container']}>
                <div className={styles['bible-verse']}>
                    <h2>Matthew 18:19- 29</h2>
                    <p>
                        “Again I say to you that if two of you agree on earth concerning anything that they ask, 
                        it will be done for them by My Father in heaven.
                        For where two or three are gathered together in My name, I am there in the midst of them.”
                    </p>
                </div>

                <div className={styles['bible-verse']}>
                    <h2>1 Timothy 2: 1 -2</h2>
                    <p>
                        “Therefore, I exhort first of all that supplications, prayers, intercessions, and giving of 
                        thanks be made for all men, for kings and all who are in authority, that we may lead a quiet 
                        and peaceable life of all godliness and reverence.”
                    </p>
                </div>

                <div className={styles['bible-verse']}>
                    <h2>James 5:14-16</h2>
                    <p>
                        “Now this is the confidence that we have in Him, that if we ask anything according to His will, He hears us. And if we know that 
                        He hears us, whatever we ask, we know that we have the petitions that we have asked of Him.”
                    </p>
                </div>
                
                <div className={styles['bible-verse']}>
                    <h2>1 John 5: 14</h2>
                    <p>
                        “Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing psalms. Is anyone among you sick? Let him call 
                        for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will 
                        save the sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven. Confess your trespasses to 
                        one another, and pray for one another, that you may be healed. The effective, fervent prayer of a righteous man avails much.”
                    </p>
                </div>

                <div className={styles['bible-verse']}>
                    <h2>John 9:31</h2>
                    <p>
                        “Now we know that God does not hear sinners; but if anyone is a worshiper of God and does He will, He hears him.”
                    </p>
                </div>
            </section>
        </>
    );
}