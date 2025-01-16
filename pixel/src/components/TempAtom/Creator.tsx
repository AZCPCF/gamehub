import { FC } from "react";
import TempAtom from ".";

const TempAtomCreator: FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }, (_,index) => (
        <TempAtom key={index} />
      ))}
    </>
  );
};
export default TempAtomCreator;
