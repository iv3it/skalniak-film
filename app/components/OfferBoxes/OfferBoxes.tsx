'use client'

import styles from './offerBoxes.module.scss';
import Image from "next/image";
import Link from 'next/link';

const OfferBoxes = ({offerBoxesCMS} : any) => {
  let data = offerBoxesCMS.data.offerBoxesCollection.items;

  return ( 
    <section className='my-32' id="portfolio">
      <div className='container mx-auto px-4 max-w-[80%]'>
        <div className='flex flex-col items-center w-full'>
          <p className='text-3xl font-medium text-[var(--white)] text-center max-w-[60%] mb-20'>Portfolio.</p>
        </div>
        <div className={`${styles.boxGrid}`}>
          {data.map((item : any, index : number) => 
            <Link href={item.link.url} className={styles.box} key={index}>
              <div className={styles.tint}></div>
              <Image
                src={item.background.url}
                alt="zdjęcie"
                className={`${styles.photo} gsap-offerPhoto`}
                width={1080}
                height={1315}
                priority
              />
              <div className={styles.titleBox}>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.button}>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow"
                    className={styles.arrow}
                    width={50}
                    height={50}
                    priority
                  />
                  ZOBACZ WIĘCEJ
                </button>
                <p className={styles.title}>{item.title}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default OfferBoxes;