'use client';

import styles from './entranceOpacity.module.css';
import { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const EntranceOpacity = () => {
  const entranceAnimation = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline().to(entranceAnimation.current,
    {
      opacity: 0,
      display: 'none',
      ease: "power1.out",
      duration: 1.3,
    });
  }, {
    scope: entranceAnimation,
  });

  return (
    <div ref={entranceAnimation} className={styles.entranceOpacity}></div>
  );
}

export default EntranceOpacity;