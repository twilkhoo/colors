import { createContext, useContext, ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { User } from "firebase/auth";

interface AuthContextInterface {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

type AuthProviderProps = {
  children?: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthContext = (): AuthContextInterface => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return authContext;
};

export { AuthProvider, useAuthContext };
