import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { AuthState } from "@/src/types/auth";
import { login as apiLogin, logout as apiLogout } from "@/src/services/auth";

type AuthContextData = {
  authState: AuthState;
  login: (employeeId: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    employee: null,
    token: null,
    isAuthenticated: false,
  });

  const login = useCallback(async (employeeId: string) => {
    const { employee, token } = await apiLogin(employeeId);

    setAuthState({
      employee,
      token,
      isAuthenticated: true,
    });
  }, []);

  const logout = useCallback(async () => {
    await apiLogout(authState.token);

    setAuthState({
      employee: null,
      token: null,
      isAuthenticated: false,
    });
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
