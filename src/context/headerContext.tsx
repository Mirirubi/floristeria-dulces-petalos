"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderInfo {
  breadcrumbName?: string;
}

interface ContextType {
  headerInfo: HeaderInfo | null;
  setHeaderInfo: React.Dispatch<React.SetStateAction<HeaderInfo | null>>;
}

const HeaderContext = createContext<ContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfo | null>(null);

  return (
    <HeaderContext.Provider value={{ headerInfo, setHeaderInfo }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};

export default HeaderContext;
