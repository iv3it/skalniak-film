'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisOptions = {
    duration: 1.5,
    lerp: 0.05,
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: true,
    touchMultiplier: 2,
  };

  // const lenis = useLenis((scroll) => {
  //   console.log(scroll);
  // })

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  ) 
  
}