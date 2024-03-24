import Image from "next/image";
import styles from './contact.module.scss';

const Contact = () => {
  return ( 
    <section className="container mx-auto mt-36 my-10 px-4" id='contact'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col justify-between'>
          <p className="text-[2rem] font-medium max-w-[90%] lg:max-w-[33rem]">Zapraszam do napisania sms-a lub e-maila z datą i lokalizacją ślubu.</p>
          <p className="text-[0.95rem] mt-[3rem] lg:mt-[7rem] max-w-[70%] md:max-w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dignissimos tenetur sequi ipsa at assumenda!</p>
        </div>
        <div className="flex flex-col justify-end mt-12 lg:mt-0">
          <div>
            <div className="flex flex-col text-[1.4rem] uppercase font-medium mb-8">
              <a href='https://maps.app.goo.gl/3MAAH5wWvpUVzrMUA' target='_blank' rel='noreferrer'>Potok 125, 28-225 Potok</a>
              <a href='mailto:kskalniak1992@gmail.com'>kskalniak1992@gmail.com</a>
              <a href='tel:+48514743677'>+48 514-743-677</a>
            </div>
          </div>
          <div>
            <ul className='flex flex-col mt-2'>
              <li className={styles.contactLink}>
                <a href='https://www.facebook.com/people/Kazimierz-Skalniak-Film/100082278789126/' target='_blank' rel='noreferrer' className={styles.contactLinkA}>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow"
                    className={styles.arrow}
                    width={50}
                    height={50}
                    priority
                  />
                  <span>FACEBOOK</span>
                </a>
              </li>
              <li className={styles.contactLink}>
                <a href='https://www.instagram.com/kazimierz_skalniak/' target='_blank' rel='noreferrer' className={styles.contactLinkA}>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow"
                    className={styles.arrow}
                    width={50}
                    height={50}
                    priority
                  />
                  <span>INSTAGRAM</span>
                </a>
              </li>
              <li className={styles.contactLink}>
                <a href='https://www.youtube.com/channel/UCW0T7ISuP2Nn7BD3NHY-ihA' target='_blank' rel='noreferrer' className={styles.contactLinkA}>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow"
                    className={styles.arrow}
                    width={50}
                    height={50}
                    priority
                  />
                  <span>YOUTUBE</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;