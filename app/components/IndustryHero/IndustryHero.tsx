'use client';

import Image from "next/image";
import styles from './industryHero.module.scss';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IndustryHero = ({ industryHeroCMS } : any) => {
  let data = industryHeroCMS.items[0];
  let industryHero = useRef<HTMLElement | any>();

  useEffect(() => {    
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    gsap.timeline().to('.gsap-title', {
      delay: 0.2,
      opacity: 1,
      transform: "translateY(0%) skewY(0deg)",
      duration: 0.8,
      ease: 'power3.out',
      zIndex: 99,
    }, '<')

    gsap.to('.gsap-text', {
      color: "#fafafa",
      scrollTrigger: {
        trigger: '.gsap-text',
        start: "top bottom-=100px",
        end: "top center",
        scrub: true,
        // markers: true,
      }
    });
  }, { scope: industryHero });

  return (
    <div className="relative" ref={industryHero}>
      <div>
        <Image
          src={data.heroBackground.url}
          alt="zdjęcie"
          className={`${styles.photo} gsap-offerBox`}
          width={1080}
          height={1315}
          priority
        />
        <div className='absolute w-screen h-screen top-0 py-16'>
          <div className={`container mx-auto h-full px-4 flex items-end gsap-offerBox`}>
            <h1 className="overflow-hidden text-[var(--white)] font-medium text-[2.6rem] md:text-[7.2rem]">
              <span className={`${styles.title} gsap-title`}>{data.title}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className={`${styles.textContainer} container mx-auto my-32 px-4`}>
        <h2 className="font-medium text-[1.35rem] md:text-[2.1rem] lg:max-w-[80%] xl:max-w-[70%] gsap-text">{ data.description }</h2>
      </div>
    </div>
  );
}

export default IndustryHero;