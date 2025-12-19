import { http, HttpResponse } from 'msw'
import { mockApps, mockGraphs } from './data'

export const handlers = [
  http.get('/api/apps', async () => {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 300))
    
    // Simulate random errors (10% chance)
    if (Math.random() < 0.1) {
      return HttpResponse.json(
        { error: 'Failed to fetch apps' },
        { status: 500 }
      )
    }
    
    return HttpResponse.json({ data: mockApps })
  }),

  http.get('/api/apps/:appId/graph', async ({ params }) => {
    const { appId } = params
    
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 400))
    
    // Simulate random errors (10% chance)
    if (Math.random() < 0.1) {
      return HttpResponse.json(
        { error: 'Failed to fetch graph' },
        { status: 500 }
      )
    }
    
    const graph = mockGraphs[appId as string]
    if (!graph) {
      return HttpResponse.json(
        { error: 'Graph not found' },
        { status: 404 }
      )
    }
    
    return HttpResponse.json({ data: graph })
  }),
]
