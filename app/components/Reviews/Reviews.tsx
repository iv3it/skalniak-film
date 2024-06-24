'use client'

import styles from './reviews.module.scss';
import Slider from "react-slick";

export default function Reviews({ data } : any) {
  let settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <section className='my-32 bg-[var(--dark)]'>
      <div className='container mx-auto px-4'>
        <h2 className={`${styles.sectionTitle}`}>{ data.title }</h2>
        <Slider {...settings}>
          {data.items.map((item : any, index : number) => 
            <div key={index}>
              <div className={styles.box}>
                <p className={styles.review}>{ item.description }</p>
                <p className={styles.name}>{ item.name }</p>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
}
