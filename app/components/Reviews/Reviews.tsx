'use client'

import styles from './reviews.module.scss';
import Image from "next/image";
import Slider from "react-slick";

export default function Reviews() {
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
    <section className='py-10 bg-[var(--white)]'>
      <div className='container mx-auto px-4'>
        <h2 className={`${styles.sectionTitle}`}>Opinie klientów</h2>

        <Slider {...settings}>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Super podejście do klienta. Nowatorskie spojrzenie na tworzone firmy. Pracują profesjonalnie i dyskretnie, bez nadmiernego "wchodzenia" na pierwszy plan obsługiwanej imprezy. Super kontakt i miłe usposobienie osób przydzielonych do zadania. Polecam serdecznie.</p>
              <p className={styles.name}>Piotr</p>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Fotograf godny polecenia. Bardzo miły, otwarty i kreatywny. Zdjęcia pełen profesjonalizm.</p>
              <p className={styles.name}>Katarzyna</p>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Szczerze polecam. Profesjonalnie i bardzo pięknie wykonana sesja. Podejście do klienta kontakt i zaangażowanie do wykonywanej pracy na najwyższym poziomie. Jeszcze raz dziękuję i pozdrawiam.</p>
              <p className={styles.name}>Dariusz</p>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Świetny fotograf i profesjonalne wykonanie. Polecam gorąco.</p>
              <p className={styles.name}>Lena</p>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Bardzo profesjonalny twórca, widać artyzm i serce wkładane we wszystkie prace wizualne, które realizuje. Gorąco polecam zarówno do zdjęć, filmów biznesowych, jak i prywatnych.</p>
              <p className={styles.name}>Wojciech</p>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <p className={styles.review}>Polecam, nasza współpraca przebiegła pomyślnie i jestem bardzo zadowolony ze zdjęć.</p>
              <p className={styles.name}>Dominik</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
