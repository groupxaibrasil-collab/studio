'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { type FirebaseApp } from 'firebase/app';
import { type Auth }reac
import { type Firestore } from 'firebase/firestore';

const FirebaseContext = createContext<{
  firebaseApp?: FirebaseApp;
  auth?: Auth;
  firestore?: Firestore;
} | null>(null);

export function FirebaseProvider({
  children,
  firebaseApp,
  auth,
  firestore,
}: {
  children: ReactNode;
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}) {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}

export function useFirebaseApp() {
  const context = useContext(FirebaseContext);
  if (!context?.firebaseApp) {
    throw new Error('useFirebaseApp must be used within a FirebaseProvider.');
  }
  return context.firebaseApp;
}

export function useAuth() {
  const context = useContext(FirebaseContext);
  if (!context?.auth) {
    throw new Error('useAuth must be used within a FirebaseProvider.');
  }
  return context.auth;
}

export function useFirestore() {
  const context = useContext(FirebaseContext);
  if (!context?.firestore) {
    throw new Error('useFirestore must be used within a FirebaseProvider.');
  }
  return context.firestore;
}
