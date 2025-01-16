import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-full h-[100vh] bg-[#242424] flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};
