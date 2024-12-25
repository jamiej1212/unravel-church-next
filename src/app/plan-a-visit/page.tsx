import Image from 'next/image';

import styles from './page.module.css';
import Banner from '../components/banner';
import parking from '../assets/plan-a-visit/parking.jpg';
import kids from '../assets/plan-a-visit/kids.jpg';
import translation from '../assets/plan-a-visit/translation.jpg';
import worship from '../assets/plan-a-visit/worship-2.jpg';
import family from '../assets/plan-a-visit/family.jpg';

export default function PlanAVisit(){
    return(
        <>
            <Banner prop="PLAN A VISIT"/>
            <div className={styles['visit-container']}>
                <h1>What to expect.</h1>

                <Image src={parking} alt="Parking Image" priority/>
                <h2>Parking</h2>
                <p>We have a large parking structure surrounding our church. Feel free to come early to grab coffee, use the restroom, or check-in your kids before the worship gathering starts. </p>
                
                <Image src={kids} alt="Kids Image" priority/>
                <h2>Kids</h2>
                <p>At Unravel Church, kids are welcome to worship with adults and are encouraged to encounter the Lord&#39;s presence together as a body. However, kid&#39;s programming will be available during the entire service. Your child&#39;s safety is our priority, 
                    <b> so all our volunteers have been screened with background checks and as well as trained to make church a a fun, Spirit-filled environment </b>for your kids. Follow signs that lead you to the kid&#39;s check-in area.
                </p>

                <Image src={translation} alt="Translation Image" priority/>
                <h2>Translations Available</h2>
                <p>When you enter our church, we will have a welcome booth where translators will be available to be signed out. Our church was established by a Korean Pastor, Pastor Kim, however God expanded our church to touch many English speakers, and now we have translators as an integral part of our service. </p>

                <Image src={worship} alt="Worship Image" priority/>
                <h2>Worship</h2>
                <p>At Unravel, our worship is centered around the presence of Jesus Christ and the leading of the Holy Spirit. During our Sunday Service, we worship, pray, and listen to a teaching by one of our pastor/reverends. Our worship is led by the Holy Spirit and therefore we may have ministry time.  Our gathering lasts about two hours. </p>
            
                <Image src={family} alt="Family Image" priority/>
                <h2>Family</h2>
                <p>We are excited to meet you! Please hang out after service to meet our Unravel family. If you have any questions about your visit, please contact us unravelchurch@gmail.com</p>
            </div>
        </>
    );
}