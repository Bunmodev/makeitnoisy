import { Palette } from 'lucide-react'
import React from 'react'

const InspectorGradient = () => {
    const LabelWithIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
      <label className="flex items-center gap-2 font-medium">
        {icon}
        <span>{label}</span>
      </label>
    )
    
  return (
    <div className='flex-1 p-4 space-y-6 overflow-y-auto text-sm text-base-content'>
        {/* Gradient Selector (future feature) */}
        <section className="space-y-2">
          <LabelWithIcon icon={<Palette className="w-4 h-4" />} label="Gradient Style" />
          <select className="select select-sm select-bordered w-full" disabled>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
            <option value="conic">Conic</option>
          </select>
          <p className="text-xs opacity-50 italic">Coming soon!</p>
        </section>
    </div>
  )
}

export default InspectorGradient