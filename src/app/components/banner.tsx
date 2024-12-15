import Image from 'next/image';

import styles from './banner.module.css';

import bannerImg from '../assets/banner.jpg';

interface BannerProps{
    prop: string;
}

export default function Banner({prop}: BannerProps){
    return(
        <section className={styles['banner-container']}>
                <Image className={styles['banner-img']} src={bannerImg} alt="Banner Image" />
                <div></div>
                <h1>{prop}</h1>
            </section>
    );
}