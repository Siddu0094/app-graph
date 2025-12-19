import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Settings, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import type { Resource } from '@/types'
import { cn } from '@/lib/utils'

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const [activeTab, setActiveTab] = useState<'cpu' | 'memory' | 'disk' | 'region'>('cpu')
  const [cpuValue, setCpuValue] = useState(resource.cpu)
  const [memoryValue, setMemoryValue] = useState(resource.memory)
  const [diskValue, setDiskValue] = useState(resource.disk)

  const getStatusIcon = () => {
    switch (resource.status) {
      case 'healthy':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'down':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusVariant = () => {
    switch (resource.status) {
      case 'healthy':
        return 'success'
      case 'degraded':
        return 'secondary'
      case 'down':
        return 'error'
      default:
        return 'default'
    }
  }

  const getStatusLabel = () => {
    switch (resource.status) {
      case 'healthy':
        return 'Success'
      case 'degraded':
        return 'Degraded'
      case 'down':
        return 'Error'
      default:
        return resource.status
    }
  }

  const getCurrentValue = () => {
    switch (activeTab) {
      case 'cpu':
        return cpuValue
      case 'memory':
        return memoryValue
      case 'disk':
        return diskValue
      default:
        return 0
    }
  }

  const setCurrentValue = (value: number) => {
    switch (activeTab) {
      case 'cpu':
        setCpuValue(value)
        break
      case 'memory':
        setMemoryValue(value)
        break
      case 'disk':
        setDiskValue(value)
        break
    }
  }

  return (
    <div className="relative rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{resource.icon}</span>
          <div>
            <h3 className="font-semibold capitalize">{resource.name}</h3>
            <p className="text-xs text-muted-foreground">{resource.cost}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Values */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <span className="font-medium">{getCurrentValue().toFixed(2)}</span>
        {activeTab === 'memory' && (
          <>
            <span className="text-muted-foreground">,</span>
            <span className="text-muted-foreground">0.05 GB</span>
          </>
        )}
        {activeTab === 'disk' && (
          <>
            <span className="text-muted-foreground">,</span>
            <span className="text-muted-foreground">10.00 GB</span>
          </>
        )}
        {activeTab !== 'region' && (
          <>
            <span className="text-muted-foreground">,</span>
            <span className="text-muted-foreground">1</span>
          </>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-1">
        {(['cpu', 'memory', 'disk', 'region'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'rounded-md px-2 py-1 text-xs font-medium capitalize transition-colors',
              activeTab === tab
                ? 'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 dark:bg-[#0a0a0a] dark:text-muted-foreground'
            )}
          >
            {tab}
            {activeTab === tab && tab !== 'region' && (
              <span className="ml-1 text-xs">{getCurrentValue().toFixed(2)}</span>
            )}
          </button>
        ))}
      </div>

      {/* Slider */}
      {activeTab !== 'region' && (
        <div className="mb-4">
          <Slider
            value={[getCurrentValue()]}
            onValueChange={([value]) => setCurrentValue(value)}
            min={0}
            max={activeTab === 'cpu' ? 1 : 10}
            step={0.01}
            className="w-full"
          />
          <div className="mt-1 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {getCurrentValue().toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Region Display */}
      {activeTab === 'region' && (
        <div className="mb-4 rounded-md bg-muted dark:bg-[#0a0a0a] p-2 text-sm">
          {resource.region}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <Badge variant={getStatusVariant() as any} className="text-xs">
            {getStatusLabel()}
          </Badge>
        </div>
        <div className="text-xs text-muted-foreground">aws</div>
      </div>
    </div>
  )
}

