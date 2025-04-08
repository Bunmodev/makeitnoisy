import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CanvasSettings {
  canvasRef: React.RefObject<HTMLCanvasElement> | null;
  width: number;
  height: number;
  background: string;
  grainColor: string;
  noiseLevel: number;
  radius: number;
  setSize: (width: number, height: number) => void;
  setBackground: (color: string) => void;
  setGrainColor: (color: string) => void;
  setNoiseLevel: (level: number) => void;
  setRadius: (radius: number) => void;
}

export const useCanvas = create<CanvasSettings>()(
  persist(
    (set) => ({
      canvasRef: null,
      setCanvasRef: (ref: React.RefObject<HTMLCanvasElement>) => set({ canvasRef: ref }),
      width: 1080,
      height: 1080,
      background: "#ffffff",
      grainColor:'#ffffff',
      noiseLevel: 0.5,
      radius: 15,
      setSize: (width, height) => set({ width, height }),
      setBackground: (color) => set({ background: color }),
      setGrainColor: (color) => set({ grainColor: color }),
      setNoiseLevel: (level) => set({ noiseLevel: level }),
      setRadius: (radius) => set({ radius: radius }),
    }),
    {
      name: "canvas-settings", // localStorage key
    }
  )
);
