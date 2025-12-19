import { useQuery } from '@tanstack/react-query'
import type { Graph } from '@/types'
import { mockGraphs } from '@/mocks/data'

interface GraphResponse {
  data: Graph
  error?: string
}

async function fetchGraph(appId: string): Promise<Graph> {
  try {
    const response = await fetch(`/api/apps/${appId}/graph`)
    if (!response.ok) {
      throw new Error('Failed to fetch graph')
    }
    const result: GraphResponse = await response.json()
    if (result.error) {
      throw new Error(result.error)
    }
    return result.data
  } catch (error) {
    // Fallback to mock data if MSW is not available
    console.warn('API call failed, using mock data:', error)
    const mockGraph = mockGraphs[appId]
    if (!mockGraph) {
      throw new Error(`Graph not found for app ${appId}`)
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockGraph), 400)
    })
  }
}

export function useGraph(appId: string | null) {
  return useQuery({
    queryKey: ['graph', appId],
    queryFn: () => fetchGraph(appId!),
    enabled: !!appId,
  })
}

