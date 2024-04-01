import styles from './videoContainer.module.scss';

const VideoContainer = () => {
  return ( 
    <div className={`relative flex flex-col items-center mt-40`}>
      <div className='flex flex-col items-center my-20 w-full md:w-[80%]'>
        <video loop autoPlay muted playsInline className={styles.video} poster='/video-barber-first-frame.png'>
          <source src="/video/Barber-Kozioł-Katowice.mp4" type="video/mp4"/>
          <source src="/video/Barber-Kozioł-Katowice.webm" type="video/webm"/>
        </video>
        <div className='flex flex-col items-center w-full'>
          <p className='text-3xl font-bold text-[var(--dark)] text-center mt-20'>Barber Kozioł Katowice</p>
          <p className='text-lg text-[var(--dark)] text-center mt-8 max-w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cumque facere rem non voluptas quaerat.</p>
        </div>
      </div>

      <div className='flex flex-col items-center my-20 w-full md:w-[80%]'>
        <video loop autoPlay muted playsInline className={styles.video} poster=''>
          <source src="/video/Hotel-Alpin-Szczyrk-Teledysk-Slubny-Sala.mp4" type="video/mp4"/>
        </video>
        <div className='flex flex-col items-center w-full'>
          <p className='text-3xl font-bold text-[var(--dark)] text-center mt-20'>Hotel Alpin Szczyrk</p>
          <p className='text-lg text-[var(--dark)] text-center mt-8 max-w-[50%]'>Teledysk ślubny - sala.</p>
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;