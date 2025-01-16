import { FC } from "react";
import Atom from ".";

const AtomCreator: FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }, (_,index) => (
        <Atom key={index}/>
      ))}
    </>
  );
};
export default AtomCreator;
