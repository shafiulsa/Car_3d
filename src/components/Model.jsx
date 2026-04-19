import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = ({ path, ...props }) => {
  const group = useRef();
  // Using a try-catch pattern or handling the error is good, 
  // but useGLTF typically throws if it fails. 
  // We can provide a primitive as a fallback in a higher-level component or use Suspense.
  const { scene } = useGLTF(path);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// Pre-load the model to avoid jank
useGLTF.preload('/models/main.glb');

export default Model;
