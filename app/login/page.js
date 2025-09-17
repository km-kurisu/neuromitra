"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { FiLogIn } from 'react-icons/fi';

import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Username is not used for Firebase Auth, but you can fetch user data after login
      await signInWithEmailAndPassword(auth, username, password);
      router.push('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-dark">
        <div className="w-full max-w-md bg-slate-dark rounded-xl shadow-lg p-8 mt-10">
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-700 mb-2">
              <FiLogIn className="w-8 h-8 text-white" />
            </span>
            <h1 className="text-4xl font-extrabold text-emerald-400 text-center">Login</h1>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username (Email)"
              className="border border-slate-700 bg-slate-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition font-semibold text-lg flex items-center gap-2"
            >
              <FiLogIn className="w-5 h-5" /> Login
            </button>
          </form>
          <div className="my-4 text-center text-slate-400">or</div>
          <button
            className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-800 transition font-semibold text-lg"
            onClick={handleGoogleLogin}
          >
            <FiLogIn className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}
