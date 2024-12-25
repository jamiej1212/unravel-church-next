import styles from './page.module.css';

import Banner from '../components/banner';
import Image from 'next/image';
import unravel from '../assets/about/about-1.jpg';

export default function About(){
    return(
        <>
            <Banner prop="ABOUT US"/>
            <div className={styles['about-container']}>
                <section className={styles['about-church']}>
                    <Image src={unravel} alt="Unravel Church Image" priority />
                    <h1>Unravel Church</h1>
                    <hr />
                    <p>Our church is a non-denominational church. The doctrine is modeled after the ministry of Jesus, as in the words of the four Gospels.</p>
                    <ul>
                        <li>Declaration of the Word</li>
                        <li>Soul salvation</li>
                        <li>Raising disciples</li>
                    </ul>
                </section>
                    
                <section className={styles['about-vision']}>
                    <h1>Vision</h1>
                    <hr />
                    <p>To <b>unravel</b> our soul, spirit and body from the bondages 
                        in the presence of God and to <b>equip </b>
                        the saints to be witnesses of Jesus Christ to the ends of the earth 
                    </p>
                    <b>What does unravel mean? </b>
                    <p>Unravel means to be set free from the entanglement of sin 
                        and to be woven back together the way God designed us to be; 
                        to restore our relationship with Jesus Christ
                    </p>
                    <b>un·rav·el /ˌən&#39;ravəl/ verb </b>
                    <p>: to disentangle; undo (twisted, knitted, or woven threads); 
                        make plain or clear
                    </p>
                </section>

                <section className={styles['about-mission']}>
                    <h1>Mission</h1>
                    <hr />
                    <p>Birthed from Acts 1:8, <b>“But you shall receive power when 
                        the Holy Spirit has come upon you; and you shall be witnesses 
                        to Me in Jerusalem, and in all Judea and Samaria, and to the 
                        end of the earth”</b>, our mission is as follows…
                    </p>
                    <ul>
                        <li>To train people to become a part of God's army in action</li>
                        <li>To teach people how to flow in the authority that has been 
                            given to them as overcoming, knowledgeable doers of the Word of God!
                        </li>
                        <li>To teach people how to flow under a fresh anointing, 
                            imparting healing to others
                        </li>
                        <li>To be prayer warriors and intimate worshippers of God!</li>
                        <li>To create an atmosphere for the Holy Spirit to do what He desires 
                            in our lives and in our services!
                        </li>
                    </ul>
                </section>

                <section className={styles['core-doctrine']}>
                    <h1>Core Doctrine</h1>
                    <hr />
                    <h3>The Bible: </h3>
                    <p>The Holy Scripture is a revelation of God, coming from God, 
                        and flowing through and to man. We believe the Bible to be the 
                        inspired, infallible, authoritative Word of God. It is living and 
                        powerful. (2 Timothy 3:16; 2 Peter 1:20-21; Hebrew 4:12) 
                    </p>
                    <h3>The Trinity: </h3>
                    <p>We believe that there is one God, eternally self-existent in three 
                        persons: Father, Son and the Holy Ghost. (Matthew 28:19; John 1:1-2,14; 
                        Ephesians 4: 4 - 6; 2 Corinthians 13:14)
                    </p>
                    <h3>Jesus Christ: </h3>
                    <p>He is fully God and was fully man in one person, God in human flesh. 
                        We believe in the deity of Jesus Christ, in His virgin birth, in His 
                        sinless life, in His miracles, in His vicarious and atoning death 
                        through His shed blood, in His resurrection, in His ascension to the 
                        right hand of the Father, in His personal return in power and glory. 
                        ( John 1: 1-2, 14; Romans 9: 5; Matthew 1: 18, 20; 2 Cor. 5:21; 
                        Romans 3:25-26; Matt. 28: 1-20; John 14:3; Acts: 1:11; 1 Thess. 4:16)
                    </p>
                    <h3>Holy Spirit: </h3>
                    <p>The Holy Spirit is the third divine person of the eternal Godhead, 
                        co-equal, co-eternal, and co-existent with the Father and the Son. 
                        It is His ministry to convict and convert man as well as to reveal 
                        the Son and the father to the believer. We believe in the present-day 
                        ministry of the Holy Spirit, whose indwelling the Christian is enabled 
                        to live a godly life.  (Gen. 1:2; Acts 4:8; 1 Peter 1:12; Heb. 3:7; 1 Cor. 
                        12:11; Matt. 12:28; Acts: 13-11; Ephesians. 6:17) 
                    </p>
                    <h3>Sin and salvation: </h3>
                    <p>We believe for the salvation of a lost and sinful man.  
                        Sin entered the universe through Satan and then into the human race 
                        with the fall of Adam and Eve, separating man from God. God sent His 
                        one and only Son, Jesus Christ to atone for our sins and to reconcile 
                        man to God. Everyone who repents and trusts in Jesus Christ is forgiven 
                        of their sins and is free from the curse of sin and death.
                    </p>
                    <p>Salvation is a free gift from God to those who believe in the finished 
                        work of Jesus Christ and his resurrection. (Gen. 2-3; Romans 5:12; 
                        Romans 6:23; 2 For. 5:18; Ephesians 2: 8- 9; Romans 1:6; Ephesians 2:8 - 10; 
                        John 1:13)
                    </p>
                    <h3>Baptism: </h3>
                    <p>We believe in the water baptism by immersion for born again believers and 
                        in the baptism of the Holy Spirit by the initial evidence of speaking 
                        in other tongues. Regeneration (being born again) by the Holy Spirit 
                        is absolutely essential. (Matt. 3:16; Mark 1:11; Luke 3:22; Acts 4:29-31; 
                        1 Cor. 12:10-11)
                    </p>
                    <h3>Speaking in Tongues: </h3>
                    <p>We believe in the spiritual gift of speaking in tongues (diverse languages) 
                        to build oneself up, as the Holy Spirit gives utterance. 
                        (Acts 2:1-4; 1 Cor. 14: 1-5;  Mark 16:1-18)
                    </p>
                    <h3>Second Coming: </h3>
                    <p>We believe in the second coming of Jesus Christ as the Righteous Judge 
                        and King of Kings. (Hebrew 9:28; Rev. 1:7; 2 Pet. 3:10)
                    </p>
                </section>
                
            </div>

        </>
        
      
    );
}