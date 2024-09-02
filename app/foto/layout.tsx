import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotografia | Skalniak FILM | Kazimierz Skalniak",
  description: "Portfolio, zdjęcia ślubne, wesele, sesje plenerowe, portrety, eventy, motoryzacyjne.",
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