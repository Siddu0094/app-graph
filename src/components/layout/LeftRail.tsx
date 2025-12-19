import { Github, Database, Box, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'

const icons = [
  { icon: Github, label: 'GitHub' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Box, label: 'Redis' },
  { icon: Database, label: 'MongoDB' },
  { icon: Box, label: 'Service' },
  { icon: Network, label: 'Network' },
]

export function LeftRail() {
  return (
    <div className="hidden w-16 flex-col items-center gap-2 border-r border-[#2a2a2a] bg-[#1a1a1a] py-4 lg:flex">
      {icons.map((item, index) => {
        const Icon = item.icon
        return (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="h-12 w-12"
            title={item.label}
          >
            <Icon className="h-5 w-5" />
          </Button>
        )
      })}
    </div>
  )
}

