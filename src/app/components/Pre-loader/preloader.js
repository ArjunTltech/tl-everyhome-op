'use client';
import { useState, useEffect } from 'react';

const Preloader = ({
  logoSrc = '/images/eh-logo.png',
  duration = 3000,
  bgColor = '#ffffff',
  accentColor = '#C49B3F' // Match your branding
}) => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        backgroundColor: bgColor,
        zIndex: 99999,
      }}
    >
      {/* Common parent div for all loader elements */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Logo and rotating effects */}
        <div className="relative w-32 h-32 mb-8">
          {/* Background glow effect */}
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
              transform: 'scale(1.2)',
            }}
          />
          {/* Rotating circles */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: accentColor,
                  animation: `spin ${2 + i * 0.5}s linear infinite`,
                  transform: `scale(${1 + i * 0.15})`,
                  opacity: 1 - i * 0.2,
                }}
              />
            ))}
          </div>
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logoSrc}
              alt="Loading Logo"
              className="w-24 h-24 object-contain animate-float"
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 ease-out rounded-full"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}CC 100%)`,
            }}
          />
        </div>

        {/* Progress text */}
        <div className="mt-4 text-sm font-medium" style={{ color: accentColor }}>
          Loading... {progress}%
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
