/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

interface ShaderMaterialProps {
  source: string;
  uniforms: {
    [key: string]: {
      value: number | number[] | number[][];
      type: string;
    };
  };
  maxFps?: number;
}

const ShaderMaterial: React.FC<ShaderMaterialProps> = ({
  source,
  uniforms,
  maxFps = 60,
}) => {
  const { size } = useThree(); // Get canvas size (for resolution uniform)
  const meshRef = useRef<THREE.Mesh>(null);
  const lastFrameTimeRef = useRef(0); // Used to throttle frame updates

  // Update shader uniforms (e.g., time) on every frame
  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    if (elapsedTime - lastFrameTimeRef.current < 1 / maxFps) return;
    lastFrameTimeRef.current = elapsedTime;

    // Update time and resolution uniforms
    const material = meshRef.current.material as THREE.ShaderMaterial;
    if (material.uniforms.u_time) {
      material.uniforms.u_time.value = elapsedTime;
    }
    if (material.uniforms.u_resolution) {
      material.uniforms.u_resolution.value = new THREE.Vector2(
        size.width * 2,
        size.height * 2
      );
    }
  });

  // Memoize the uniforms and material to prevent unnecessary re-renders
  const preparedUniforms = useMemo(() => {
    const prepared: Record<string, any> = {};
    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];
      switch (uniform.type) {
        case "uniform1f":
          prepared[uniformName] = { value: uniform.value };
          break;
        case "uniform1fv":
          prepared[uniformName] = { value: uniform.value };
          break;
        case "uniform3fv":
          prepared[uniformName] = {
            value: (uniform.value as number[][]).map(
              (v) => new THREE.Vector3(...v)
            ),
          };
          break;
        case "uniform2f":
          prepared[uniformName] = {
            value: new THREE.Vector2(...(uniform.value as number[])),
          };
          break;
        case "uniform3f":
          prepared[uniformName] = {
            value: new THREE.Vector3(...(uniform.value as number[])),
          };
          break;
        default:
          console.error(`Invalid uniform type: ${uniform.type}`);
      }
    }

    // Add u_time and u_resolution uniforms
    prepared.u_time = { value: 0 };
    prepared.u_resolution = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
    };

    return prepared;
  }, [uniforms, size]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      fragmentShader: source, // The GLSL fragment shader code
      vertexShader: `
        precision mediump float;
        in vec3 position;
        uniform vec2 u_resolution;
        out vec2 fragCoord;

        void main() {
          gl_Position = vec4(position, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y; // Flip Y-axis
        }
      `,
      uniforms: preparedUniforms,
      transparent: true,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [source, preparedUniforms]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default ShaderMaterial;
