import localFont from 'next/font/local'
import { DM_Sans } from 'next/font/google'

export const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-DM-Sans',
  display: 'swap',
})

export const CostarOliya = localFont({
  src: [
    {
      path: '../public/fonts/Costar-Oliya.ttf',
      weight: '400'
    },
  ],
  variable: '--font-costarOliya'
})