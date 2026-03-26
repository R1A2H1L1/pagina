import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mi Proyecto",
  description: "Hecho con Next.js y listo para Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
