import { FC, useContext } from "react";
import { ColorContext } from "../../../contexts/ColorContext";

const Atom: FC = () => {
  const { color } = useContext(ColorContext);
  return (
    <div
      className={`w-[5px] h-[5px] ${color}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};
export default Atom;
