import Image from "next/image";
import Link from "next/link";
import EventPage from './eventpage/page';

import styles from "./page.module.css";
import service from './assets/main/sunday_service.png';
import experiences from './assets/main/experiences.jpg';
import pastors from './assets/main/pastors.jpg';

// Font Awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SwiperComp from "./components/swipercomp";

export default function Home() {


  return(
    <div>
       <SwiperComp />
      <section className={styles['welcome-message']}>
            <div className={styles['welcome-message-container']}>
                <h1>Welcome to Unravel Church</h1>
                <p>San Jose, CA</p>
            </div>
      </section>

      <section className={styles['sunday-service']}>
        <div>
          <Image src={service} alt="Sunday service flyer image" />
        </div>
      </section>
    
      <section className={styles['quick-info']}>
        <div className={styles['quick-info-contents']}>
            <div>
                <Image src={experiences} alt="An image of people having fun" />
                <h2>EXPERIENCES</h2>
                <p>
                    Our church is a community of faith and love.
                    Join us for worship, prayer, and fellowship to grow in faith and
                    support one another. We invite you to be part of our family.
                </p>
                <Link className={styles['experience-btn']} href="/">Worship &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div>
                <Image src={pastors} alt="An image of the Bible" />
                <h2>PASTORS</h2>
                <p>
                    Our pastors are dedicated leaders, offering inspiring sermons and 
                    personal support to help you grow in faith. With compassion, 
                    they guide our church with a welcoming presence.
                </p>
                <Link className={styles['pastor-btn']} href="/">Our Pastors &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
      </section>
      <EventPage />
    </div>
  );
}
