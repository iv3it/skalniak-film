'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './hero.module.css';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const hero = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline().to('.gsap-box', {
      width: 0,
      duration: 0.7,
      stagger: 0.1,
    })
    .to('.gsap-image',{
      scale: 1,
    }, '<')
    .to('.gsap-title', {
      translateY: 0,
      duration: 1.2,
      stagger: 0.5,
    })
  }, {
    scope: hero,
  });

  return ( 
    <section className='relative flex items-end min-h-screen py-16' ref={hero}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className={styles.boxes}>
          <div className={`${styles.box} gsap-box`}></div>
          <div className={`${styles.box} gsap-box`}></div>
          <div className={`${styles.box} gsap-box`}></div>
          <div className={`${styles.box} gsap-box`}></div>
          <div className={`${styles.box} gsap-box`}></div>
          <div className={`${styles.box} gsap-box`}></div>
        </div>
        <Image
          src="/hero.jpg"
          alt="background image"
          className={`${styles.image} gsap-image`}
          width={1920}
          height={1500}
          priority
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between md:items-center md:flex-row-reverse">
          <h1 className="overflow-hidden text-[var(--white)] text-[3.2rem] lg:text-[4rem] font-medium text-left md:text-right">
            <span className={`${styles.title} gsap-title`}>Fotografia & film</span>
          </h1>
          <h2 className="overflow-hidden text-[var(--white)] text-[0.95rem] mt-8 md:my-0 pr-8 md:max-w-[19.5rem]">
            <span className={`${styles.title} gsap-title`}>
              Hej, mam na imię Kazimierz. Zajmuję się filmowaniem oraz fotografią ślubną i eventową. Współpracuję sam lub w duecie z Kamilem, który jest fotografem.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;