import { FC } from "react";
import "./App.css";
import DinoColorSelector from "./components/DinoColorSelector";
import Dino from "./shared/Dino";
import { Container } from "./Styles";
const App: FC = () => {
  // const din
  return (
    <>
      <DinoColorSelector />
      <Container className="h-screen w-full transition-colors duration-500">
        <Dino />
      </Container>
    </>
  );
};

export default App;
