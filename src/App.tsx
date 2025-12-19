import { TopBar } from '@/components/layout/TopBar'
import { LeftRail } from '@/components/layout/LeftRail'
import { AppSelector } from '@/components/layout/AppSelector'
import { RightPanel } from '@/components/layout/RightPanel'
import { FlowCanvas } from '@/components/canvas/FlowCanvas'
import { ResourceCardsView } from '@/components/resources/ResourceCardsView'
import { ReactFlowProvider } from 'reactflow'
import { useAppStore } from '@/store/useAppStore'
import { useEffect } from 'react'
import { useApps } from '@/hooks/useApps'

function AppContent() {
  const { data: apps } = useApps()
  const { selectedAppId, setSelectedAppId, viewType, isMobilePanelOpen, setIsMobilePanelOpen } = useAppStore()

  useEffect(() => {
    if (apps && apps.length > 0 && !selectedAppId) {
      setSelectedAppId(apps[0].id)
    }
  }, [apps, selectedAppId, setSelectedAppId])

  return (
    <div className="flex h-screen flex-col" style={{ backgroundColor: '#0a0a0a', backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftRail />
        {/* Application Panel on Left */}
        <div className="hidden w-80 border-r bg-[#1a1a1a] lg:block">
          <AppSelector />
        </div>
        {/* Main Content Area */}
        <div className="relative flex-1" style={{ backgroundColor: '#0a0a0a', backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          {viewType === 'graph' ? (
            <FlowCanvas />
          ) : (
            <ResourceCardsView />
          )}
        </div>
        {/* Right Panel (Node Inspector for graph view) */}
        {viewType === 'graph' && <RightPanel />}
        {/* Mobile App Selector */}
        {isMobilePanelOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setIsMobilePanelOpen(false)}
            />
            <div className="fixed left-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-80 border-r border-[#2a2a2a] bg-[#1a1a1a] shadow-lg lg:hidden">
              <AppSelector />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <ReactFlowProvider>
      <AppContent />
    </ReactFlowProvider>
  )
}

export default App

