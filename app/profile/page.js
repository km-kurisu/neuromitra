"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FiUser } from 'react-icons/fi';
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-dark p-8">
        <div className="w-full max-w-md bg-slate-dark rounded-xl shadow-lg p-8 mt-10">
          <h1 className="text-4xl font-extrabold text-emerald-400 mb-6 text-center">Profile</h1>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-24 h-24 rounded-full bg-emerald-700 flex items-center justify-center mb-4 overflow-hidden">
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-24 h-24 object-cover" />
              ) : (
                <FiUser className="w-12 h-12 text-white" />
              )}
            </div>
            {user && profile ? (
              <>
                <p className="text-lg text-gray-300">Welcome, <span className="font-bold text-emerald-400">{profile.username}</span>!</p>
                <p className="text-sm text-gray-400">Your email: <span className="font-mono">{profile.email}</span></p>
              </>
            ) : (
              <p className="text-lg text-gray-700 dark:text-gray-300">Not logged in.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
