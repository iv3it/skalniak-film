import PhotoContainer from '../PhotoContainer/PhotoContainer';

export default function Work({ data } : any) {
  return (
    <section className="bg-[var(--dark)] flex flex-row items-center justify-center min-h-screen my-32 overflow-x-hidden" id='portfolio'>
      <div className='container mx-auto px-4'>
        <h2 className="text-[3.2rem] lg:text-[4rem] text-[var(--grey)]">{ data.newest }</h2>
        <h2 className="text-[3.2rem] lg:text-[4rem] font-medium text-[var(--white)] lg:max-w-[60%]">{ data.title }</h2>
        <h3 className="text-[1.8rem] lg:text-[1.4rem] text-[var(--white)] my-6">{ data.subtitle }</h3>

        <PhotoContainer data={data.photos} />
      </div>
    </section>
  ) 
}