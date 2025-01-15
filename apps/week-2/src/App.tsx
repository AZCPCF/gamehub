import { useContext } from "react";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {isLoggedIn ? <Messages /> : <Login />}
    </div>
  );
}

export default App;
