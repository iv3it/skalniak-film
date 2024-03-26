import styles from './about.module.scss';
import Link from 'next/link';
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 md:py-36 min-h-screen bg-[var(--white)] flex items-center" id='about'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div className='md:max-w-[60%] pr-6 md:pr-14 md:mb-0'>
            <h1 className="text-[3.2rem] lg:text-[4rem] font-medium text-left">O mnie</h1>
            <p className="text-lg mt-10 md:mt-16">
              Hej, mam na imię Kazimierz. Zajmuję się filmowaniem oraz fotografią.
              Współpracuję sam lub w duecie z Kamilem, który jest fotografem. Możesz go znać pod pseudonimem „Aparat na Ślub". Tutaj można znaleźć jego prace <a href="https://aparatnaslub.com" target='_blank' rel='noreferrer'>aparatnaslub.com</a>. 
            </p>
            <p className="text-lg mt-10">
              Żadne wyzwanie nie jest nam straszne. Jeśli chcesz mieć takie obrazki w swoim albumie, to napisz lub zadzwoń, aby zarezerwować termin.
              Działam na terenie całej Polski.
            </p>
            <Link href="#contact" className={styles.contactLink}>CONTACT</Link>
          </div>

          <Image
            src="/kazimierzskalniak.png"
            alt="Kazimierz Skalniak"
            className={styles.image}
            width={650}
            height={880}
            priority
          />
        </div>
      </div>
    </section>
  ) 
}