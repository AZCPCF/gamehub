import { useContext } from "react";
import Login from "./pages/Login";
import { AuthContext } from "./store/AuthContext";
import Users from "./pages/Users";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {isLoggedIn ? <Users /> : <Login />}
    </div>
  );
}

export default App;
