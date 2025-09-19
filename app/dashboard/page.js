"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

const mockUser = {
  name: 'Aarav',
  email: 'abc@gmail.com',
  role: 'Student',
  currentLevel: 'Beginner',
  completedLessons: 12,
  totalLessons: 24,
  streakDays: 5
};

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBreathingApp, setShowBreathingApp] = useState(false);

  useEffect(() => {
    // Simulate loading and authentication check
    const timer = setTimeout(() => {
      const isLoggedIn = true; // Replace with actual auth check
      if (!isLoggedIn) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  // Learning modules with autism-friendly categorization
  const learningModules = [
    {
      id: 1,
      title: 'Daily Life Skills',
      description: 'Learn essential daily routines and self-care',
      icon: '🏠',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      textColor: 'text-blue-700',
      category: 'daily',
      lessons: 8,
      completed: 5,
      href: '/daily-skills'
    },
    {
      id: 2,
      title: 'Communication Aid',
      description: 'Practice social communication and expression',
      icon: '💬',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      textColor: 'text-green-700',
      category: 'communication',
      lessons: 12,
      completed: 7,
      href: '/communication'
    },
    {
      id: 3,
      title: 'Relaxation Exercises',
      description: 'Mindfulness and stress management techniques',
      icon: '🌙',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      textColor: 'text-purple-700',
      category: 'wellness',
      lessons: 6,
      completed: 3,
      action: () => setShowBreathingApp(true) // Special action for breathing app
    },
    {
      id: 4,
      title: 'Social Stories',
      description: 'Interactive stories for social situations',
      icon: '📚',
      color: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      textColor: 'text-amber-700',
      category: 'social',
      lessons: 10,
      completed: 2,
      href: '/social-stories'
    },
    {
      id: 5,
      title: 'Sensory Tools',
      description: 'Explore sensory regulation activities',
      icon: '🎨',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      textColor: 'text-teal-700',
      category: 'sensory',
      lessons: 15,
      completed: 8,
      href: '/sensory-tools'
    },
    {
      id: 6,
      title: 'Academic Support',
      description: 'Math, reading, and writing assistance',
      icon: '✏️',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      textColor: 'text-indigo-700',
      category: 'academic',
      lessons: 20,
      completed: 12,
      href: '/academic'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics', icon: '📋' },
    { id: 'daily', label: 'Daily Skills', icon: '🏠' },
    { id: 'communication', label: 'Communication', icon: '💬' },
    { id: 'social', label: 'Social Skills', icon: '👥' },
    { id: 'wellness', label: 'Wellness', icon: '🌙' },
    { id: 'sensory', label: 'Sensory', icon: '🎨' },
    { id: 'academic', label: 'Learning', icon: '✏️' }
  ];

  const filteredModules = selectedCategory === 'all' 
    ? learningModules 
    : learningModules.filter(module => module.category === selectedCategory);

  const handleModuleClick = (module) => {
    if (module.action) {
      module.action();
    } else if (module.href) {
      router.push(module.href);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading your dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        
        {/* Main Container with autism-friendly spacing */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-slate-800 mb-2">
                  Welcome back, {mockUser.name}! 👋
                </h1>
                <p className="text-slate-600 text-lg mb-1">
                  Ready to continue your learning journey?
                </p>
                <p className="text-sm text-slate-500">
                  {mockUser.email} • {mockUser.role}
                </p>
              </div>
              
              {/* Quick Breathing Access Button */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setShowBreathingApp(true)}
                  className="flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-xl border border-purple-200 transition-colors duration-200"
                >
                  <span className="text-lg">🌙</span>
                  <span className="font-medium">Quick Calm</span>
                </button>
                
                <div className="text-center bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">{mockUser.streakDays}</div>
                  <div className="text-sm text-blue-600">Day Streak</div>
                </div>
                <div className="text-center bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round((mockUser.completedLessons / mockUser.totalLessons) * 100)}%
                  </div>
                  <div className="text-sm text-green-600">Progress</div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                <span className="text-sm text-slate-500">
                  {mockUser.completedLessons} of {mockUser.totalLessons} lessons
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(mockUser.completedLessons / mockUser.totalLessons) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Mobile Quick Calm Button */}
            <div className="md:hidden mt-4">
              <button
                onClick={() => setShowBreathingApp(true)}
                className="w-full flex items-center justify-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-3 rounded-xl border border-purple-200 transition-colors duration-200"
              >
                <span className="text-lg">🌙</span>
                <span className="font-medium">Need a moment to breathe? Click here</span>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Choose Your Learning Topic</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 border-blue-300 text-blue-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Modules Grid */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              {selectedCategory === 'all' ? 'All Learning Modules' : `${categories.find(c => c.id === selectedCategory)?.label} Activities`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredModules.map((module) => (
                <div
                  key={module.id}
                  className={`${module.color} border-2 rounded-2xl p-6 transition-all duration-200 cursor-pointer group`}
                  onClick={() => handleModuleClick(module)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-200`}>
                      {module.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-600">Progress</div>
                      <div className={`text-lg font-bold ${module.textColor}`}>
                        {Math.round((module.completed / module.lessons) * 100)}%
                      </div>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${module.textColor} mb-2`}>
                    {module.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  
                  {/* Mini Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-white/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${module.textColor.replace('text-', 'bg-')}`}
                        style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>{module.completed} completed</span>
                      <span>{module.lessons} total</span>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center ${module.textColor} text-sm font-medium group-hover:underline`}>
                    {module.id === 3 ? 'Start Breathing Exercise' : 'Continue Learning'}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => router.push('/profile')}
                className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors duration-200"
              >
                <div className="text-2xl">👤</div>
                <div className="text-left">
                  <div className="font-medium text-slate-700">My Profile</div>
                  <div className="text-sm text-slate-500">View & edit details</div>
                </div>
              </button>
              
              <button
                onClick={() => router.push('/achievements')}
                className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors duration-200"
              >
                <div className="text-2xl">🏆</div>
                <div className="text-left">
                  <div className="font-medium text-slate-700">Achievements</div>
                  <div className="text-sm text-slate-500">View your progress</div>
                </div>
              </button>
              
              <button
                onClick={() => router.push('/schedule')}
                className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors duration-200"
              >
                <div className="text-2xl">📅</div>
                <div className="text-left">
                  <div className="font-medium text-slate-700">Schedule</div>
                  <div className="text-sm text-slate-500">Plan your activities</div>
                </div>
              </button>
              
              <button
                onClick={() => setShowBreathingApp(true)}
                className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 transition-colors duration-200"
              >
                <div className="text-2xl">🌙</div>
                <div className="text-left">
                  <div className="font-medium text-purple-700">Breathing Exercise</div>
                  <div className="text-sm text-purple-500">Calm and center yourself</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Integrated Breathing App Modal */}
      {showBreathingApp && (
        <BreathingModal onClose={() => setShowBreathingApp(false)} />
      )}
    </>
  );
}

// Integrated Breathing App Component
function BreathingModal({ onClose }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('inhale');
  const [count, setCount] = useState(4);
  const [cycle, setCycle] = useState(0);

  // Breathing pattern timings (in seconds)
  const breathingPattern = {
    inhale: 4,
    hold: 2,
    exhale: 6,
    rest: 1
  };

  const phaseTexts = {
    inhale: 'Breathe In',
    hold: 'Hold',
    exhale: 'Breathe Out',
    rest: 'Rest'
  };

  const phaseColors = {
    inhale: 'from-blue-400 to-cyan-400',
    hold: 'from-purple-400 to-indigo-400',
    exhale: 'from-green-400 to-emerald-400',
    rest: 'from-gray-400 to-slate-400'
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      const startPhase = (currentPhase) => {
        setPhase(currentPhase);
        const duration = breathingPattern[currentPhase];
        setCount(duration);

        let timeRemaining = duration;
        
        interval = setInterval(() => {
          timeRemaining -= 1;
          setCount(timeRemaining);
          
          if (timeRemaining <= 0) {
            clearInterval(interval);
            
            const phases = ['inhale', 'hold', 'exhale', 'rest'];
            const currentIndex = phases.indexOf(currentPhase);
            const nextPhase = phases[(currentIndex + 1) % phases.length];
            
            if (nextPhase === 'inhale') {
              setCycle(prev => prev + 1);
            }
            
            setTimeout(() => startPhase(nextPhase), 100);
          }
        }, 1000);
      };

      startPhase('inhale');
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const toggleBreathing = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setCycle(0);
      setPhase('inhale');
      setCount(4);
    }
  };

  const resetSession = () => {
    setIsActive(false);
    setCycle(0);
    setPhase('inhale');
    setCount(4);
  };

  const handleClose = () => {
    setIsActive(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-95"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="absolute max-w-md w-full top-16 p-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-white mb-2">
            Breathe & Relax
          </h1>
          <p className="text-slate-300 opacity-80">
            Take a moment to find your inner peace
          </p>
        </div>

        {/* Breathing Circle */}
        <div className="relative flex items-center justify-center mb-8">
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 flex items-center justify-center">
            {/* Breathing circle */}
            <div 
              className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r transition-all duration-1000 ease-in-out flex items-center justify-center backdrop-blur-sm border border-white/30 ${
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
                <div className="text-white text-lg md:text-2xl font-light mb-2">
                  {isActive ? phaseTexts[phase] : 'Ready'}
                </div>
                <div className="text-white/80 text-4xl md:text-6xl font-thin">
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
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {['inhale', 'hold', 'exhale', 'rest'].map((p) => (
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
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={toggleBreathing}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 ${
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
              className="px-4 py-3 rounded-full font-medium bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Reset
            </button>
          )}
        </div>

        {/* Instructions */}
        {!isActive && (
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <h3 className="text-white text-lg font-medium mb-3">
                Breathing Guide
              </h3>
              <div className="text-white/70 text-sm space-y-1">
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
  );
}
