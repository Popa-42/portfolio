import React from "react";
import type { Metadata } from "next";
import "../../public/assets/styles/globals.css";

import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { clsx } from "clsx";
import { SiteFooter } from "@/components/layout/footer";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Hey 👋 | Just Popa",
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
      <body className="antialiased">
        <main
          className={clsx(
            ibmPlexSans.variable,
            ibmPlexSerif.variable,
            ibmPlexMono.variable,
            "h-[calc(100dvh-3.75rem-1px)] font-sans",
          )}
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
