import { create } from 'zustand';

interface UIState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFramework: string;
  setSelectedFramework: (framework: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedFramework: 'react',
  setSelectedFramework: (framework) => set({ selectedFramework: framework }),
}));
