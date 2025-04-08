import { Droplet, SlidersHorizontal } from 'lucide-react';
import React from 'react'
import { useCanvas } from '../../store/useCanvas';

const InspectorNoise = () => {
    const { 
        noiseLevel, 
        radius, 
        setRadius, 
        setNoiseLevel, 
        background, 
        grainColor,
        setGrainColor,
        setBackground 
    } = useCanvas()

    const logScale = (value: number, min: number, max: number) => {
        const logMin = Math.log(min);
        const logMax = Math.log(max);
        return Math.exp(logMin + (logMax - logMin) * value);
      };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sliderValue = parseFloat(e.target.value);
        // Convert slider value (0-1) to logarithmic scale
        const scaledValue = logScale(sliderValue, 0.0005, 100);
        setRadius(scaledValue);
    };

    const LabelWithIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
        <label className="flex items-center gap-2 font-medium">
          {icon}
          <span>{label}</span>
        </label>
      )

  return (
    <div className="flex-1 p-4 space-y-6 overflow-y-auto text-sm text-base-content">

        {/* Noise Intensity */}
        <section className="space-y-2">
          <LabelWithIcon icon={<SlidersHorizontal className="w-4 h-4" />} label="Noise Intensity" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
            className="range range-accent"
          />
          <div className="text-xs opacity-70">Current: {(noiseLevel * 100).toFixed(0)}%</div>
        </section>

        {/* particle radius */}
        <section className="space-y-2">
          <LabelWithIcon icon={<SlidersHorizontal className="w-4 h-4" />} label="Particle radius" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={(Math.log(radius) - Math.log(0.0005)) / (Math.log(100) - Math.log(0.0005))}
            onChange={handleSliderChange}
            className="range range-accent"
          />
          <div className="text-xs opacity-70">Current: {(radius.toFixed(2))}</div>
        </section>

        {/* Background Color */}
        <section className="space-y-2">
          <LabelWithIcon icon={<Droplet className="w-4 h-4" />} label="Background Color" />
          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="w-full h-10 p-1 border rounded bg-base-100"
          />
          <div className="text-xs opacity-70">Hex: {background}</div>
        </section>

        {/* Particle Color */}
        <section className="space-y-2">
          <LabelWithIcon icon={<Droplet className="w-4 h-4" />} label="Particle Color" />
          <input
            type="color"
            value={grainColor}
            onChange={(e) => setGrainColor(e.target.value)}
            className="w-full h-10 p-1 border rounded bg-base-100"
          />
          <div className="text-xs opacity-70">Hex: {grainColor}</div>
        </section>

        

      </div>
  )
}

export default InspectorNoise