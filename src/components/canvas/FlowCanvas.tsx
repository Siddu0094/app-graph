import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
  ReactFlowInstance,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useGraph } from '@/hooks/useGraph'
import { useAppStore } from '@/store/useAppStore'

export function FlowCanvas() {
  const { selectedAppId, selectedNodeId, setSelectedNodeId } = useAppStore()
  const { data: graph, isLoading, error } = useGraph(selectedAppId)
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null)

  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    if (graph) {
      const nodesWithSelection = (graph.nodes as Node[]).map((node) => ({
        ...node,
        selected: node.id === selectedNodeId,
      }))
      setNodes(nodesWithSelection)
      setEdges(graph.edges as Edge[])
      // Fit view after nodes are set
      setTimeout(() => {
        reactFlowInstance.current?.fitView({ padding: 0.2, duration: 500 })
      }, 100)
    } else {
      setNodes([])
      setEdges([])
    }
  }, [graph, setNodes, setEdges])

  // Update node selection when selectedNodeId changes
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        selected: node.id === selectedNodeId,
      }))
    )
  }, [selectedNodeId, setNodes])

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNodeId(node.id)
    },
    [setSelectedNodeId]
  )

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null)
  }, [setSelectedNodeId])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedAppId) {
        if (selectedNodeId) {
          setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId))
          setEdges((eds) =>
            eds.filter(
              (edge) => edge.source !== selectedNodeId && edge.target !== selectedNodeId
            )
          )
          setSelectedNodeId(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedAppId, selectedNodeId, setNodes, setEdges, setSelectedNodeId])

  const nodeTypes = useMemo(() => ({}), [])

  const onInit = useCallback((instance: ReactFlowInstance) => {
    reactFlowInstance.current = instance
    instance.fitView({ padding: 0.2, duration: 500 })
  }, [])

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading graph...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-sm text-destructive">Failed to load graph</div>
      </div>
    )
  }

  return (
    <div className="h-full w-full" style={{ backgroundColor: '#0a0a0a', backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onInit={onInit}
        nodeTypes={nodeTypes}
      >
        <Background variant="dots" gap={20} size={1} color="#2a2a2a" />
        <Controls className="bg-[#1a1a1a] border-[#2a2a2a]" />
        <MiniMap className="bg-[#1a1a1a] border-[#2a2a2a]" />
      </ReactFlow>
    </div>
  )
}

