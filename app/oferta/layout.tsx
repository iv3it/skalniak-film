import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Ślubna | Skalniak FILM | Kazimierz Skalniak",
  description: "Oferta ślubna, zdjęcia, film.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    {children}
  </section>
}