'use client'

import styles from './offerBoxes.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const OfferBoxes = ({ data } : any) => {
  const offerBoxesConteiner = useRef<HTMLElement | any>();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline();

  }, {
    scope: offerBoxesConteiner,
  });

  return ( 
    <section className='my-32' ref={offerBoxesConteiner} id="portfolio">
      <div className='container mx-auto px-4 max-w-[80%]'>
        <div className='flex flex-col items-center w-full'>
          <p className='text-3xl font-medium text-[var(--white)] text-center max-w-[60%] mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cumque facere rem non voluptas quaerat.</p>
        </div>
        <div className={`${styles.boxGrid}`}>
          <Link href="/foto" className={styles.box}>
            <div className={styles.tint}></div>
            <Image
              src="/offerBoxPhoto.jpg"
              alt="zdjęcie"
              className={`${styles.photo} gsap-offerPhoto`}
              width={1080}
              height={1315}
              priority
            />
            <div className={styles.titleBox}>
              <p className={styles.description}>Lorem ipsum, dolor sit amet consect adipisicing elit. Saepe quis.</p>
              <button className={styles.button}>
                <Image
                  src="/arrow-right.svg"
                  alt="arrow"
                  className={styles.arrow}
                  width={50}
                  height={50}
                  priority
                />
                ZOBACZ WIĘCEJ
              </button>
              <p className={styles.title}>Foto</p>
            </div>
          </Link>
          <Link href="/film" className={styles.box}>
            <div className={styles.tint}></div>
            <Image
              src="/offerBoxVideo.jpg"
              alt="zdjęcie"
              className={`${styles.photo} gsap-offerPhoto`}
              width={1080}
              height={1315}
              priority
            />
            <div className={styles.titleBox}>
              <p className={styles.description}>Lorem ipsum, dolor sit amet consect adipisicing elit. Saepe quis.</p>
              <button className={styles.button}>
                <Image
                  src="/arrow-right.svg"
                  alt="arrow"
                  className={styles.arrow}
                  width={50}
                  height={50}
                  priority
                />
                ZOBACZ WIĘCEJ
              </button>
              <p className={styles.title}>Film</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OfferBoxes;