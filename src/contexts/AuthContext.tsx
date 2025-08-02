
"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@/lib/types';
import { users as mockUsers } from '@/lib/data'; 

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (name: string) => User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if a user is saved in localStorage to persist session
    try {
        const savedUser = localStorage.getItem('mockUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
    }
    setLoading(false);
  }, []);

  const login = (name: string): User | null => {
    // Simple mock logic: Find user by name (case-insensitive)
    const foundUser = mockUsers.find(u => u.name.toLowerCase() === name.toLowerCase());

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('mockUser', JSON.stringify(foundUser));
      return foundUser;
    }
    // If user not found, create a new mock "tourist" user for demo purposes
    const newUser: User = {
        id: `user-${Date.now()}`,
        name: name,
        avatar: 'https://i.postimg.cc/nztcHfzm/9a7da2a8-b47c-441b-91c1-65e0266a841f.png',
        aiHint: 'tourist portrait',
        isHost: false,
    }
    setUser(newUser);
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
    router.push('/');
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
