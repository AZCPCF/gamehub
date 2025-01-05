import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import LoginForm from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

const Home = lazy(() => import("./pages/Home"));

const App: FC = () => {
  const { isDarkMode } = useTheme();
  const { isAuthenticated } = useAuth();
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login" element={<LoginForm />} />
          )}
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
