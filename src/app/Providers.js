'use client'
import { useState, useEffect } from 'react';
import Preloader from './components/Pre-loader/preloader';

export function Providers({ children }) {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleLoad = () => {
      setTimeout(() => {
        setContentVisible(true);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = 'unset';
        }, 500);
      }, 3000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          visibility: contentVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}