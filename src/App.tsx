import "./App.css";
import Books from "./components/Books";
import { useCounter } from "./store/useCounter";

function App() {
  const {count,dec,inc} = useCounter()
  return (
    <>
    <div className="flex justify-center items-center w-full h-20">
      <button onClick={dec}>-</button>
      <h1 className="p-4">{count}</h1>
      <button onClick={inc}>+</button>
    </div>
    <div className="flex flex-wrap m-4">
      <Books />
    </div>
    </>
  );
}

export default App;
