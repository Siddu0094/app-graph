import { Button } from '@/components/ui/button'
import { Moon, Sun, Share2, MoreVertical, Menu, ArrowUp } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { Input } from '@/components/ui/input'
import { Lightbulb } from 'lucide-react'

export function TopBar() {
  const { setIsMobilePanelOpen, selectedAppId, viewType, setViewType } = useAppStore()
  const isDark = true // You can add theme toggle later

  return (
    <div className="flex h-14 items-center justify-between border-b border-[#2a2a2a] bg-[#1a1a1a] px-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobilePanelOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        {/* Logo placeholder */}
        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold">A</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm">
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
          <span>supertokens-golang</span>
          <ArrowUp className="h-4 w-4 text-muted-foreground" />
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant={viewType === 'graph' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewType('graph')}
        >
          Graph
        </Button>
        <Button
          variant={viewType === 'resources' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewType('resources')}
        >
          Resources
        </Button>
        <Button variant="ghost" size="icon" title="Share">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" title="Theme">
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="icon" title="More">
          <MoreVertical className="h-4 w-4" />
        </Button>
        {/* Profile placeholder */}
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-xs">👤</span>
        </div>
      </div>
    </div>
  )
}

