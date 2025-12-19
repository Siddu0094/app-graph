import type { App, Graph } from '@/types'

export const mockApps: App[] = [
  { id: '1', name: 'supertokens-golang', icon: '💡' },
  { id: '2', name: 'supertokens-java', icon: '⚙️' },
  { id: '3', name: 'supertokens-python', icon: '🚀' },
  { id: '4', name: 'supertokens-ruby', icon: '💎' },
  { id: '5', name: 'supertokens-go', icon: '⭐' },
]

export const mockGraphs: Record<string, Graph> = {
  '1': {
    nodes: [
      {
        id: 'node-1',
        type: 'default',
        position: { x: 250, y: 100 },
        data: {
          id: 'node-1',
          label: 'API Service',
          status: 'healthy',
          value: 50,
          description: 'Main API service handling requests',
        },
      },
      {
        id: 'node-2',
        type: 'default',
        position: { x: 100, y: 300 },
        data: {
          id: 'node-2',
          label: 'Database',
          status: 'healthy',
          value: 75,
          description: 'PostgreSQL database instance',
        },
      },
      {
        id: 'node-3',
        type: 'default',
        position: { x: 400, y: 300 },
        data: {
          id: 'node-3',
          label: 'Cache Service',
          status: 'degraded',
          value: 30,
          description: 'Redis cache layer',
        },
      },
    ],
    edges: [
      { id: 'edge-1', source: 'node-1', target: 'node-2', type: 'smoothstep' },
      { id: 'edge-2', source: 'node-1', target: 'node-3', type: 'smoothstep' },
    ],
  },
  '2': {
    nodes: [
      {
        id: 'node-1',
        type: 'default',
        position: { x: 250, y: 100 },
        data: {
          id: 'node-1',
          label: 'Java Service',
          status: 'healthy',
          value: 60,
          description: 'Java backend service',
        },
      },
      {
        id: 'node-2',
        type: 'default',
        position: { x: 100, y: 300 },
        data: {
          id: 'node-2',
          label: 'Database',
          status: 'healthy',
          value: 80,
          description: 'MySQL database',
        },
      },
      {
        id: 'node-3',
        type: 'default',
        position: { x: 400, y: 300 },
        data: {
          id: 'node-3',
          label: 'Message Queue',
          status: 'down',
          value: 0,
          description: 'RabbitMQ instance',
        },
      },
    ],
    edges: [
      { id: 'edge-1', source: 'node-1', target: 'node-2', type: 'smoothstep' },
      { id: 'edge-2', source: 'node-1', target: 'node-3', type: 'smoothstep' },
    ],
  },
  '3': {
    nodes: [
      {
        id: 'node-1',
        type: 'default',
        position: { x: 250, y: 100 },
        data: {
          id: 'node-1',
          label: 'Python Service',
          status: 'healthy',
          value: 45,
          description: 'Python FastAPI service',
        },
      },
      {
        id: 'node-2',
        type: 'default',
        position: { x: 100, y: 300 },
        data: {
          id: 'node-2',
          label: 'Database',
          status: 'degraded',
          value: 25,
          description: 'MongoDB instance',
        },
      },
      {
        id: 'node-3',
        type: 'default',
        position: { x: 400, y: 300 },
        data: {
          id: 'node-3',
          label: 'Worker',
          status: 'healthy',
          value: 70,
          description: 'Background worker process',
        },
      },
    ],
    edges: [
      { id: 'edge-1', source: 'node-1', target: 'node-2', type: 'smoothstep' },
      { id: 'edge-2', source: 'node-1', target: 'node-3', type: 'smoothstep' },
    ],
  },
  '4': {
    nodes: [
      {
        id: 'node-1',
        type: 'default',
        position: { x: 250, y: 100 },
        data: {
          id: 'node-1',
          label: 'Ruby Service',
          status: 'healthy',
          value: 55,
          description: 'Ruby on Rails application',
        },
      },
      {
        id: 'node-2',
        type: 'default',
        position: { x: 100, y: 300 },
        data: {
          id: 'node-2',
          label: 'Database',
          status: 'healthy',
          value: 65,
          description: 'PostgreSQL database',
        },
      },
      {
        id: 'node-3',
        type: 'default',
        position: { x: 400, y: 300 },
        data: {
          id: 'node-3',
          label: 'Sidekiq',
          status: 'healthy',
          value: 40,
          description: 'Background job processor',
        },
      },
    ],
    edges: [
      { id: 'edge-1', source: 'node-1', target: 'node-2', type: 'smoothstep' },
      { id: 'edge-2', source: 'node-1', target: 'node-3', type: 'smoothstep' },
    ],
  },
  '5': {
    nodes: [
      {
        id: 'node-1',
        type: 'default',
        position: { x: 250, y: 100 },
        data: {
          id: 'node-1',
          label: 'Go Service',
          status: 'healthy',
          value: 90,
          description: 'Go microservice',
        },
      },
      {
        id: 'node-2',
        type: 'default',
        position: { x: 100, y: 300 },
        data: {
          id: 'node-2',
          label: 'Database',
          status: 'healthy',
          value: 85,
          description: 'CockroachDB cluster',
        },
      },
      {
        id: 'node-3',
        type: 'default',
        position: { x: 400, y: 300 },
        data: {
          id: 'node-3',
          label: 'Gateway',
          status: 'degraded',
          value: 35,
          description: 'API Gateway',
        },
      },
    ],
    edges: [
      { id: 'edge-1', source: 'node-1', target: 'node-2', type: 'smoothstep' },
      { id: 'edge-2', source: 'node-1', target: 'node-3', type: 'smoothstep' },
    ],
  },
}

