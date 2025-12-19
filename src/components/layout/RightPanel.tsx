import { AppSelector } from './AppSelector'
import { NodeInspector } from './NodeInspector'
import { useAppStore } from '@/store/useAppStore'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function RightPanel() {
  const { selectedNodeId, isMobilePanelOpen, setIsMobilePanelOpen } = useAppStore()
  const showInspector = !!selectedNodeId

  return (
    <>
      {/* Mobile overlay */}
      {isMobilePanelOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobilePanelOpen(false)}
        />
      )}

      {/* Panel - Only show Node Inspector, AppSelector is now on left */}
      <div
        className={cn(
          'fixed right-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-80 border-l border-[#2a2a2a] bg-[#1a1a1a] shadow-lg transition-transform lg:relative lg:top-0 lg:z-auto lg:h-full lg:w-80 lg:translate-x-0 lg:shadow-none',
          !isMobilePanelOpen && 'translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex h-full flex-col">
          {showInspector ? (
            <>
              <div className="flex items-center justify-between border-b p-4 lg:hidden">
                <h2 className="font-semibold">Node Inspector</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobilePanelOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <NodeInspector />
            </>
          ) : (
            <div className="flex h-full items-center justify-center p-4">
              <div className="text-center text-sm text-muted-foreground">
                Select a node to inspect
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

