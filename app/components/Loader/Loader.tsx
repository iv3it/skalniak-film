'use client'
import { CostarOliya } from '../../fonts';
import Image from "next/image";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './loader.module.css';

gsap.registerPlugin(useGSAP);

const Loader = ({ onLoadingComplete } : any) => {
  const loader = useRef<HTMLElement | any>();

  useGSAP(() => {
    gsap.timeline().to(loader.current, {
      display: 'block',
    })
    .to('.gsap-boxWrapper', {
      opacity: 1,
      duration: 0.5,
    }) 
    .to('.gsap-box', {
      width: 0,
      stagger: 0.4,
      display: 'block',
      ease: 'power4.out',
    }, '<')
    .to('.gsap-boxImage', {
      stagger: 0.4,
      display: 'block',
      ease: 'none',
      opacity: 0,
    }, '<0.4')
    .to(loader.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => { onLoadingComplete(false) }
    })
  }, { scope: loader });

  return ( 
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-[var(--dark)] overflow-y-scroll" ref={loader}>

        <div className={`${styles.loader} gsap-loader scale-100`}>
          <div className={`${styles.boxWrapper} relative flex w-[320px] h-[180px] md:w-[500px] md:h-[282px] gsap-boxWrapper`}>
            <div className={`${styles.box} gsap-box bg-[#6fa0c0]`}></div>
            <Image src="/photo/hero/1.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
            <div className={`${styles.box} gsap-box bg-[#6fa0c0]`}></div>
            <Image src="/photo/hero/2.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
            <div className={`${styles.box} gsap-box bg-[#6fa0c0]`}></div>
            <Image src="/photo/hero/3.jpg" alt="zdjęcie" className={`${styles.box} gsap-boxImage`} fill priority />
            <div className={`${styles.box} gsap-box bg-[#6fa0c0]`}></div>
          </div>

          {/* <Image
            className='mt-6 absolute bottom-5 right-5'
            src="/skalniak-logo.png"
            alt="Kazimierz Skalniak FILM"
            width={86}
            height={20}
            priority
          /> */}
          
          <h2 className={`${CostarOliya.className} text-[1.9rem] mt-4 block`}>Skalniak</h2>
        </div>
    </div>
  );
}

export default Loader;