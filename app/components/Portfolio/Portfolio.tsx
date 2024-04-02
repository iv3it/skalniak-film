import PhotoContainer from '../PhotoContainer/PhotoContainer';
import VideoContainer from '../VideoContainer/VideoContainer';

export default function Work() {
  return (
    <section className="bg-[var(--white)] flex flex-row items-center justify-center min-h-screen py-20 md:py-20 overflow-x-hidden" id='portfolio'>
      <div className='container mx-auto px-4'>
        <h2 className="text-[3.2rem] lg:text-[4rem] text-[var(--grey)]">Najnowsze</h2>
        <h2 className="text-[3.2rem] lg:text-[4rem] font-medium text-[var(--dark)] lg:max-w-[60%]">Eventy, filmy, zdjęcia i teledyski ślubne</h2>
        <h3 className="text-[1.8rem] lg:text-[1.4rem] text-[var(--grey)] my-6">Sprawdź moje najnowsze realizacje.</h3>

        <PhotoContainer />
        <VideoContainer />
      </div>
    </section>
  ) 
}