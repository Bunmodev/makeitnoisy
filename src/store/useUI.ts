import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
    sidenav: 'Generate Noise' | 'Gradient' | 'Intensity' | 'Effects' | 'Presets' | 'Export';
    setSideNav: (nav: 'Generate Noise' | 'Gradient' | 'Intensity' | 'Effects' | 'Presets' | 'Export') => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            sidenav: 'Generate Noise',
            setSideNav: (nav) => set({ sidenav: nav })
        }),
        {
            name: 'ui-store',
            version: 1
        }
    )
)