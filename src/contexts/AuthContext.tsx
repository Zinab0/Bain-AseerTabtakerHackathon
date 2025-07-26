
"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from '@/lib/firebase'; // Assuming you have a firestore instance exported from firebase.ts
import type { User } from '@/lib/types';
import { users as mockUsers } from '@/lib/data'; // Import mock users for data fetching

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        // In a real app, you would fetch user profile from Firestore
        // For this prototype, we'll find the user in the mock data
        const mockUser = mockUsers.find(u => u.id.startsWith('user-')); // Simple logic to find a user
        
        if (mockUser) {
           setUser({ ...mockUser, id: fbUser.uid });
        } else {
           // Create a default user profile if none found
           const defaultUser: User = {
             id: fbUser.uid,
             name: fbUser.displayName || fbUser.email || 'New User',
             avatar: fbUser.photoURL || 'https://placehold.co/100x100.png',
             aiHint: 'user portrait',
             isHost: false, // Default role
           };
           setUser(defaultUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setFirebaseUser(null);
    router.push('/');
  };

  const value = {
    user,
    firebaseUser,
    loading,
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
