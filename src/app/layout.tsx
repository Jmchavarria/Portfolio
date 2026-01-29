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
  weight: ["400"],
  variable: "--font-stalinist_one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhon M - Desarrollador Full Stack",
  description:
    "Portfolio de desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
