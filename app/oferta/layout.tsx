import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Oferta Ślubna | Skalniak FILM | Kazimierz Skalniak",
  description: "Oferta pakietów ślubnych dostosowanych do Twoich potrzeb.",
};

export const viewport: Viewport = {
  themeColor: '#6fa0c0'
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