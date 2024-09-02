'use client'

import styles from './photoContainer.module.scss';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PhotoContainer = ({portfolioPhotosCMS} : any) => {
  let data = portfolioPhotosCMS.data.portfolioPhotosCollection.items[0];
  const photoContainer = useRef<HTMLElement | any>();

  useEffect(() => {
    ScrollTrigger.refresh();    
  }, [])

  useGSAP(() => {
    gsap.utils.toArray('.gsap-photo').forEach((item : any, i)=>{  
      gsap.to(item, {
        yPercent: 25,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
        }
      });
    });
  }, {
    scope: photoContainer,
  });

  return ( 
    <div ref={photoContainer} className={`mt-20 px-4 container mx-auto`}>
      {data && data.photoCategoriesCollection.items.map((item : any, index : number) =>
        <div key={index} className='mt-20'>
          <h3 className='text-[var(--white)] text-[2.1rem] md:text-[2.3rem] mb-[2rem] font-medium'>{item.title}</h3>

          <div className={`${styles.photosGrid}`}>
            {item.photosCollection.items.map((photo : any, index : number) =>
              <div className={styles.photoBox} key={index}>
                <Link href={photo.url} target='_blank' rel='noopener'>
                  <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
                    <Image
                      src={photo.url}
                      alt="zdjęcie"
                      className={`${styles.photo} gsap-photo`}
                      width={1080}
                      height={1315}
                      priority
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoContainer;