'use client'

import { useState, useEffect } from 'react'

export default function BreathingApp() {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState('inhale') // inhale, hold, exhale, rest
  const [count, setCount] = useState(4)
  const [cycle, setCycle] = useState(0)

  // Breathing pattern timings (in seconds)
  const breathingPattern = {
    inhale: 4,
    hold: 2,
    exhale: 6,
    rest: 1
  }

  const phaseTexts = {
    inhale: 'Breathe In',
    hold: 'Hold',
    exhale: 'Breathe Out',
    rest: 'Rest'
  }

  const phaseColors = {
    inhale: 'from-blue-400 to-cyan-400',
    hold: 'from-purple-400 to-indigo-400',
    exhale: 'from-green-400 to-emerald-400',
    rest: 'from-gray-400 to-slate-400'
  }

  useEffect(() => {
    let interval = null

    if (isActive) {
      // Start breathing cycle
      const startPhase = (currentPhase) => {
        setPhase(currentPhase)
        const duration = breathingPattern[currentPhase]
        setCount(duration)

        // Countdown timer - FIXED VERSION
        let timeRemaining = duration
        
        interval = setInterval(() => {
          timeRemaining -= 1
          setCount(timeRemaining)
          
          // Move to next phase when time reaches 0
          if (timeRemaining <= 0) {
            clearInterval(interval)
            
            // Move to next phase
            const phases = ['inhale', 'hold', 'exhale', 'rest']
            const currentIndex = phases.indexOf(currentPhase)
            const nextPhase = phases[(currentIndex + 1) % phases.length]
            
            if (nextPhase === 'inhale') {
              setCycle(prev => prev + 1)
            }
            
            // Small delay before starting next phase
            setTimeout(() => startPhase(nextPhase), 100)
          }
        }, 1000)
      }

      startPhase('inhale')
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  const toggleBreathing = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setCycle(0)
      setPhase('inhale')
      setCount(4)
    }
  }

  const resetSession = () => {
    setIsActive(false)
    setCycle(0)
    setPhase('inhale')
    setCount(4)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">
            Breathe & Relax
          </h1>
          <p className="text-slate-300 opacity-80">
            Find your inner peace with guided breathing
          </p>
        </div>

        {/* Main Breathing Circle */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Background glow effect */}
          <div 
            className={`absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-1000 ${
              isActive 
                ? `bg-gradient-to-r ${phaseColors[phase]} ${
                    phase === 'inhale' ? 'scale-150' : 
                    phase === 'hold' ? 'scale-125' : 
                    phase === 'exhale' ? 'scale-75' : 'scale-100'
                  }` 
                : 'bg-gradient-to-r from-slate-500 to-slate-600 scale-100'
            }`}
          />
          
          {/* Outer ring */}
          <div className="relative w-80 h-80 rounded-full border-2 border-white/20 flex items-center justify-center">
            {/* Breathing circle */}
            <div 
              className={`w-64 h-64 rounded-full bg-gradient-to-r transition-all duration-1000 ease-in-out flex items-center justify-center backdrop-blur-sm border border-white/30 ${
                isActive 
                  ? `${phaseColors[phase]} ${
                      phase === 'inhale' ? 'scale-125 shadow-2xl' : 
                      phase === 'hold' ? 'scale-110 shadow-xl' : 
                      phase === 'exhale' ? 'scale-75 shadow-lg' : 'scale-90'
                    }` 
                  : 'from-slate-600 to-slate-700 scale-90'
              }`}
            >
              <div className="text-center">
                <div className="text-white text-2xl font-light mb-2">
                  {isActive ? phaseTexts[phase] : 'Ready'}
                </div>
                <div className="text-white/80 text-6xl font-thin">
                  {isActive ? (count > 0 ? count : '·') : '·'}
                </div>
              </div>
            </div>
          </div>

          {/* Pulse rings */}
          {isActive && phase === 'inhale' && (
            <>
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-ping" style={{animationDelay: '0.3s'}} />
            </>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {['inhale', 'hold', 'exhale', 'rest'].map((p, index) => (
              <div
                key={p}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  phase === p && isActive
                    ? 'bg-white scale-125'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          {isActive && (
            <div className="text-center">
              <p className="text-white/60 text-sm">
                Cycle {cycle} • {phaseTexts[phase]} {count > 0 ? `(${count}s)` : ''}
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleBreathing}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 ${
              isActive
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/25'
                : 'bg-white hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-white/25'
            }`}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          
          {cycle > 0 && (
            <button
              onClick={resetSession}
              className="px-6 py-3 rounded-full font-medium bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Reset
            </button>
          )}
        </div>

        {/* Instructions */}
        {!isActive && (
          <div className="mt-12 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-white text-lg font-medium mb-3">
                How to use
              </h3>
              <div className="text-white/70 text-sm space-y-2">
                <p>• Breathe in slowly for 4 seconds</p>
                <p>• Hold your breath for 2 seconds</p>
                <p>• Exhale gently for 6 seconds</p>
                <p>• Rest for 1 second before repeating</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
