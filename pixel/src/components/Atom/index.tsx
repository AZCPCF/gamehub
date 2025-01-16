import { FC, useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";

const Atom: FC = () => {
  const { color } = useContext(ColorContext);
  return (
    <div
      className={`w-[10px] h-[10px] ${color}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};
export default Atom;
