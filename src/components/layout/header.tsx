"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle("dark", savedDarkMode);

    return () => {
      localStorage.setItem("darkMode", String(savedDarkMode));
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", String(!darkMode));
  };

  return (
    <header
      className={`
        bg-background/50 fixed top-0 z-50 flex h-15 w-full items-center justify-between border-b px-4 backdrop-blur-md
        md:px-6
      `}
    >
      <div className="flex w-full items-center justify-start">
        <h1 className="text-lg font-bold">Popa&apos;s Website</h1>
      </div>
      <div className="flex w-full justify-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="outline" onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <span className="sr-only">{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
