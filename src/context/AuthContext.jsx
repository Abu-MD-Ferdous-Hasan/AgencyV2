import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Check authentication status on mount and when localStorage changes
  useEffect(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    setIsAuthenticated(!!token && !!userId);
    setUser(userId ? { id: userId } : null);
    setLoading(false);
  };

  const login = (token, userId) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userId", userId);
    setIsAuthenticated(true);
    setUser({ id: userId });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    loading,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
