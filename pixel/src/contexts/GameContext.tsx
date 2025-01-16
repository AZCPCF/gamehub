import React, { createContext, useContext, useState } from "react";
import { ColorContextProvider } from "./ColorContext";

type GameContextType = {
  isDay: boolean;
  toggleDayNight: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDay, setIsDay] = useState(false);

  const toggleDayNight = () => setIsDay((prev) => !prev);

  return (
    <GameContext.Provider value={{ isDay, toggleDayNight }}>
        <ColorContextProvider>
      {children}
        </ColorContextProvider>
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGameContext must be used within a GameProvider");
  return context;
};
