'use client';

import styles from './offer.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Offer({offerCMS} : any) {
  let data = offerCMS.data.offerCollection.items[0];
  const offer = useRef<HTMLElement | any>();
  
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [])

  useGSAP(() => {
    offer.current && (offer.current.style.opacity = '1');

    gsap.from('.gsap-boxFoto', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#gsap-FotoContainer",
        start: "top bottom-=100px",
        toggleActions: "restart none none none",
        // markers: true,
      }
    });

    gsap.from('.gsap-boxFilm', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#gsap-FilmContainer",
        start: "top bottom-=100px",
        toggleActions: "restart none none none",
        // markers: true,
      }
    });
  }, {
    scope: offer,
  });

  return (
    <section ref={offer} style={{ opacity: 0 }} className="bg-[var(--dark)]">
      <div className='container mx-auto px-4'>
        {data.packetTypeCollection.items.map((item : any, index : number) => 
          <div key='1' className='mb-20'>
            <h2 className="text-[var(--white)] text-[2.1rem] md:text-[2.3rem] mb-[2rem] font-medium" id="gsap-FotoContainer">{item.name}</h2>

            <div className={`${styles.boxes} grid grid-cols-1 lg:grid-cols-3 gap-4`}>
              {item.packetCollection.items.map((box : any, index : number) => 
                <div className={`${styles.box} gsap-boxFoto`} key={index}>
                  <div className={styles.packet}>
                    <p className={styles.packetText}>{box.text}</p>
                    <p className={styles.packetName}>{box.name}</p>
                  </div>

                  <ul className={styles.boxList}>
                    {box.includesList.map((listItem : any, index : number) => 
                      <li key={index} className={styles.boxListLi}>{listItem}</li>
                    )}
                  </ul>
                  <div className={styles.priceBox}>
                    <p className={styles.priceText}>Cena</p>
                    <p className={styles.price}>{box.price}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
