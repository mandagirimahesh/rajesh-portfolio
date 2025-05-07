
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';

const ParticleField = ({ count = 2000, color = '#9b87f5' }) => {
  const mesh = useRef<THREE.Points>(null!);
  const positions = useRef<Float32Array>();
  const speeds = useRef<Float32Array>();

  // Generate particles
  useEffect(() => {
    positions.current = new Float32Array(count * 3);
    speeds.current = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute particles in a 3D space
      positions.current[i3] = (Math.random() - 0.5) * 25;
      positions.current[i3 + 1] = (Math.random() - 0.5) * 25;
      positions.current[i3 + 2] = (Math.random() - 0.5) * 25;
      
      // Random speeds
      speeds.current[i] = 0.01 + Math.random() * 0.02;
    }
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (!positions.current || !speeds.current || !mesh.current) return;

    const time = state.clock.getElapsedTime() * 0.2;
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Wave-like motion
      positionArray[i3 + 1] += Math.sin(time + positions.current[i3] * 0.1) * 0.01;
      
      // Slow rotation
      const x = positionArray[i3];
      const z = positionArray[i3 + 2];
      positionArray[i3] = x * Math.cos(0.001) - z * Math.sin(0.001);
      positionArray[i3 + 2] = x * Math.sin(0.001) + z * Math.cos(0.001);
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation of the entire particle system
    mesh.current.rotation.y += 0.0005;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current || new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const ThreeBackground = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="canvas-container" ref={ref}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
