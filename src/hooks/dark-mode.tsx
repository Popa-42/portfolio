import { useEffect, useState, useCallback } from "react";

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );

  const toggleDarkMode = useCallback(() => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    setIsDark(mediaQuery.matches);

    const classChangeHandler = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    document.documentElement.addEventListener("classlistchange", classChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      document.documentElement.removeEventListener("classlistchange", classChangeHandler);
    };
  }, []);

  return [isDark, toggleDarkMode];
}
