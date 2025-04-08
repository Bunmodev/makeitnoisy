import {
  Wand2,
  Palette,
  SlidersHorizontal,
  ImageDown,
  Sparkles,
  Layers
} from 'lucide-react'
import { useUIStore } from '../store/useUI'

interface SidebarProps {
    icon: React.ReactNode;
    label: 'Generate Noise' | 'Gradient' | 'Intensity' | 'Effects' | 'Presets' | 'Export';
}

const Sidebar = () => {
    const { setSideNav, sidenav } = useUIStore()

    const SidebarItem = ({ icon, label }: SidebarProps) => {

        return (
          <button
            className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left transition-colors ${
              label === sidenav
                ? 'bg-accent text-accent-content font-semibold'
                : 'hover:bg-accent/10'
            }`}
            onClick={() => setSideNav(label)}
          >
            {icon}
            <span>{label}</span>
          </button>
        )
    }

  return (
    <div className="w-72 min-h-screen border-r border-accent/40 bg-base-100 flex flex-col">
      {/* App Title */}
      <div className="p-4 border-b border-accent/40">
        <h1 className="uppercase font-bold text-lg tracking-wide text-base-content">MakeItNoisy</h1>
        <p className="text-xs text-muted">Design Playground</p>
      </div>

      {/* Tool Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 text-sm text-base-content">
        <SidebarItem icon={<Wand2 className="w-4 h-4" />} label="Generate Noise" />
        <SidebarItem icon={<Palette className="w-4 h-4" />} label="Gradient" />
        <SidebarItem icon={<SlidersHorizontal className="w-4 h-4" />} label="Intensity" />
        <SidebarItem icon={<Sparkles className="w-4 h-4" />} label="Effects" />
        <SidebarItem icon={<Layers className="w-4 h-4" />} label="Presets" />
        <SidebarItem icon={<ImageDown className="w-4 h-4" />} label="Export" />
      </nav>

      {/* Footer / Version */}
      <div className="p-4 border-t border-accent/40 text-xs text-muted">
        v0.1 – Alpha
      </div>
    </div>
  )
}

export default Sidebar
