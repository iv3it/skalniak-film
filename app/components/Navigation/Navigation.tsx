'use client';

import { CostarOliya } from '../../fonts';
import styles from './navigation.module.scss';
import { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navigation = () => {
  const navigation = useRef<HTMLElement | any>();
  let [openMenu, setOpenMenu] = useState<Boolean>(false);

  let toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  useGSAP(() => {    
    gsap.timeline({ defaults: { autoAlpha: 0, opacity: 0, ease: "power4.in" } }).fromTo('.gsap-navigation', {
      opacity: 0,
    }, {
      delay: 0.3,
      opacity: 1,
      autoAlpha: 1,
      duration: 0.6,
    })
  }, { scope: navigation });

  return ( 
    <div className="fixed top-0 z-20 w-full" ref={navigation}>
      <div className="container mx-auto px-4">
        <nav className='hidden lg:flex justify-between items-center py-3 gsap-navigation invisible'>
          <Link href="/" className={`${styles.logo}`}>
            {/* <Image
              src="/skalniak-logo.png"
              alt="background image"
              width={144}
              height={32}
              priority
            /> */}

            <h2 className={`${CostarOliya.className} text-[1.9rem]`}>Skalniak</h2>
          </Link>
          <ul className={styles.navList}>
            <li className={styles.navListItem}><Link href="/#portfolio" className={styles.navListItemA}>PORTFOLIO</Link></li>
            <li className={styles.navListItem}><Link href="/#about" className={styles.navListItemA}>O MNIE</Link></li>
            <li className={styles.navListItem}><Link href="/oferta" className={styles.navListItemA}>OFERTA</Link></li>
            <li className={styles.navListItem}><Link href="#kontakt" className={styles.navListItemA}>KONTAKT</Link></li>
          </ul>
        </nav>

        <nav className='flex justify-between items-center py-3 lg:hidden'>
          <Link href="/">
            {/* <Image
              src="/skalniak-logo.png"
              alt="background image"
              className={`${styles.logo}`}
              width={288}
              height={63}
              priority
            /> */}

            <h2 className={`${CostarOliya.className} text-[1.9rem]`}>Skalniak</h2>
          </Link>
          <button className={styles.navButton} onClick={() => toggleMenu()}>MENU</button>
        </nav>

        {openMenu && 
          <nav className={`${styles.navigationMobile} py-3 px-4 navigation-mobile`}>
            <div className='flex justify-between'>
              <Link href="/" onClick={() => setOpenMenu(false)}>
                {/* <Image
                  src="/skalniak-logo.png"
                  alt="background image"
                  className={`${styles.logo} py-2`}
                  width={288}
                  height={63}
                  priority
                /> */}

                <h2 className={`${CostarOliya.className} text-[1.9rem]`}>Skalniak</h2>
              </Link>
              <button className={styles.navButton} onClick={() => toggleMenu()}>ZAMKNIJ</button>
            </div>

            <div className='mt-16'>
              <ul className={`${styles.navListMobile}`}>
                <li className={styles.navListItemMobile}><Link href="/#about" onClick={() => setOpenMenu(false)}>O mnie</Link></li>
                <li className={styles.navListItemMobile}><Link href="/#portfolio" onClick={() => setOpenMenu(false)}>Portfolio</Link></li>
                <li className={styles.navListItemMobile}><Link href="/oferta" onClick={() => setOpenMenu(false)}>Oferta</Link></li>
                <li className={styles.navListItemMobile}><Link href="/fotografia" onClick={() => setOpenMenu(false)}>Fotografia</Link></li>
                <li className={styles.navListItemMobile}><Link href="/film" onClick={() => setOpenMenu(false)}>Film</Link></li>
                <li className={styles.navListItemMobile}><Link href="#kontakt" onClick={() => setOpenMenu(false)}>Kontakt</Link></li>
              </ul>
            </div>
          </nav>
        }
      </div>
    </div>
  );
}

export default Navigation;