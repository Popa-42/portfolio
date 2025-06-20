import React from "react";
import type { Metadata } from "next";
import "../../public/assets/styles/globals.css";

import { Archivo, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import HilbertBackground from "@/components/layout/hilbert";
import Header from "@/components/layout/header";

const archivo = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const geist = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Welcome | Popa's Website",
  description: "Welcome to my website",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "96x96",
      url: "/assets/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(archivo.variable, geist.variable, "h-dvh w-dvw font-sans antialiased")}>
        <Header />
        <main className="h-full w-full px-4">{children}</main>
        <HilbertBackground mouseRadius={150} order={5} lineWidth={1} tileSize={300} />
      </body>
    </html>
  );
}
