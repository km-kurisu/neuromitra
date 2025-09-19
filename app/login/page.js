"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { FiLogIn } from 'react-icons/fi';

// Temporary in-memory user data
const users = [
  { uid: "1", email: "abc@gmail.com", username: "ABC", password: "password", photoURL: "" },
  // Add more users as needed
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(u => u.email === username && u.password === password);
    if (foundUser) {
      router.push('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  // Google login removed for temporary storage

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
          {/* Google login removed for temporary storage */}
        </div>
      </div>
    </>
  );
}
