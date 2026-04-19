import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Model from '../components/Model';
import Loader from '../components/Loader';

const models = [
  { id: 1, name: 'Precision Sedan', path: '/models/car 1.glb', speed: '240 km/h', power: '350 HP' },
  { id: 2, name: 'Sport Coupe', path: '/models/car 2.glb', speed: '280 km/h', power: '420 HP' },
  { id: 3, name: 'Future Concept', path: '/models/car 3.glb', speed: '320 km/h', power: '500 HP' },
  { id: 4, name: 'Adventure SUV', path: '/models/car 4.glb', speed: '210 km/h', power: '380 HP' },
];

const Showcase = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <section id="showcase" className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Model Showcase</h2>
          <p className="text-gray-400">Select a prototype to explore its engineering and high-fidelity 3D profile.</p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 items-center">
          {/* 3D Viewer */}
          <div className="flex-[2] w-full h-[500px] bg-slate-800/20 rounded-3xl overflow-hidden border border-slate-700/50 relative">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
              <Suspense fallback={<Loader />}>
                <Stage environment="city" intensity={0.5} contactShadow={false}>
                  <Model key={selectedModel.id} path={selectedModel.path} scale={0.8} />
                </Stage>
                <OrbitControls enableZoom={true} autoRotate={false} />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.6, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
              </Suspense>
            </Canvas>
            
            {/* Specs Overlay */}
            <div className="absolute top-6 left-6 p-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5">
              <div className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-2">Technical Specs</div>
              <div className="flex gap-6 text-white text-sm">
                <div>Top Speed: <span className="font-bold">{selectedModel.speed}</span></div>
                <div>Output: <span className="font-bold">{selectedModel.power}</span></div>
              </div>
            </div>
          </div>

          {/* Model Selection List */}
          <div className="flex-1 w-full space-y-4">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center group ${
                  selectedModel.id === model.id 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-800/40 border-slate-700/50 text-gray-400 hover:border-slate-500'
                }`}
              >
                <div>
                  <h4 className={`text-lg font-bold mb-1 ${selectedModel.id === model.id ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {model.name}
                  </h4>
                  <p className="text-xs opacity-70">Series {model.id} Prototype</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  selectedModel.id === model.id ? 'bg-white/20' : 'bg-slate-700 group-hover:bg-slate-600'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${selectedModel.id === model.id ? 'bg-white' : 'bg-gray-400'}`} />
                </div>
              </button>
            ))}
            
            <div className="mt-8 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
              <p className="text-blue-400 text-sm leading-relaxed">
                Click and drag the vehicle to examine its design from any angle. Scroll to zoom for engine details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
