import { FC, useContext, useState } from "react";
import "./App.css";
import { colors } from "./constants/colors";
import { ColorContext } from "./contexts/ColorContext";
import Dino from "./shared/Dino";
import { Container } from "./Styles";
const App: FC = () => {
  const [color, setColor] = useState("red");
  const [colorCode, setColorCode] = useState("500");
  const { setColor: setColorContext } = useContext(ColorContext);
  return (
    <>
      <div className="absolute top-0 left-0">
        <select
          className="w-20 m-2"
          value={color}
          onChange={(e) => {
            setColorContext(colors[e.target.value][parseInt(colorCode)]);
            setColor(e.target.value);
          }}
        >
          {Object.entries(colors).map((item) => (
            <option value={item[0]}>{item[0]}</option>
          ))}
        </select>
        <select
          className="w-20 m-2"
          value={colorCode}
          onChange={(e) => {
            setColorContext(colors[color][e.target.value]);
            setColorCode(e.target.value);
          }}
        >
          {Object.entries(colors[color]).map((item) => (
            <option value={item[0]}>{item[0]}</option>
          ))}
        </select>
      </div>
      <Container>
        <Dino />
      </Container>
    </>
  );
};

export default App;
