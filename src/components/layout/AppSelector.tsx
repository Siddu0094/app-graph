import { useApps } from '@/hooks/useApps'
import { useAppStore } from '@/store/useAppStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AppSelector() {
  const { data: apps, isLoading, error } = useApps()
  const { selectedAppId, setSelectedAppId } = useAppStore()

  if (isLoading) {
    return (
      <div className="flex h-full flex-col p-4">
        <div className="mb-4 flex gap-2">
          <div className="h-10 flex-1 animate-pulse rounded-md bg-muted" />
          <div className="h-10 w-10 animate-pulse rounded-md bg-muted" />
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 animate-pulse rounded-md bg-muted" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <div className="text-center text-sm text-destructive">
          Failed to load apps
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col bg-[#1a1a1a]">
      <div className="p-4">
        <div className="mb-2 text-sm font-semibold">Application</div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 bg-[#0a0a0a] border-[#2a2a2a] text-white placeholder:text-gray-500"
            />
          </div>
          <Button size="icon" variant="outline" className="bg-[#0a0a0a] border-[#2a2a2a] text-white hover:bg-[#2a2a2a]">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {apps?.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedAppId(app.id)}
            className={cn(
              'flex w-full items-center gap-3 px-4 py-3 text-left text-white transition-colors hover:bg-[#2a2a2a]',
              selectedAppId === app.id && 'bg-[#2a2a2a]'
            )}
          >
            <span className="text-lg">{app.icon || '📦'}</span>
            <span className="flex-1 text-sm">{app.name}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  )
}

