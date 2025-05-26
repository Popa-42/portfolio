import React from "react";
import type { Metadata } from "next";
import "../../public/assets/styles/globals.css";

import { Albert_Sans, Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/footer";
import SiteHeader from "@/components/layout/header";
import { cn } from "@/lib/utils";

const montserrat = Albert_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const raleway = Geist({
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
      <body className={cn(montserrat.variable, raleway.variable, "font-sans antialiased")}>
        <SiteHeader />
        <main className="h-[calc(100dvh-3.75rem-1px)] overflow-auto pt-[calc(3.75rem+1px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
