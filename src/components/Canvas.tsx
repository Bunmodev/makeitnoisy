import { useEffect } from "react";
import { useCanvas } from "../store/useCanvas";
import CanvasPreview from "./CanvasPreview";

const Canvas = () => {
  const { setSize } = useCanvas();

  useEffect(() => {
    setSize(800, 800); // Set once on mount
  }, [setSize]);

  return (
    <div className="flex-1 max-h-[600px]">
      <CanvasPreview />
    </div>
  );
};

export default Canvas;
