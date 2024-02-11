"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must use within THemeProvider");

  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const handleThemeToggle = () => {
    const storageTheme = localStorage.getItem("theme");
    if (
      storageTheme === "dark"
      //  ||
      // (!storageTheme && window.matchMedia("prefer-color-scheme: dark").matches)
    ) {
      // setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      // setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeToggle();
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
