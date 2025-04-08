import { useUIStore } from "../store/useUI"
import InspectorExport from "./content/InspectorExport"
import InspectorFX from "./content/InspectorFX"
import InspectorGradient from "./content/InspectorGradient"
import InspectorIntensity from "./content/InspectorIntensity"
import InspectorNoise from "./content/InspectorNoise"
import InspectorPresets from "./content/InspectorPresets"

const Inspector = () => {
    const { sidenav } = useUIStore()
  
  return (
    <div className="w-72 min-h-full border-l border-accent/40 bg-base-100 flex flex-col">
      <div className="p-4 border-b border-accent/40">
        <h2 className="text-base font-semibold uppercase tracking-wide">Inspector</h2>
      </div>

      {sidenav === 'Generate Noise' && <InspectorNoise />}
      {sidenav === 'Gradient' && <InspectorGradient />}
      {sidenav === 'Intensity' && <InspectorIntensity />}
      {sidenav === 'Effects' && <InspectorFX />}
      {sidenav === 'Presets' && <InspectorPresets />}
      {sidenav === 'Export' && <InspectorExport />}

      <div className="border-t p-4 text-xs text-muted text-center">
        Customize your canvas 🎨
      </div>
    </div>
  )
}



export default Inspector
