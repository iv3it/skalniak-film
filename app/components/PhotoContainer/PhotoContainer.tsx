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
    <div ref={photoContainer} className={`${styles.photosGrid} mt-20 px-4 container mx-auto`}>
      {data && data.photoCollection.items.map((item : any, index : number) =>
        <div className={styles.photoBox} key={index}>
          <Link href={item.image.url} target='_blank' rel='noopener'>
            <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
              <Image
                src={item.image.url}
                alt="zdjęcie"
                className={`${styles.photo} gsap-photo`}
                width={1080}
                height={1315}
                priority
              />
            </div>
            <p className='text-xl text-[var(--white)] mt-4 font-medium text-right'>{item.title}</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PhotoContainer;