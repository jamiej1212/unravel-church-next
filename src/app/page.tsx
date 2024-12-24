'use client'

import Image from "next/image";
import Link from "next/link";
import EventPage from './eventpage/page';

import styles from "./page.module.css";
import mainOne from './assets/main-1.jpg';
import mainTwo from './assets/main-2.jpg';
import mainThree from './assets/main-3.jpg';
import mainFour from './assets/main-4.jpg';
import service from './assets/sunday_service.png';
import experiences from './assets/experiences.jpg';
import pastors from './assets/pastors.jpg';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Font Awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const images = [
    {id: 1, src: mainOne, alt: 'Image'},
    {id: 2, src: mainTwo, alt: 'Image'},
    {id: 3, src: mainThree, alt: 'Image'},
    {id: 4, src: mainFour, alt: 'Image'}
  ];

  return(
    <div>
      <div className={styles['swiper-container']}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          pagination={{clickable: true}}
          navigation={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          className={styles['swiper-slider']}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                className={styles['swiper-image']}
              >
              </Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['swiper-text']}>
            <h1>FOLLOWING <span>JESUS</span></h1>
            <h1>WHEREVER WE ARE</h1>
            <p>Building Faith, Sharing Love, Transforming Lives</p>
        </div>
      </div>

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
