import type { Metadata } from "next";
import { Geist, Geist_Mono, Stalinist_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stalinist = Stalinist_One({
  weight: ['400'],
  variable: "--font-stalinist_one",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Jhon M - Desarrollador Full Stack",
  description: "Portfolio de desarrollador Full Stack especializado en React, Next.js, JavaScript y tecnologías modernas. Descubre mis proyectos y experiencia.",

  // Meta tags básicos
  keywords: "desarrollador, full stack, react, nextjs, javascript, portfolio, web developer, frontend, backend",
  authors: [{ name: "Jhon M" }],
  creator: "Jhon M",

  // Open Graph para LinkedIn/Facebook
  openGraph: {
    title: "Jhon M - Desarrollador Full Stack Portfolio",
    description: "Portfolio de desarrollador Full Stack especializado en React, Next.js y tecnologías modernas. Explora mis proyectos y experiencia.",
    url: "https://fa1137b4.portfolio-7qp.pages.dev",
    siteName: "Jhon M Portfolio",
    images: [
      {
        url: "https://fa1137b4.portfolio-7qp.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jhon M - Desarrollador Full Stack Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Jhon M - Desarrollador Full Stack",
    description: "Portfolio de desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
    images: ["https://fa1137b4.portfolio-7qp.pages.dev/og-image.png"],
  },

  // Meta adicionales para SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verificación y otros
  verification: {
    // Agrega aquí si tienes Google Search Console
    // google: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${stalinist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}