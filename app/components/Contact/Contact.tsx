import Image from "next/image";
import styles from './contact.module.scss';

const Contact = ({ data } : any) => {
  return ( 
    <section className="bg-[var(--dark)] pt-20 pb-10" id='contact'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex flex-col justify-between'>
            <p className="text-[var(--white)] text-[2rem] font-medium max-w-[90%] lg:max-w-[33rem]">{ data.title }</p>
            <p className="text-[var(--white)] text-[0.95rem] mt-[3rem] lg:mt-[7rem] max-w-[70%] md:max-w-[42%]">{ data.description }</p>
          </div>
          <div className="flex flex-col justify-end mt-12 lg:mt-0">
            <div>
              <div className="text-[var(--white)] flex flex-col text-[1.4rem] uppercase font-medium mb-8">
                {data.contactLinks.map((item : any, index : number) =>
                  <a key={ index } href={ item.url } target='_blank' rel='noreferrer'>{ item.text }</a>
                )}
              </div>
            </div>
            <div>
              <ul className='flex flex-col mt-2'>
                {data.links.map((item : any, index : number) =>
                  <li key={index} className={styles.contactLink}> 
                    <a href={ item.url } target='_blank' rel='noreferrer' className={styles.contactLinkA}>
                      <Image
                        src="/arrow-right.svg"
                        alt="arrow"
                        className={styles.arrow}
                        width={50}
                        height={50}
                        priority
                      />
                      <span>{ item.text }</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;