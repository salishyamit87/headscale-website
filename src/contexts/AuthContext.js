import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Temporary simple login
    if (email && password) {
      setUser({ email, name: 'Test User' });
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = async (userData) => {
    // Temporary simple signup
    setUser({ email: userData.email, name: userData.name });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}