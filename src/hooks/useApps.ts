import { useQuery } from '@tanstack/react-query'
import { mockApps } from '@/mocks/data'

interface AppsResponse {
  data: App[]
  error?: string
}

async function fetchApps(): Promise<App[]> {
  try {
    const response = await fetch('/api/apps')
    if (!response.ok) {
      throw new Error('Failed to fetch apps')
    }
    const result: AppsResponse = await response.json()
    if (result.error) {
      throw new Error(result.error)
    }
    return result.data
  } catch (error) {
    // Fallback to mock data if MSW is not available
    console.warn('API call failed, using mock data:', error)
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockApps), 300)
    })
  }
}

export function useApps() {
  return useQuery({
    queryKey: ['apps'],
    queryFn: fetchApps,
  })
}

