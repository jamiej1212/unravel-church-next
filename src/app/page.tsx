'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import mainOne from './assets/main-1.jpg';
import mainTwo from './assets/main-2.jpg';
import mainThree from './assets/main-3.jpg';
import mainFour from './assets/main-4.jpg';
import eventPic from './assets/contactus-1.jpg';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import FontAwesome
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
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className={styles['welcome-message']}>
        <div className={styles['welcome-message-container']}>
          <h1>Welcome to Unravel Church</h1>
          <p>San Jose, CA</p>
        </div>
      </section>
    
      <section className={styles['quick-info']}>
        <div className={styles['quick-info-title']}>
          New Here?
        </div>
        <div className={styles['quick-info-contents']}>
          <div>
            <div className={styles['info-bar']}></div>
            <h2>SUNDAY SERVICE</h2>
            <p>Every Sunday at 1:30PM</p>
            <p>Rear Entrance of Gateway City Church</p>
            <p>5883 Eden Park Pl, San Jose, CA 95138</p>
          </div>
          <div>
            <div className={styles['info-bar']}></div>
            <h2>EXPERIENCES</h2>
            <p>
              Our church is a community of faith and love. Through worship,
              prayer, and fellowship, you&#39;ll grow closer to God and strengthen your spirit.
              Join us for weekly services and programs that help you deepen your faith and
              support one another. We warmly invite you to be part of our family
            </p>
          </div>
          <div>
            <div className={styles['info-bar']}></div>
            <h2>PASTORS</h2>
            <p>
            Our pastors are dedicated leaders, offering inspiring sermons and personal
            support to help you grow in faith. With compassion and care, they guide our
            church community with a welcoming and uplifting presence.
            </p>
            <Link className={styles['pastor-btn']} href="/">Our Pastors</Link>
          </div>
        </div>
      </section>
      <section className={styles['event-outer-container']}>
        <h3>UPCOMING EVENTS</h3>
        <div className={styles['event-container']}>
          <div className={styles['event-list']}>
            <Image className={styles['event-pic']} src={eventPic} alt=""/>
            <h4>Event Title</h4>
            <p>Event Desc</p>
          </div>
          <div className={styles['event-list']}>
            <Image className={styles['event-pic']} src={eventPic} alt=""/>
            <h4>Event Title</h4>
            <p>Event Desc</p>
          </div>
          <div className={styles['event-list']}>
            <Image className={styles['event-pic']} src={eventPic} alt=""/>
            <h4>Event Title</h4>
            <p>Event Desc</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}
