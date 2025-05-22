import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define the shape of our auth context
type AuthContextType = {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
};

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => { },
    register: () => { },
    logout: () => { },
});

// Provider component that wraps the app
export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // In a real app, you would implement actual authentication logic
    const login = (email: string, password: string) => {
        console.log('Logging in with:', email, password);
        // Here you'd call your authentication service, API, etc.
        // For now, we'll just set isLoggedIn to true
        setIsLoggedIn(true);
    };

    const register = (email: string, password: string) => {
        console.log('Registering with:', email, password);
        // Here you'd call your registration service, API, etc.
        // For demo purposes, we'll automatically log in after registration
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook for using the auth context
export function useAuth() {
    return useContext(AuthContext);
}