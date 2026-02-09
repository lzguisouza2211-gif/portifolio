import React, { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // Custom cursor glow effect
    const handleMouseMove = (e) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background: #000;
          overflow-x: hidden;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00f0ff, #39ff14);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #00f0ff;
        }
        
        ::selection {
          background: rgba(0, 240, 255, 0.3);
          color: white;
        }
      `}</style>
      {children}
    </div>
  );
}