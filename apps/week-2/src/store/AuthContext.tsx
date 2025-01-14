import {
    createContext,
    FC,
    PropsWithChildren,
    useState
} from "react";
type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const context: AuthContextType = { isLoggedIn, login, logout };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
