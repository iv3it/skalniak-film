'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Satoshi } from './fonts';
import EntranceOpacity from './components/EntranceOpacity/EntranceOpacity';
import Navigation from './components/Navigation/Navigation';
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5}}>
      <EntranceOpacity />
      <main className={`${Satoshi.className}`}>
        <Navigation />
        <Hero />
      </main>
    </ReactLenis>
  );
}