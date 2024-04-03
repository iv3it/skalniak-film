'use client'

import styles from './photoContainer.module.scss';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PhotoContainer = () => {
  const photoContainer = useRef<HTMLElement | any>();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    gsap.utils.toArray('.gsap-photo').forEach((item : any, i)=>{  
      gsap.to(item, {
        yPercent: 25,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
        }
      });
    });
  }, {
    scope: photoContainer,
  });

  return ( 
    <div ref={photoContainer} className={`${styles.photosGrid}`}>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/1.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/2.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/3.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/4.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/5.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/6.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/7.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/8.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
      <div className={styles.photoBox}>
        <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
          <Image
            src="/photo/events/9.jpg"
            alt="zdjęcie"
            className={`${styles.photo} gsap-photo`}
            width={1080}
            height={1315}
            priority
          />
        </div>
        <p className='text-sm text-[var(--dark)] mt-4 font-medium text-right'>Koncert Xyz, 2023</p>
      </div>
    </div>
  );
}

export default PhotoContainer;