"use client";

import confetti from "canvas-confetti";
import React, { useRef } from "react";

export default function Home() {
  const touchRef = useRef<HTMLSpanElement>(null);

  function shootFromElement(el: HTMLSpanElement | null) {
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const defaults = {
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
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            UI elements
          </h1>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            you want
          </h1>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            to{" "}
            <span
              ref={touchRef}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
              onMouseEnter={handleHover}
            >
              touch
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
