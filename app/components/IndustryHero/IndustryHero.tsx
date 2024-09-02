import Image from "next/image";
import styles from './industryHero.module.scss';

const IndustryHero = ({ industryHeroCMS, heroBackground } : any) => {
  let data = industryHeroCMS.items[0];

  return (
    <>
      <div className="relative">
        <Image
          src={data.heroBackground.url}
          alt="zdjęcie"
          className={`${styles.photo} gsap-offerBox`}
          width={1080}
          height={1315}
          priority
        />
        <div className='absolute w-screen h-screen top-0 py-16'>
          <div className={`container mx-auto h-full px-4 flex items-end gsap-offerBox`}>
            <h2 className="text-[var(--white)] font-medium text-[2.6rem] md:text-[8.2rem] lg:max-w-[80%] xl:max-w-[70%]">{ data.title }</h2>
          </div>
        </div>
      </div>
      <div className='container mx-auto my-32 px-4'>
        <h2 className="text-[var(--white)] font-medium text-[1.35rem] md:text-[2.1rem] lg:max-w-[80%] xl:max-w-[70%]">{ data.description }</h2>
      </div>
    </>
  );
}

export default IndustryHero;