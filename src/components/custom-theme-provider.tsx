"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    console.log("Setting theme to:", newTheme);
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);

    // Apply the theme to the document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useCustomTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
}
