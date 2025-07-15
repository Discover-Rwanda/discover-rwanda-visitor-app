/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  resetPassword: async () => {},
  updateProfile: async () => {},
});

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    password: 'password123',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'user' as const
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@discoverrwanda.rw',
    password: 'admin123',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    role: 'admin' as const
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for saved login on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        const savedToken = localStorage.getItem('authToken');
        
        if (savedUser && savedToken) {
          try {
            const parsedUser = JSON.parse(savedUser);
            // In a real app, you would validate the token here
            setUser(parsedUser);
            setIsAuthenticated(true);
          } catch (error) {
            console.error('Failed to parse saved user data:', error);
            localStorage.removeItem('user');
            localStorage.removeItem('authToken');
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // This would be a real API call in a production app
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const foundUser = MOCK_USERS.find(
            (u) => u.email === email && u.password === password
          );
          
          if (foundUser) {
            const { password: _, ...userWithoutPassword } = foundUser;
            const mockToken = `mock-token-${Date.now()}`;
            
            setUser(userWithoutPassword);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(userWithoutPassword));
            localStorage.setItem('authToken', mockToken);
            resolve();
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 1000); // Simulate network delay
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // This would be a real API call in a production app
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Check if user already exists
          if (MOCK_USERS.some(u => u.email === email)) {
            reject(new Error('User already exists with this email'));
            return;
          }
          
          const newUser = {
            id: `${MOCK_USERS.length + 1}`,
            name,
            email,
            password,
            avatar: `https://randomuser.me/api/portraits/men/${MOCK_USERS.length + 1}.jpg`,
            role: 'user' as const
          };
          
          MOCK_USERS.push(newUser);
          
          const { password: _, ...userWithoutPassword } = newUser;
          const mockToken = `mock-token-${Date.now()}`;
          
          setUser(userWithoutPassword);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userWithoutPassword));
          localStorage.setItem('authToken', mockToken);
          resolve();
        }, 1000); // Simulate network delay
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    
    try {
      // This would send a real reset email in a production app
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const foundUser = MOCK_USERS.find((u) => u.email === email);
          if (foundUser) {
            // In a real app, this would send an email
            console.log(`Reset password email sent to ${email}`);
            resolve();
          } else {
            reject(new Error('No user found with this email'));
          }
        }, 1000); // Simulate network delay
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) {
      throw new Error('No user logged in');
    }

    setIsLoading(true);
    
    try {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          try {
            const updatedUser = { ...user, ...updates };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            resolve();
          } catch (error) {
            reject(new Error('Failed to update profile'));
          }
        }, 500);
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
