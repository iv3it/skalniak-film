import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Ślubna | Skalniak FILM | Kazimierz Skalniak",
  description: "Oferta pakietów ślubnych dostosowanych do Twoich potrzeb.",
  themeColor: '#dc8f42'
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