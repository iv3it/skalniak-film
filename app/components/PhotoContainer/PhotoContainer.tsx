'use client'

import styles from './photoContainer.module.scss';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PhotoContainer = ({ data } : any) => {
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
      {data && data.map((item : any, index : number) =>
        <div className={styles.photoBox} key={index}>
          <Link href={item.url}>
            <div className={`${styles.photoWrapper} gsap-photoWrapper`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.photo.data.attributes.url}`}
                alt="zdjęcie"
                className={`${styles.photo} gsap-photo`}
                width={1080}
                height={1315}
                priority
              />
            </div>
            <p className='text-xl text-[var(--white)] mt-4 font-medium text-right'>{ item.description }</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PhotoContainer;