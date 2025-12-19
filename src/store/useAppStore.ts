import { create } from 'zustand'

export type ViewType = 'graph' | 'resources'

interface AppStore {
  selectedAppId: string | null
  selectedNodeId: string | null
  isMobilePanelOpen: boolean
  activeInspectorTab: string
  viewType: ViewType
  setSelectedAppId: (appId: string | null) => void
  setSelectedNodeId: (nodeId: string | null) => void
  setIsMobilePanelOpen: (open: boolean) => void
  setActiveInspectorTab: (tab: string) => void
  setViewType: (view: ViewType) => void
}

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: 'config',
  viewType: 'graph',
  setSelectedAppId: (appId) => set({ selectedAppId: appId }),
  setSelectedNodeId: (nodeId) => set({ selectedNodeId: nodeId }),
  setIsMobilePanelOpen: (open) => set({ isMobilePanelOpen: open }),
  setActiveInspectorTab: (tab) => set({ activeInspectorTab: tab }),
  setViewType: (view) => set({ viewType: view }),
}))

