import { useEffect, createContext, useContext, useReducer } from "react";
import { authReducer } from "../utils/reducers";

const AuthContext = createContext();

const savedUser = JSON.parse(localStorage.getItem("user")) || null;
export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: savedUser,
    isLoading: false
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
