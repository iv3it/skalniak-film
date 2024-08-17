'use client'

import Image from "next/image";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './loader.module.css';

gsap.registerPlugin(useGSAP);

const Loader = ({ isLoading } : any) => {
  const loader = useRef<HTMLElement | any>();

  useGSAP(() => {
    gsap.timeline().to(loader.current, {
      display: 'block',
    })
    .to('.gsap-box', {
      width: 0,
      stagger: 0.3,
      display: 'block',
    })
    .to('.gsap-loader', {
      scale: 1,
      duration: 1.5,
      ease: 'power3.in'
    }, '<')
    .to('.gsap-boxImage', {
      stagger: 0.3,
      display: 'block',
      ease: 'none',
      onComplete: () => { isLoading(false) }
    }, '<0.3')
  }, { scope: loader });

  return ( 
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-[var(--dark)] overflow-y-scroll" ref={loader}>
      <div className={`${styles.loader} gsap-loader scale-100`}>
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
        <Image src="/photo/hero/1.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
        <Image src="/photo/hero/2.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
        <Image src="/photo/hero/3.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
        <Image src="/photo/hero/4.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
        <Image src="/photo/hero/5.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
        <div className={`${styles.box} gsap-box bg-[#0072a3]`}></div>
      </div>
    </div>
  );
}

export default Loader;