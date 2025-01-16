import { FC, PropsWithChildren } from "react";
import { useGameContext } from "../contexts/GameContext";

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const { isDay } = useGameContext();
  return (
    <div
      onKeyDown={(e) => {
        console.log(e);
      }}
      className={`w-full h-[100vh] bg-[#242424] flex justify-center items-center ${className}`}
      style={{ backgroundColor: isDay ? "rgb(156, 159, 161)" : "#001f3f" }}
    >
      {children}
    </div>
  );
};
