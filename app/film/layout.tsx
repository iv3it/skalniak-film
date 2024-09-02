import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmowanie | Skalniak FILM | Kazimierz Skalniak",
  description: "Portfolio, filmy ślubne, wesele, eventy, teledyski, motoryzacyjne.",
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