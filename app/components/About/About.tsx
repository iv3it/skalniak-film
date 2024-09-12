'use client';

import styles from './about.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DataCMS, About } from '@/types'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About({ aboutMeCMS } : DataCMS) {
  let data : About = aboutMeCMS.data.aboutMeCollection.items[0];
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
    <section ref={about} className="my-20 md:my-32 bg-[var(--dark)] flex items-center" id='about'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div ref={gsapText} className={`${styles.textContainer} md:max-w-[60%] pr-6 md:pr-14 md:mb-0`}>
            <p className="text-[1.85rem] leading-[2.85rem]">
              {data.description}
            </p>
            <Link href={data.button.url} className={styles.contactLink}>{data.button.text}</Link>
          </div>
        </div>
      </div>
    </section>
  ) 
}