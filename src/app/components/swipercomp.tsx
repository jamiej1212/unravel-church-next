'use client';
import Image from 'next/image';
import styles from './swiper.module.css';
import mainOne from '../assets/main/main-1.jpg';
import mainTwo from '../assets/main/main-2.jpg';
import mainThree from '../assets/main/main-3.jpg';
import mainFour from '../assets/main/main-4.jpg';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperComp(){
    const images = [
        {id: 1, src: mainOne, alt: 'Image'},
        {id: 2, src: mainTwo, alt: 'Image'},
        {id: 3, src: mainThree, alt: 'Image'},
        {id: 4, src: mainFour, alt: 'Image'}
      ];

      return(
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
                priority
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
        
      );
}