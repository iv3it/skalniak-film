'use client';

import styles from './about.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About({ data } : any) {
  const about = useRef<HTMLElement | any>();
  const gsapText = useRef<HTMLElement | any>();
  
  useEffect(() => {    
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    gsap.to(gsapText.current, {
      color: "#fafafa",
      scrollTrigger: {
        trigger: gsapText.current,
        start: "top bottom-=100px",
        end: "top center",
        scrub: true,
        // markers: true,
      }
    });
  }, {
    scope: about,
  });

  return (
    <section ref={about} className="py-20 md:py-36 min-h-screen bg-[var(--dark)] flex items-center" id='about'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div ref={gsapText} className={`${styles.textContainer} md:max-w-[80%] pr-6 md:pr-14 md:mb-0`}>
            <p className="text-[1.85rem] leading-[2.85rem] mt-10 md:mt-4">
              { data.description }
            </p>
            <Link href={data.link.url} className={styles.contactLink}>{ data.link.text }</Link>
          </div>
        </div>
      </div>
    </section>
  ) 
}