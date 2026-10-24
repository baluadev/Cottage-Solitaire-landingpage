import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Cozy picture-matching solitaire`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Cozy solitaire: sort picture cards by category, clear the board, grow a garden. 960+ levels, hundreds of hand-drawn cards, no ads mid-level.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: site.name,
    description:
      "A cozy twist on solitaire. Sort picture cards by category, clear the board and watch your cottage garden bloom.",
    type: "website",
    images: [{ url: "/images/hog_keyart.png", width: 600, height: 900 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#56724F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Nunito:wght@400;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
