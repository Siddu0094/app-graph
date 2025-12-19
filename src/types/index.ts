export interface App {
  id: string
  name: string
  icon?: string
}

export interface NodeData {
  id: string
  label: string
  status: 'healthy' | 'degraded' | 'down'
  value: number
  description?: string
}

export interface GraphNode {
  id: string
  type?: string
  position: { x: number; y: number }
  data: NodeData
}

export interface GraphEdge {
  id: string
  source: string
  target: string
  type?: string
}

export interface Graph {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export interface Resource {
  id: string
  name: string
  type: 'postgres' | 'redis' | 'mongodb' | 'app'
  icon: string
  status: 'healthy' | 'degraded' | 'down'
  cost: string
  cpu: number
  memory: number
  disk: number
  region: string
}
