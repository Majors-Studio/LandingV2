"use client";

import { createContext, useContext } from "react";

interface layoutInitialState {
 
}



const HeroContext = createContext({} as layoutInitialState);

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
    
  const value: layoutInitialState = {

  };

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
};

export const useHeroContext = () => {
  return useContext(HeroContext);
};
