import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import Model from '../components/Model';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col md:flex-row items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 px-6 md:px-12 lg:px-24 z-10 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Drive the Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            In 3D Precision
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 mx-auto md:mx-0">
          Experience world-class automotive engineering through our high-fidelity 3D visualization platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="#services" className="btn-primary">
            Explore Models
          </a>
          <a href="#about" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all border border-white/10">
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Right Content - 3D Canvas */}
      <div className="flex-1 w-full h-[400px] md:h-screen cursor-grab active:cursor-grabbing">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} contactShadow={false}>
              <Model path="/models/main.glb" scale={0.8} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <Environment preset="city" />
            <ContactShadows 
              position={[0, -0.6, 0]} 
              opacity={0.4} 
              scale={10} 
              blur={2.5} 
              far={4} 
            />
          </Suspense>
        </Canvas>
        
        {/* Loading fallback info */}
        <div className="absolute bottom-10 right-10 text-xs text-gray-500 hidden md:block">
          Interactive 3D View • Drag to Rotate
        </div>
      </div>
    </section>
  );
};

export default Hero;
