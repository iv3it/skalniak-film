'use client';

import styles from './about.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
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
              Hej, mam na imię Kazimierz. Zajmuję się filmowaniem oraz fotografią.
              Współpracuję sam lub w duecie z Kamilem, który jest fotografem. Możesz go znać pod pseudonimem „Aparat na Ślub". Tutaj można znaleźć jego prace <a href="https://aparatnaslub.com" target='_blank' rel='noreferrer' className='underline decoration-1'>aparatnaslub.com</a>. 
            </p>
            <p className="text-[1.85rem] leading-[2.85rem] mt-4">
              Żadne wyzwanie nie jest nam straszne. Jeśli chcesz mieć takie obrazki w swoim albumie, to napisz lub zadzwoń, aby zarezerwować termin.
              Działam na terenie całej Polski.
            </p>
            <Link href="#contact" className={styles.contactLink}>CONTACT</Link>
          </div>
        </div>
      </div>
    </section>
  ) 
}