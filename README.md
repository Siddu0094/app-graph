# App Graph Builder

A responsive ReactFlow-based application for building and visualizing application graphs with node inspection capabilities.

## Features

- **Layout Composition**: Top bar, left rail, right panel with app selector and node inspector
- **ReactFlow Integration**: Interactive graph canvas with drag, select, delete, zoom, and pan
- **Node Inspector**: Service node inspection UI with tabs, status pills, and synced controls
- **TanStack Query**: Data fetching with mock APIs, loading states, and error handling
- **Zustand State Management**: Centralized state for app selection, node selection, and UI state
- **Responsive Design**: Mobile-friendly with slide-over drawer for right panel
- **TypeScript Strict Mode**: Full type safety throughout the application

## Tech Stack

- **React 18** + **Vite**
- **TypeScript** (strict mode enabled)
- **ReactFlow (xyflow)** - Graph visualization
- **shadcn/ui** - UI component library
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management
- **MSW (Mock Service Worker)** - API mocking
- **Tailwind CSS** - Styling

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

5. **Run linting**:
   ```bash
   npm run lint
   ```

6. **Type check**:
   ```bash
   npm run typecheck
   ```

## Project Structure

```
src/
├── components/
│   ├── canvas/
│   │   └── FlowCanvas.tsx      # ReactFlow graph canvas
│   ├── layout/
│   │   ├── TopBar.tsx          # Top navigation bar
│   │   ├── LeftRail.tsx        # Left sidebar with icons
│   │   ├── RightPanel.tsx      # Right panel container
│   │   ├── AppSelector.tsx     # App selection list
│   │   └── NodeInspector.tsx   # Node inspection UI
│   └── ui/                     # shadcn/ui components
├── hooks/
│   ├── useApps.ts              # TanStack Query hook for apps
│   └── useGraph.ts             # TanStack Query hook for graph data
├── mocks/
│   ├── handlers.ts             # MSW API handlers
│   └── browser.ts              # MSW browser setup
├── store/
│   └── useAppStore.ts          # Zustand store
├── types/
│   └── index.ts                # TypeScript type definitions
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## Key Decisions

### State Management
- **Zustand** chosen for its simplicity and minimal boilerplate
- Store contains: `selectedAppId`, `selectedNodeId`, `isMobilePanelOpen`, `activeInspectorTab`
- Derived state computed in components rather than stored

### Data Fetching
- **TanStack Query** for server state management with built-in caching
- **MSW** for API mocking in development
- Mock APIs simulate network latency (300-400ms) and random errors (10% chance)

### UI Components
- **shadcn/ui** components built on Radix UI primitives
- Custom styling with Tailwind CSS
- Dark mode support via CSS variables

### ReactFlow Integration
- Nodes and edges managed via ReactFlow hooks (`useNodesState`, `useEdgesState`)
- Node deletion via Delete/Backspace key
- Fit view on initial load and via top bar button
- Dotted background using ReactFlow's Background component

### Responsive Design
- Mobile-first approach
- Right panel becomes slide-over drawer on screens < 1024px
- Left rail hidden on mobile
- Touch-friendly interactions

## Functional Requirements Checklist

- ✅ Layout: top bar, left rail, right panel, dotted canvas
- ✅ Responsive: right panel becomes mobile drawer
- ✅ ReactFlow: 3 nodes, drag, select, delete, zoom/pan
- ✅ Node inspector: tabs + status pill + synced slider/input
- ✅ TanStack Query: mock /apps and /apps/:appId/graph + loading/error
- ✅ Zustand: selected app/node, mobile panel open, active tab
- ✅ TypeScript strict + linting + scripts

## Known Limitations

1. **Node Customization**: Nodes use default ReactFlow styling. Custom node types can be added for more visual variety.
2. **Edge Creation**: Users can create edges via drag, but edge deletion requires selecting and deleting connected nodes.
3. **Persistence**: Graph changes are not persisted to backend (mock APIs are read-only).
4. **Error Recovery**: Error states show messages but don't include retry buttons (TanStack Query auto-retries once).
5. **Mobile Gestures**: Some ReactFlow gestures may be limited on mobile devices.

## Development Notes

- MSW only runs in development mode
- Mock API responses include simulated latency
- Random error simulation can be disabled by modifying `handlers.ts`
- TypeScript strict mode ensures type safety
- ESLint configured for React + TypeScript best practices

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

**Quick Deploy Options:**

- **Vercel** (Recommended): Connect GitHub repo, auto-detects Vite
- **Netlify**: Connect GitHub repo, uses `netlify.toml` config
- **Cloudflare Pages**: Connect GitHub repo, auto-detects Vite
- **Docker**: Use included `Dockerfile` for containerized deployment
- **GitHub Pages**: Uses GitHub Actions workflow (`.github/workflows/deploy.yml`)

Build output is in the `dist/` directory after running `npm run build`.


