import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Oferta Ślubna | Skalniak FILM | Kazimierz Skalniak",
  description: "Oferta pakietów ślubnych dostosowanych do Twoich potrzeb. Fotograf, Kielce, Ostrowiec Świętokrzyski, Skarżysko Kamienna, Sandomierz, Kraków, Szydłów, Pierzchnica, Chmielnik, Potok, Świętokrzyskie.",
};

export const viewport: Viewport = {
  themeColor: '#1a1919'
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    {children}
  </section>
}