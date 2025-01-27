/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Canvas } from "@react-three/fiber";
import React, { useMemo } from "react";
import ShaderMaterial from "./shader-material.ui";
import * as THREE from "three";

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  // Prepare uniforms for the ShaderMaterial
  const uniforms = useMemo(() => {
    const preparedColors = colors.map((color) =>
      color.map((value) => value / 255)
    );

    return {
      u_colors: {
        value: preparedColors,
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: {
        value: totalSize,
        type: "uniform1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "uniform1f",
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial
        source={`
          precision mediump float;
          in vec2 fragCoord;

          uniform float u_time;
          uniform float u_opacities[10];
          uniform vec3 u_colors[6];
          uniform float u_total_size;
          uniform float u_dot_size;
          uniform vec2 u_resolution;

          out vec4 fragColor;

          void main() {
              vec2 st = fragCoord / u_resolution; // Normalize fragCoord
              float opacity = u_opacities[int(mod(st.x * 10.0, 10.0))];
              fragColor = vec4(u_colors[0], opacity); // Use first color for simplicity
          }`}
        uniforms={uniforms}
      />
    </Canvas>
  );
};

export default DotMatrix;
