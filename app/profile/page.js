"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FiUser } from 'react-icons/fi';
// Temporary in-memory user data
const users = [
  { uid: "1", email: "test@example.com", username: "TestUser", photoURL: "" },
  // Add more users as needed
];

export default function ProfilePage() {
  const [user, setUser] = useState(users[0]);
  const [profile, setProfile] = useState(users[0]);

  // No authentication, just use first user in array

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
