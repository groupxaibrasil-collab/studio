'use client';
import { useMemo } from 'react';
import { FirebaseProvider } from './provider';
import { getFirebaseConfig } from './config';
import { initializeFirebase } from '.';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firebaseApp, auth, firestore } = useMemo(
    () => initializeFirebase(getFirebaseConfig()),
    []
  );

  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      auth={auth}
      firestore={firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
