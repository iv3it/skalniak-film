import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Fotografia | Skalniak FILM | Kazimierz Skalniak",
  description: "Portfolio, zdjęcia ślubne, wesele, sesje plenerowe, portrety, eventy, motoryzacyjne.",
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