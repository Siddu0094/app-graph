import { ResourceCard } from './ResourceCard'
import type { Resource } from '@/types'

const mockResources: Resource[] = [
  {
    id: 'postgres-1',
    name: 'Postgres',
    type: 'postgres',
    icon: '🐘',
    status: 'healthy',
    cost: '$0.03/HR',
    cpu: 0.02,
    memory: 0.05,
    disk: 10.0,
    region: 'us-east-1',
  },
  {
    id: 'redis-1',
    name: 'Redis',
    type: 'redis',
    icon: '📦',
    status: 'degraded',
    cost: '$0.03/HR',
    cpu: 0.02,
    memory: 0.05,
    disk: 10.0,
    region: 'us-east-1',
  },
  {
    id: 'mongodb-1',
    name: 'Mongodb',
    type: 'mongodb',
    icon: '🍃',
    status: 'down',
    cost: '$0.03/HR',
    cpu: 0.02,
    memory: 0.05,
    disk: 10.0,
    region: 'us-east-1',
  },
  {
    id: 'app-1',
    name: 'supertokens-golang',
    type: 'app',
    icon: '💡',
    status: 'healthy',
    cost: '$0.03/HR',
    cpu: 0.02,
    memory: 0.05,
    disk: 10.0,
    region: 'us-east-1',
  },
]

export function ResourceCardsView() {
  return (
    <div 
      className="h-full overflow-y-auto p-4"
      style={{ backgroundColor: '#0a0a0a', backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

