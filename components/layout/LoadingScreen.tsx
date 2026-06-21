'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  fadeOut: boolean;
}

export default function LoadingScreen({ fadeOut }: LoadingScreenProps) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #020617 0%, #071A35 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center select-none">
        {/* Soft Radial Glow behind Logo */}
        <div className="relative mb-6 flex items-center justify-center">
          <div 
            className="absolute w-36 h-36 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{
              background: 'radial-gradient(circle, #C9963A 0%, transparent 70%)',
            }}
          />
          
          {/* Logo Icon */}
          <motion.img
            src="/logo-icon.png"
            alt="Magnova Logo Icon"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain relative z-10"
          />
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8"
        >
          <h2 
            className="text-white font-sans text-xl sm:text-2xl font-bold tracking-widest"
            style={{ letterSpacing: '0.3em' }}
          >
            MAGNOVA
          </h2>
        </motion.div>

        {/* Animated Progress Bar */}
        <div 
          className="w-48 h-0.5 bg-gray-900/90 rounded-full overflow-hidden relative border border-white/5"
          style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)' }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#C9963A] via-[#E8B84B] to-[#C9963A]"
            style={{
              boxShadow: '0 0 10px rgba(201, 150, 58, 0.8)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
