"use client";
import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiLogIn, FiUserPlus, FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-700 dark:text-blue-300">
            <FiHome className="w-6 h-6" /> Neuromitra
          </Link>
          <Link href="/profile" className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium">
            <FiUser className="w-5 h-5" /> Profile
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"><FiLogIn className="w-5 h-5" /> Login</Link>
          <Link href="/signup" className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"><FiUserPlus className="w-5 h-5" /> Sign Up</Link>
          <button
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
