
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';

const ParticleField = ({ count = 3000, color = '#9b87f5' }) => {
  const mesh = useRef<THREE.Points>(null!);
  const positions = useRef<Float32Array>();
  const speeds = useRef<Float32Array>();
  const colors = useRef<Float32Array>();

  // Generate particles
  useEffect(() => {
    positions.current = new Float32Array(count * 3);
    speeds.current = new Float32Array(count);
    colors.current = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute particles in a 3D space with varying depths
      positions.current[i3] = (Math.random() - 0.5) * 30;
      positions.current[i3 + 1] = (Math.random() - 0.5) * 30;
      positions.current[i3 + 2] = (Math.random() - 0.5) * 30;
      
      // Random speeds
      speeds.current[i] = 0.01 + Math.random() * 0.03;
      
      // Color variations
      const hue = 0.6 + Math.random() * 0.1; // Purple hue range
      const saturation = 0.6 + Math.random() * 0.2;
      const lightness = 0.7 + Math.random() * 0.3;
      
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      colors.current[i3] = color.r;
      colors.current[i3 + 1] = color.g;
      colors.current[i3 + 2] = color.b;
    }
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (!positions.current || !speeds.current || !mesh.current) return;

    const time = state.clock.getElapsedTime() * 0.2;
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Wave-like motion with varying amplitudes
      positionArray[i3 + 1] += Math.sin(time + positions.current[i3] * 0.1) * 0.01;
      
      // Gentle pulse effect
      const scale = Math.sin(time * 0.5 + i * 0.1) * 0.2 + 0.8;
      
      // Fix: Check if size exists before accessing array property
      if (mesh.current.geometry.attributes.size) {
        mesh.current.geometry.attributes.size.array[i] = scale;
      }
      
      // Slow spiral rotation
      const x = positionArray[i3];
      const z = positionArray[i3 + 2];
      const rotSpeed = 0.0005 + speeds.current[i] * 0.0002;
      positionArray[i3] = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
      positionArray[i3 + 2] = x * Math.sin(rotSpeed) + z * Math.cos(rotSpeed);
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    if (mesh.current.geometry.attributes.size) {
      mesh.current.geometry.attributes.size.needsUpdate = true;
    }
    
    // Slow rotation of the entire particle system
    mesh.current.rotation.y += 0.0005;
    mesh.current.rotation.x += 0.0001;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current || new Float32Array(count * 3), 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current || new Float32Array(count * 3), 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        args={[{
          size: 0.15,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.8,
          vertexColors: true,
          blending: THREE.AdditiveBlending
        }]}
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
