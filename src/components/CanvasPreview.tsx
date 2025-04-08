import React, { useRef, useEffect } from "react";
import { useCanvas } from "../store/useCanvas";
import { generateNoise } from "../utils/NoiseGenerator";

const CanvasPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width, height, background, noiseLevel, radius, grainColor } = useCanvas();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear & fill background
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // Draw noise here using noiseLevel...
    generateNoise(canvas)

  }, [width, height, background, grainColor, noiseLevel, radius]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border rounded shadow"
    />
  );
};

export default CanvasPreview;
