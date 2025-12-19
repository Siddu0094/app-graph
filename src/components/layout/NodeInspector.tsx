import { useAppStore } from '@/store/useAppStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { useState, useEffect } from 'react'
import { useReactFlow } from 'reactflow'
import type { NodeData } from '@/types'

export function NodeInspector() {
  // All hooks must be called unconditionally and in the same order
  const { selectedNodeId, activeInspectorTab, setActiveInspectorTab } = useAppStore()
  const { getNode, setNodes } = useReactFlow()
  
  const node = selectedNodeId ? getNode(selectedNodeId) : null
  const nodeData = node?.data as NodeData | undefined

  const [localValue, setLocalValue] = useState(0)
  const [localName, setLocalName] = useState('')
  const [localDescription, setLocalDescription] = useState('')

  useEffect(() => {
    if (nodeData) {
      setLocalValue(nodeData.value)
      setLocalName(nodeData.label)
      setLocalDescription(nodeData.description ?? '')
    } else {
      // Reset to defaults when no node is selected
      setLocalValue(0)
      setLocalName('')
      setLocalDescription('')
    }
  }, [nodeData])

  if (!selectedNodeId || !node) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <div className="text-center text-sm text-muted-foreground">
          Select a node to inspect
        </div>
      </div>
    )
  }

  const handleValueChange = (newValue: number) => {
    setLocalValue(newValue)
    updateNodeData({ value: newValue })
  }

  const handleNameChange = (newName: string) => {
    setLocalName(newName)
    updateNodeData({ label: newName })
  }

  const handleDescriptionChange = (newDescription: string) => {
    setLocalDescription(newDescription)
    updateNodeData({ description: newDescription })
  }

  const updateNodeData = (updates: Partial<NodeData>) => {
    if (!selectedNodeId) return
    setNodes((nodes) =>
      nodes.map((n) =>
        n.id === selectedNodeId
          ? { ...n, data: { ...(n.data as NodeData), ...updates } }
          : n
      )
    )
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'Healthy'
      case 'degraded':
        return 'Degraded'
      case 'down':
        return 'Down'
      default:
        return status
    }
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-card p-4">
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Service Node</h3>
          {nodeData && (
            <Badge variant={getStatusVariant(nodeData.status) as any}>
              {getStatusLabel(nodeData.status)}
            </Badge>
          )}
        </div>
      </div>

      <Tabs value={activeInspectorTab} onValueChange={setActiveInspectorTab} className="flex-1">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="node-name">Node Name</Label>
            <Input
              id="node-name"
              value={localName}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="node-description">Description</Label>
            <Textarea
              id="node-description"
              value={localDescription}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="node-value">Value</Label>
              <span className="text-sm text-muted-foreground">{localValue}</span>
            </div>
            <Slider
              id="node-value"
              value={[localValue]}
              onValueChange={([value]) => handleValueChange(value)}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
            <Input
              type="number"
              value={localValue}
              onChange={(e) => {
                const numValue = Math.max(0, Math.min(100, Number(e.target.value) || 0))
                handleValueChange(numValue)
              }}
              min={0}
              max={100}
              className="w-full"
            />
          </div>
        </TabsContent>

        <TabsContent value="runtime" className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label>Node ID</Label>
            <Input value={node.id} disabled />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            {nodeData && (
              <Input value={getStatusLabel(nodeData.status)} disabled />
            )}
          </div>
          <div className="space-y-2">
            <Label>Position</Label>
            <div className="flex gap-2">
              <Input value={node.position.x.toFixed(0)} disabled placeholder="X" />
              <Input value={node.position.y.toFixed(0)} disabled placeholder="Y" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

