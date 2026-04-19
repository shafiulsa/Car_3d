import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 shadow-2xl min-w-[280px]">
        {/* Animated Ring */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 border-4 border-blue-500/10 rounded-full" />
          <div 
            className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" 
            style={{ animationDuration: '1.5s' }}
          />
        </div>
        
        <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Initializing Car 3D</h3>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-blue-500 font-mono text-sm">
          {Math.round(progress)}% <span className="text-gray-500 ml-1">Loaded</span>
        </p>
      </div>
    </Html>
  );
};

export default Loader;
