// src/hooks/useMediaQuery.ts

import { useState, useEffect, useCallback } from "react";

const useMediaQuery = (query: string): boolean => {
  // თავდაპირველი მნიშვნელობა იღება მხოლოდ კლიენტზე (browser-ში)
  // ეს თავიდან აგვაცილებს setState-ს ეფექტში
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false; // SSR-ისთვის
    }
    return window.matchMedia(query).matches;
  });

  // listener ფუნქცია მემოიზებულია
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // აქ აღარ ვაკეთებთ სინქრონულ setMatches-ს!
    // თუ თავდაპირველი მნიშვნელობა შეიცვალა render-ებს შორის,
    // React თვითონ გაასწორებს შემდეგ render-ში

    mediaQuery.addEventListener("change", handleChange);

    // cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query, handleChange]);

  return matches;
};

export default useMediaQuery;