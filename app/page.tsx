'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { DMSans } from './fonts';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5}}>
      <EntranceOpacity />
      <main className={`${DMSans.className}`}>
        <Navigation />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}