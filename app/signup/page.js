"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { FiUserPlus } from 'react-icons/fi';

// Temporary in-memory user data
const users = [];

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      uid: String(Date.now()),
      email,
      username,
      photoURL: ""
    };
    users.push(newUser);
    router.push('/profile');
  };

  // Google signup removed for temporary storage

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-dark">
        <div className="w-full max-w-md bg-slate-dark rounded-xl shadow-lg p-8 mt-10">
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-700 mb-2">
              <FiUserPlus className="w-8 h-8 text-white" />
            </span>
            <h1 className="text-4xl font-extrabold text-emerald-400 text-center">Sign Up</h1>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              className="border border-slate-700 bg-slate-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-slate-700 bg-slate-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-slate-700 bg-slate-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition font-semibold text-lg"
            >
              Sign Up
            </button>
          </form>
          <div className="my-4 text-center text-slate-400">or</div>
          <button
            className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-800 transition font-semibold text-lg"
            onClick={handleGoogleSignup}
          >
            <FiUserPlus className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
}
