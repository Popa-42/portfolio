"use client";

import confetti from "canvas-confetti";
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const touchRef = useRef<HTMLSpanElement>(null);

  function shootFromElement(el: HTMLSpanElement | null) {
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const defaults = {
      zIndex: -1,
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      origin: { x, y },
    };

    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  function handleHover() {
    const el = touchRef.current;
    shootFromElement(el);
    setTimeout(() => shootFromElement(el), 100);
    setTimeout(() => shootFromElement(el), 200);
  }

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center pr-8 lg:items-end">
          <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Small details,
          </h1>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            big{" "}
            <span
              ref={touchRef}
              className={`
                font bg-gradient-to-br from-pink-500 from-5% via-red-500 via-40% to-yellow-500 to-90% bg-clip-text
                text-transparent
                dark:from-pink-400 dark:via-red-400 dark:to-yellow-400
              `}
              onMouseEnter={handleHover}
              onTouchStart={handleHover}
            >
              impact
            </span>
          </h1>
        </div>
        <div className="h-0 w-96 border-b lg:h-full lg:w-0 lg:border-l" />
        <div className="flex w-full items-center justify-center pl-8 lg:justify-start">
          <Card className="w-96 bg-card/50">
            <CardContent>
              <h2 className="mb-3 text-xl leading-tight font-semibold">
                Obsessed with the details,
                <br />
                eager to{" "}
                <span
                  className={`
                    bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent
                    dark:from-blue-300 dark:via-cyan-300 dark:to-green-300
                  `}
                >
                  experiment
                </span>
              </h2>
              <p className="text-muted-foreground">
                I love crafting interfaces that are as enjoyable to use as they are to look at. This site is my
                playground for exploring UI, UX, and all the small things in between.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
