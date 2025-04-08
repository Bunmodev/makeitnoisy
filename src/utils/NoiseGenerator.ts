import { useCanvas } from "../store/useCanvas";

export const generateNoise = (canvas: HTMLCanvasElement) => {
  const { noiseLevel, radius, grainColor } = useCanvas.getState();
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const count = Math.floor(noiseLevel * 10000); // scale up

  for (let i = 0; i < count; i++) {
    const PosX = Math.floor(Math.random() * canvas.width);
    const PosY = Math.floor(Math.random() * canvas.height);

    ctx.fillStyle = grainColor;
    ctx.beginPath();
    ctx.arc(PosX, PosY, radius, 0, 2 * Math.PI); // smaller dots = better noise
    ctx.fill();
  }
};
