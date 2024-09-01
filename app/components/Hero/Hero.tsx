'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './hero.module.css';

gsap.registerPlugin(useGSAP);

const Hero = ({heroCMS} : any) => {  
  let data = heroCMS.data.heroCollection.items[0];
  const hero = useRef<HTMLElement | any>();

  useGSAP(() => {
    gsap.timeline().to('.gsap-title', {
      delay: 0.4,
      opacity: 1,
      transform: "translateY(0%) skewY(0deg)",
      duration: 0.8,
      stagger: 0.5,
      ease: 'power3.out',
      zIndex: 99,
    })
  }, { scope: hero });

  return (
    <section className='relative flex items-end min-h-screen py-16' ref={hero}>
      <Image src={`${(data.heroBackground.url)}`} alt="zdjęcie" className={`${styles.photo}`} fill priority />
      <div className="relative container mx-auto px-4 z-20">
        <div className="flex flex-col justify-between md:items-center md:flex-row-reverse">
          <h1 className="overflow-hidden text-[var(--white)] text-[3.2rem] lg:text-[4rem] font-medium text-left md:text-right">
            <span className={`${styles.title} gsap-title`}>{data.title}</span>
          </h1>
          <h2 className="overflow-hidden text-[var(--white)] text-[0.95rem] mt-8 md:my-0 pr-8 md:max-w-[19.5rem]">
            <span className={`${styles.title} gsap-title`}>
              {data.subtitle}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;