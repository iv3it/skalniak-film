import { Old_Standard_TT } from '../../fonts';
import Image from "next/image";
import styles from './hero.module.css';

const Hero = () => {
  return ( 
    <section className='pt-16'>
      <div className="container mx-auto px-4">
        <Image
          src="/hero.jpg"
          alt="background image"
          className={styles.image}
          width={1600}
          height={900}
          priority
        />
        <div className="flex flex-col justify-between md:items-center md:flex-row-reverse">
          <h1 className="text-[3.2rem] lg:text-[4rem] font-medium text-left md:text-right">Fotografia <span className={`${Old_Standard_TT.className} italic font-semibold`}>&</span> film</h1>
          <h2 className="text-[0.95rem] my-4 md:my-0 pr-8 md:max-w-[17.5rem]">Hej, mam na imię Kazimierz. Zajmuję się filmowaniem oraz fotografią. Współpracuję sam lub w duecie z Kamilem, który jest fotografem.</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;