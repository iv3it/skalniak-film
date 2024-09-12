'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './hero.module.css';
import type { DataCMS, Hero } from '@/types'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = ({ heroCMS } : DataCMS) => {  
  let data : Hero = heroCMS.data.heroCollection.items[0];
  const hero = useRef<HTMLElement | any>();

  useEffect(() => {    
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    gsap.timeline().to(hero.current, {
      duration: 2,
      opacity: 1,
    })
    .to('.gsap-title', {
      delay: 0.2,
      opacity: 1,
      transform: "translateY(0%) skewY(0deg)",
      duration: 0.8,
      stagger: 0.5,
      ease: 'power3.out',
      zIndex: 99,
    }, '<')

    gsap.to('.gsap-heroBg', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.gsap-heroBg',
        start: "bottom bottom-=100px",
        end: "bottom top",
        scrub: true, 
        // markers: true,
      }
    });
  }, { scope: hero });

  return (
    <section className={`${styles.hero} relative flex items-end min-h-screen py-16`} ref={hero}>
      <Image src={`${(data.heroBackground.url)}`} alt="zdjęcie" className={`${styles.photo} gsap-heroBg`} fill priority />

      <div className="relative container mx-auto px-4 z-20">
        <div className="flex flex-col justify-between md:items-center md:flex-row-reverse">
          <h1 className="overflow-hidden text-[var(--white)] text-[3.2rem] lg:text-[4rem] font-medium text-left md:text-right">
            <span className={`${styles.title} gsap-title`}>{data.title}</span>
          </h1>
          <h2 className="overflow-hidden text-[var(--white)] text-[0.95rem] mt-8 md:my-0 pr-8 md:max-w-[19.5rem]">
            <span className={`${styles.title} gsap-title`}>
              {data.description}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;