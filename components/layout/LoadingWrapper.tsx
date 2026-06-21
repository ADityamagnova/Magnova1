'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simulate initial application mount and data fetching sequence
    const loadTimer = setTimeout(() => {
      setFadeOut(true); // Trigger 800ms exit fade-out transition
      
      const unmountTimer = setTimeout(() => {
        setLoading(false); // Unmount loading screen completely from DOM
      }, 800);
      
      return () => clearTimeout(unmountTimer);
    }, 2200); // Cinematic 2.2s loading state duration

    return () => clearTimeout(loadTimer);
  }, []);

  if (!mounted) {
    // Avoid SSR flash by rendering loading state initially
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, #020617 0%, #071A35 100%)',
          zIndex: 9999,
        }}
      />
    );
  }

  return (
    <>
      {/* Loading Overlay */}
      {loading && <LoadingScreen fadeOut={fadeOut} />}

      {/* Main Page Layout Wrapper */}
      <div
        style={{
          opacity: fadeOut ? 1 : 0,
          transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        className="w-full min-h-screen flex flex-col"
      >
        {children}
      </div>
    </>
  );
}
