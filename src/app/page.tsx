'use client'

import Image from "next/image";
import styles from "./page.module.css";
import mainOne from './assets/main-1.jpg';
import mainTwo from './assets/main-2.jpg';
import mainThree from './assets/main-3.jpg';
import mainFour from './assets/main-4.jpg';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const images = [
    {id: 1, src: mainOne, alt: 'Image'},
    {id: 2, src: mainTwo, alt: 'Image'},
    {id: 3, src: mainThree, alt: 'Image'},
    {id: 4, src: mainFour, alt: 'Image'}
  ];

  return(
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      loop={true}
      pagination={{clickable: true}}
      navigation={false}
      mousewheel={true}
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
  );
}
