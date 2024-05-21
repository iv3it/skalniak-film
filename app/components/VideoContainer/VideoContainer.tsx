import styles from './videoContainer.module.scss';

const VideoContainer = ({ data } : any) => {
  return ( 
    <div className={`relative flex flex-col items-center mt-40`}>
      {data && data.map((item : any, index : number) =>
        <div key={index} className='flex flex-col items-center my-20 w-full md:w-[80%]'>
          <video loop autoPlay muted playsInline className={styles.video} poster='/video-barber-first-frame.png'>
            <source src="/video/Barber-Kozioł-Katowice.mp4" type="video/mp4"/>
            <source src="/video/Barber-Kozioł-Katowice.webm" type="video/webm"/>
          </video>
          <div className='flex flex-col items-center w-full'>
            <p className='text-3xl font-bold text-[var(--dark)] text-center mt-20'>{ item.title }</p>
            <p className='text-lg text-[var(--dark)] text-center mt-8 max-w-[50%]'>{ item.description }</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;