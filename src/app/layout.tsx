import React from "react";
import type { Metadata } from "next";
import "../../public/assets/styles/globals.css";

import { Archivo, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn(archivo.variable, geist.variable, "font-sans antialiased")}>
        <main className="h-dvh w-dvw">{children}</main>
      </body>
    </html>
  );
}
