'use client';

import styles from './offer.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Offer() {
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
    
    <section ref={offer} style={{ opacity: 0 }} className="py-20 bg-[#e4e5ea]">
      <div className='container mx-auto my-10 px-4'>
        <h2 className="text-[2.6rem] md:text-[3.2rem] lg:max-w-[80%] xl:max-w-[70%]">Oferta pakietów ślubnych, pakiety można mieszać dowolnie.</h2>
      </div>
      <div className='container mx-auto my-10 px-4'>
        <h2 className="text-[2.1rem] md:text-[2.3rem] mt-[6rem] mb-[2rem] font-medium" id="gsap-FotoContainer">Fotografia</h2>

        <div className={`${styles.boxes} grid grid-cols-1 lg:grid-cols-3 gap-4`}>
          <div className={`${styles.box} gsap-boxFoto`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Srebrny</p>
            </div>

            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Przygotowania do ślubu</li>
              <li className={styles.boxListLi}>Ceremonia zaślubin</li>
              <li className={styles.boxListLi}>Pierwsza godzina wesela</li>
              <li className={styles.boxListLi}>300 zdjęć poddanych autorskiej obróbce</li>
              <li className={styles.boxListLi}>Drewniany pendrive</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>2500 zł</p>
            </div>
          </div>

          <div className={`${styles.box} gsap-boxFoto`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Złoty</p>
            </div>
            
            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Ceremonia zaślubin</li>
              <li className={styles.boxListLi}>Mini plener w dniu ślubu</li>
              <li className={styles.boxListLi}>Wesele do oczepin</li>
              <li className={styles.boxListLi}>400 zdjęć poddanych autorskiej obróbce</li>
              <li className={styles.boxListLi}>Pendrive</li>
              <li className={styles.boxListLi}>Drewniane pudełko</li>
              <li className={styles.boxListLi}>40 wydrukowanych zdjęć</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>2999 zł</p>
            </div>
          </div>

          <div className={`${styles.box} gsap-boxFoto`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Diamentowy</p>
            </div>
            
            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Przygotowania do ślubu</li>
              <li className={styles.boxListLi}>Błogosławieństwo</li>
              <li className={styles.boxListLi}>Ceremonia zaślubin</li>
              <li className={styles.boxListLi}>Mini plener w dniu ślubu</li>
              <li className={styles.boxListLi}>Wesele do oczepin</li>
              <li className={styles.boxListLi}>500 zdjęć poddanych autorskiej obróbce</li>
              <li className={styles.boxListLi}>Pendrive</li>
              <li className={styles.boxListLi}>Drewniane pudełko</li>
              <li className={styles.boxListLi}>40 wydrukowanych zdjęć</li>
              <li className={styles.boxListLi}>Fotoksiążka</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>3499 zł</p>
            </div>
          </div>
        </div>

        <h2 className="text-[2.1rem] md:text-[2.3rem] mt-[6rem] mb-[2rem] font-medium" id="gsap-FilmContainer">Film</h2>

        <div className={`${styles.boxes} grid grid-cols-1 lg:grid-cols-3 gap-4`}>
          <div className={`${styles.box} gsap-boxFilm`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Srebrny</p>
            </div>
            
            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Film ślubny 20-30 minut</li>
              <li className={styles.boxListLi}>Teledysk 3 minuty</li>
              <li className={styles.boxListLi}>Od przygotowań do oczepin</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>2500 zł</p>
            </div>
          </div>

          <div className={`${styles.box} gsap-boxFilm`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Złoty</p>
            </div>
            
            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Film ślubny 30-45 minut - do uzgodnienia</li>
              <li className={styles.boxListLi}>Teledysk 3 minuty</li>
              <li className={styles.boxListLi}>Mini plener w dniu ślubu</li>
              <li className={styles.boxListLi}>Dron</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>2999 zł</p>
            </div>
          </div>

          <div className={`${styles.box} gsap-boxFilm`}>
            <div className={styles.packet}>
              <p className={styles.packetText}>Pakiet</p>
              <p className={styles.packetName}>Diamentowy</p>
            </div>

            <ul className={styles.boxList}>
              <li className={styles.boxListLi}>Film ślubny 30-120 minut - do uzgodnienia</li>
              <li className={styles.boxListLi}>Teledysk 3 minuty</li>
              <li className={styles.boxListLi}>Mini plener w dniu ślubu</li>
              <li className={styles.boxListLi}>Dron</li>
              <li className={styles.boxListLi}>Zajawka 1 minuta</li>
              <li className={styles.boxListLi}>Dodatkowy pendrive</li>
            </ul>
            <div className={styles.priceBox}>
              <p className={styles.priceText}>Cena</p>
              <p className={styles.price}>3499 zł</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
