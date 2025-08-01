
"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import type { User } from '@/lib/types';
import { users as mockUsers } from '@/lib/data'; 

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
        // Use the actual Firebase user data
        const authenticatedUser: User = {
          id: fbUser.uid,
          name: fbUser.displayName || fbUser.email || 'New User',
          avatar: fbUser.photoURL || `https://i.postimg.cc/nztcHfzm/9a7da2a8-b47c-441b-91c1-65e0266a841f.png`,
          aiHint: 'user portrait',
          // In a real app, role would be stored in Firestore or custom claims
          // For now, we'll check mock data or default to 'tourist'.
          isHost: mockUsers.find(u => u.name === fbUser.displayName)?.isHost ?? false,
        };
        setUser(authenticatedUser);
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
