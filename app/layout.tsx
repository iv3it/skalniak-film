import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazimierz Skalniak FILM",
  description: "Kazimierz Skalniak Filmowanie i Fotografia. Sesje weselne, plenerowe, eventowe, teledyski, zdjęcia motoryzacyjne na terenie województwa świętokrzyskiego i całej Polski.",
  themeColor: '#dc8f42'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
