import Link from 'next/link'
import Image from "next/image";
import Navigation from './components/Navigation/Navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <Image src='/photo/hero.webp' alt="zdjęcie" className="bg-404" fill priority />
      <div className='relative w-screen h-screen flex justify-center items-center flex-col'>
        <h2 className='font-bold text-5xl md:text-[10rem] mb-6'>404</h2>
        <p>Strona nie istnieje.</p>
        <Link href="/" className='link'>Strona główna</Link>
      </div>
    </>
  )
}