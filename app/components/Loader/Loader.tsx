'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './loader.module.css';

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const loader = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline().to('.gsap-box', {
      width: 0,
      stagger: 0.3,
      display: 'block',
    })
    .to('.gsap-boxImage', {
      stagger: 0.3,
      display: 'block',
      ease: 'none',
    }, '<0.3')
    .to(loader.current, {
      display: 'none',
    })
  }, {
    scope: loader,
  });

  return ( 
    <div className="fixed top-0 left-0 w-full h-full z-50" ref={loader}>
      <div className={`${styles.loader}`}>
        <div className={`${styles.box} gsap-box bg-[#67abbd]`}></div>
        <Image src="/photo/hero/1.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#67bd6b]`}></div>
        <Image src="/photo/hero/2.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#bd679b]`}></div>
        <Image src="/photo/hero/3.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#f0d458]`}></div>
        <Image src="/photo/hero/4.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#614e95]`}></div>
        <Image src="/photo/hero/5.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#67bd6b]`}></div>
      </div>
    </div>
  );
}

export default Loader;