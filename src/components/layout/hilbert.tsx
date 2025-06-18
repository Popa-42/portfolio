"use client";

import React, { useEffect, useRef } from "react";
import { hilbert } from "@/lib/math";

function scalePoints(points: number[][], size: number) {
  const xs = points.map(([x]) => x);
  const ys = points.map(([_, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  return points.map(([x, y]) => [((x - minX) / (maxX - minX)) * size, ((y - minY) / (maxY - minY)) * size]);
}

type HilbertBackgroundProps = {
  order?: number;
  tileSize?: number;
  lineWidth?: number;
  mouseRadius?: number;
  strokeColor?: { r: number; g: number; b: number; a: number };
  hoverColor?: { r: number; g: number; b: number; a: number };
};

export default function HilbertBackground({
  order = 4,
  tileSize = 600,
  lineWidth = 1,
  mouseRadius = 100,
  strokeColor = { r: 127, g: 127, b: 127, a: 0.05 },
  hoverColor = { r: 51, g: 157, b: 255, a: 0.5 },
}: HilbertBackgroundProps) {
  const canvasRef: React.RefObject<HTMLCanvasElement | null> = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Start weit außerhalb

  useEffect(() => {
    const gap = tileSize / (Math.pow(2, order) - 1);
    const tileSizeWithGap = tileSize + gap;

    const rawPoints = hilbert(order);
    const scaledPoints = scalePoints(rawPoints, tileSize);
    const shiftedPoints = scaledPoints.map(([x, y]) => [x + gap / 2, y + gap / 2]);

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    window.addEventListener("mousemove", onMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    let animFrame: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const mouse = mouseRef.current;
      const cols = Math.ceil(ctx.canvas.width / tileSizeWithGap);
      const rows = Math.ceil(ctx.canvas.height / tileSizeWithGap);

      for (let i = 0; i < cols; ++i) {
        for (let j = 0; j < rows; ++j) {
          const xOffset = i * tileSizeWithGap;
          const yOffset = j * tileSizeWithGap;

          for (let k = 1; k < shiftedPoints.length; ++k) {
            const [x1, y1] = shiftedPoints[k - 1];
            const [x2, y2] = shiftedPoints[k];
            const cx = xOffset + (x1 + x2) / 2;
            const cy = yOffset + (y1 + y2) / 2;
            const maxDist = mouseRadius;
            const dist = Math.sqrt((cx - mouse.x) ** 2 + (cy - mouse.y) ** 2);
            const t = Math.max(0, Math.min(1, 1 - dist / maxDist)); // 1 nahe, 0 fern

            const r = strokeColor.r + t * (hoverColor.r - strokeColor.r);
            const g = strokeColor.g + t * (hoverColor.g - strokeColor.g);
            const b = strokeColor.b + t * (hoverColor.b - strokeColor.b);
            const a = strokeColor.a + t * (hoverColor.a - strokeColor.a);

            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;

            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(xOffset + x1, yOffset + y1);
            ctx.lineTo(xOffset + x2, yOffset + y2);
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    }

    animFrame = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className="pointer-events-none fixed inset-0 -z-30 block h-dvh w-dvw" ref={canvasRef} />;
}
