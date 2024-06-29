import styles from './videoContainer.module.scss';

const VideoContainer = ({ data } : any) => {
  return (
    <div className={`relative flex flex-col items-center md:my-32`}>
      {data && data.map((item : any, index : number) =>
        <div key={index} className='flex flex-col items-center w-full md:w-[80%] px-4 [&:not(:last-child)]:mb-32'>
          <video loop autoPlay muted playsInline controls className={styles.video} poster=''>
            <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.video.data.attributes.url}`} type={item.mime}/>
          </video>
          <div className='flex flex-col items-center w-full'>
            <p className='text-3xl font-bold text-[var(--white)] text-center mt-20 px-2'>{ item.title }</p>
            <p className='text-lg text-[var(--white)] text-center mt-8 md:max-w-[50%] px-4'>{ item.description }</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;