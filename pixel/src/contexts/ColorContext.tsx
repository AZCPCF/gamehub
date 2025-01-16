import { createContext, FC, PropsWithChildren, useState } from "react";
import { colors } from "../constants/colors";

export const ColorContext = createContext({
  color: "",
  setColor: (color: string) => {
    console.log(color);
  },
});
export const ColorContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState(colors['red']['500']);
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
