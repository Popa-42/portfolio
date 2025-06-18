import React from "react";
import type { Metadata } from "next";
import "../../public/assets/styles/globals.css";

import { Archivo, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { hilbert } from "@/lib/math";

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
  function scalePoints(points: number[][], size: number) {
    const xs = points.map(([x, _]) => x);
    const ys = points.map(([_, y]) => y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    return points.map(([x, y]) => [((x - minX) / (maxX - minX)) * size, ((y - minY) / (maxY - minY)) * size]);
  }

  const order = 7;
  const tileSize = 1024;
  const gap = tileSize / (Math.pow(2, order) - 1);
  const points = hilbert(order);
  const scaledPoints = scalePoints(points, tileSize).map(([x, y]) => [x + gap / 2, y + gap / 2]);
  const pathData = scaledPoints.map(([x, y]) => `${y},${x}`).join(" ");
  const tileSizeWithGap = tileSize + gap;

  return (
    <html lang="en">
      <body className={cn(archivo.variable, geist.variable, "font-sans antialiased")}>
        <main className="h-dvh w-dvw">{children}</main>
        <svg
          className={`
            pointer-events-none fixed top-1/2 left-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 transform opacity-5
            dark:opacity-10
          `}
          width="100dvw"
          height="100dvh"
        >
          <defs>
            <pattern id="hilbert" width={tileSizeWithGap} height={tileSizeWithGap} patternUnits="userSpaceOnUse">
              <polyline fill="none" stroke="#888" strokeWidth="1" strokeLinejoin="round" points={pathData} />
            </pattern>
          </defs>
          <rect width="100vw" height="100vh" fill="url(#hilbert)" />
        </svg>
      </body>
    </html>
  );
}
