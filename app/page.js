"use client";
import React from "react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-dark flex flex-col items-center justify-center font-sans p-8">
        <main className="w-full max-w-2xl bg-slate-dark rounded-xl shadow-lg p-10 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700 mb-2">
              <FiUserPlus className="w-10 h-10 text-white" />
            </span>
            <h1 className="text-5xl font-extrabold text-emerald-400 text-center mb-2">Neuromitra</h1>
          </div>
          <p className="text-lg text-gray-300 text-center mb-4">
            An AI-powered learning and communication assistant designed for specially-abled children, families, and teachers.<br />Neuromitra is an assistive platform (not a medical tool) that helps in daily life.
          </p>
          <div className="w-full flex flex-col gap-6">
            <div className="bg-slate-800 border-l-4 border-emerald-400 p-4 rounded">
              <h2 className="text-xl font-bold text-emerald-400 mb-2">Key Features</h2>
              <ul className="list-disc list-inside text-gray-200">
                <li>Communication Aid: Converts text ↔ speech ↔ symbols in multiple Indian languages.</li>
                <li>Helps kids express themselves at home and in class.</li>
                <li>Easy login and signup for users and organizations with Google Auth.</li>
                <li>Modern UI with light/dark mode toggle.</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="/login" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 font-semibold text-lg transition">
              <FiLogIn className="w-5 h-5" />
              Login
            </a>
            <a href="/signup" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-800 font-semibold text-lg transition">
              <FiUserPlus className="w-5 h-5" />
              Sign Up
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

