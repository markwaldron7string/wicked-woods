"use client";

import { createContext, useContext, useState } from "react";

type ChromeContextValue = {
  navLinksVisible: boolean;
  setNavLinksVisible: (visible: boolean) => void;
};

const ChromeContext = createContext<ChromeContextValue | undefined>(undefined);

export function ChromeProvider({ children }: { children: React.ReactNode }) {
  const [navLinksVisible, setNavLinksVisible] = useState(true);

  return (
    <ChromeContext.Provider value={{ navLinksVisible, setNavLinksVisible }}>
      {children}
    </ChromeContext.Provider>
  );
}

export function useChrome() {
  const ctx = useContext(ChromeContext);
  if (!ctx) throw new Error("useChrome must be used within ChromeProvider");
  return ctx;
}
