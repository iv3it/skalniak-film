'use client';

import styles from './navigation.module.scss';
import { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

const Navigation = () => {
  let [openMenu, setOpenMenu] = useState<Boolean>(false);
  const navigation = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    navigation.current && (navigation.current.style.opacity = '1');
    tl.current = gsap.timeline().fromTo('.gsap-navigation', 
    { 
      opacity: 0,
    }, 
    {
      opacity: 1,
      ease: "power2.out",
      delay: 0.2,
      duration: 1.2,
    });
  }, {
    scope: navigation,
  });

  let toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return ( 
    <div className="fixed top-0 z-20 w-full" ref={navigation} style={{ opacity: 0 }}>
      <div className="container mx-auto px-4">
        <nav className='hidden lg:flex justify-between items-center py-3 gsap-navigation'>
          <h2 className={`${styles.logo}`}>Kazimierz<br/>Skalniak</h2>
          <ul className={styles.navList}>
            <li className={styles.navListItem}><Link href="/portfolio" className={styles.navListItemA}>PORTFOLIO</Link></li>
            <li className={styles.navListItem}><Link href="#about" className={styles.navListItemA}>O MNIE</Link></li>
            <li className={styles.navListItem}><Link href="#contact" className={styles.navListItemA}>KONTAKT</Link></li>
          </ul>
        </nav>

        <nav className='flex justify-between items-center py-3 lg:hidden'>
          <h2 className={`${styles.logo}`}>Kazimierz<br/>Skalniak</h2>
          <button className={styles.navButton} onClick={() => toggleMenu()}>MENU</button>
        </nav>

        {openMenu && 
          <nav className={`${styles.navigationMobile} py-3 px-4 navigation-mobile`}>
            <div className='flex justify-between'>
              <h2 className={`${styles.logo}`}>Kazimierz<br/>Skalniak</h2>
              <button className={styles.navButton} onClick={() => toggleMenu()}>ZAMKNIJ</button>
            </div>

            <div className='mt-16'>
              <ul className={`${styles.navListMobile}`}>
                <li className={styles.navListItemMobile}><Link href="/portfolio" onClick={() => setOpenMenu(false)}>PORTFOLIO</Link></li>
                <li className={styles.navListItemMobile}><Link href="#about" onClick={() => setOpenMenu(false)}>O MNIE</Link></li>
                <li className={styles.navListItemMobile}><a href='https://www.facebook.com/people/Kazimierz-Skalniak-Film/100082278789126/' target='_blank' rel='noreferrer' onClick={() => setOpenMenu(false)}>FACEBOOK</a></li>
                <li className={styles.navListItemMobile}><a href='https://www.instagram.com/kazimierz_skalniak/' target='_blank' rel='noreferrer' onClick={() => setOpenMenu(false)}>INSTAGRAM</a></li>
                <li className={styles.navListItemMobile}><a href='https://www.youtube.com/channel/UCW0T7ISuP2Nn7BD3NHY-ihA' target='_blank' rel='noreferrer' onClick={() => setOpenMenu(false)}>YOUTUBE</a></li>
                <li className={styles.navListItemMobile}><Link href="#contact" onClick={() => setOpenMenu(false)}>KONTAKT</Link></li>
              </ul>
            </div>
          </nav>
        }
      </div>
    </div>
  );
}

export default Navigation;