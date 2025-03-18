import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Animated planet component
const Planet = ({ position = [0, 0, 0], size = 1, rotationSpeed = 0.01, color = '#3498db' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={new THREE.Vector3(...position)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Animated particle system
const Particles = ({ count = 2000 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      const size = Math.random() * 0.5;
      temp.push({ position: [x, y, z], size });
    }
    return temp;
  }, [count]);

  return (
    <group>
      {particles.map((particle, i) => (
        <mesh key={i} position={new THREE.Vector3(...particle.position)}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

// Main scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Custom particles */}
      <Particles count={300} />
      
      {/* Planets with colors instead of textures */}
      <Planet position={[-8, 2, -10]} size={2} rotationSpeed={0.005} color="#2980b9" />
      <Planet position={[5, -3, -5]} size={1} rotationSpeed={0.01} color="#e74c3c" />
      <Planet position={[10, 5, -15]} size={1.5} rotationSpeed={0.007} color="#f39c12" />
    </>
  );
};

// Main component with canvas
const SpaceBackground = () => {
  return (
    <Canvas 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      camera={{ position: [0, 0, 15], fov: 60 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default SpaceBackground; 