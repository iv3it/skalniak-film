import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Filmowanie | Skalniak FILM | Kazimierz Skalniak",
  description: "Portfolio, filmy ślubne, wesele, eventy, teledyski, motoryzacyjne. Fotograf, Kielce, Ostrowiec Świętokrzyski, Skarżysko Kamienna, Sandomierz, Kraków, Szydłów, Pierzchnica, Chmielnik, Potok, Świętokrzyskie.",
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