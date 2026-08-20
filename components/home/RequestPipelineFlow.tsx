'use client'

import {
  Background,
  BackgroundVariant,
  type Edge,
  Handle,
  type Node,
  type NodeProps,
  Position,
  ReactFlow,
  useNodesState,
} from '@xyflow/react'
import { useEffect, useMemo, useState } from 'react'

import '@xyflow/react/dist/style.css'

/**
 * The hero's signature: the "pixel to database" story as a live graph.
 * Three frontend decisions wire into a simulated request waterfall —
 * flip them and the systems consequences update in real time.
 */

type PipelineState = {
  mode: 'ssr' | 'csr'
  cache: boolean
  payload: number // kb
}

type Setter = (patch: Partial<PipelineState>) => void

type ControlData = { state: PipelineState; set: Setter }

/* Simulated latency model — deliberately simple, labeled as such in the UI. */
function model({ mode, cache, payload }: PipelineState) {
  const network = Math.round(24 + payload * 0.35)
  const next = mode === 'ssr' ? 62 : 12
  const api = cache ? 9 : 74
  const db = cache ? 0 : 48
  const browser =
    mode === 'ssr'
      ? Math.round(28 + payload * 0.18)
      : Math.round(96 + payload * 0.55)
  const total = network + next + api + db + browser
  const ttfb =
    mode === 'ssr' ? Math.round(network / 2) + next + api + db : network
  return {
    total,
    ttfb,
    rows: [
      { label: 'browser', ms: browser },
      { label: 'next.js', ms: next },
      { label: 'nest api', ms: api },
      { label: 'postgres', ms: db },
      { label: 'network', ms: network },
    ],
  }
}

function Shell({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className='min-w-[148px] rounded-lg border border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-ink-600 dark:bg-ink-800/90'>
      <p className='border-b border-zinc-100 px-3 py-1.5 font-mono text-[10px] tracking-wide text-zinc-500 dark:border-ink-700 dark:text-zinc-400'>
        {title}
      </p>
      <div className='px-3 py-2.5'>{children}</div>
    </div>
  )
}

const handleClass =
  '!h-2 !w-2 !border-2 !border-white !bg-accent-500 dark:!border-ink-900'

function RenderModeNode({ data }: NodeProps<Node<ControlData>>) {
  const { state, set } = data
  return (
    <Shell title='rendering'>
      <div className='flex flex-col gap-1.5'>
        {(['ssr', 'csr'] as const).map((m) => (
          <label
            key={m}
            className='flex cursor-pointer items-center gap-2 font-mono text-xs text-zinc-700 dark:text-zinc-300'
          >
            <span
              className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                state.mode === m
                  ? 'border-accent-500'
                  : 'border-zinc-300 dark:border-ink-600'
              }`}
            >
              {state.mode === m && (
                <span className='h-1.5 w-1.5 rounded-full bg-accent-500' />
              )}
            </span>
            <input
              type='radio'
              name='rp-mode'
              className='sr-only'
              checked={state.mode === m}
              onChange={() => set({ mode: m })}
            />
            {m === 'ssr' ? 'server (SSR)' : 'client (CSR)'}
          </label>
        ))}
      </div>
      <Handle type='source' position={Position.Right} className={handleClass} />
    </Shell>
  )
}

function CacheNode({ data }: NodeProps<Node<ControlData>>) {
  const { state, set } = data
  return (
    <Shell title='redis cache'>
      <button
        type='button'
        role='switch'
        aria-checked={state.cache}
        onClick={() => set({ cache: !state.cache })}
        className='flex items-center gap-2 font-mono text-xs text-zinc-700 dark:text-zinc-300'
      >
        <span
          className={`relative h-4 w-8 shrink-0 rounded-full transition-colors ${
            state.cache ? 'bg-accent-500' : 'bg-zinc-300 dark:bg-ink-600'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white transition-transform dark:bg-ink-950 ${
              state.cache ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </span>
        {state.cache ? 'hit' : 'miss'}
      </button>
      <Handle type='source' position={Position.Right} className={handleClass} />
    </Shell>
  )
}

function PayloadNode({ data }: NodeProps<Node<ControlData>>) {
  const { state, set } = data
  return (
    <Shell title='payload'>
      <div className='flex items-center gap-2'>
        <input
          type='range'
          min={10}
          max={200}
          step={10}
          value={state.payload}
          onChange={(e) => set({ payload: Number(e.target.value) })}
          className='rp-range w-20'
          aria-label='Payload size in kilobytes'
        />
        <span className='font-mono text-xs text-zinc-700 tabular-nums dark:text-zinc-300'>
          {state.payload}kb
        </span>
      </div>
      <Handle type='source' position={Position.Right} className={handleClass} />
    </Shell>
  )
}

function WaterfallNode({ data }: NodeProps<Node<ControlData>>) {
  const m = model(data.state)
  const max = Math.max(...m.rows.map((r) => r.ms), 1)
  return (
    <div className='w-[230px] rounded-lg border border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-ink-600 dark:bg-ink-800/90'>
      {(['a', 'b', 'c'] as const).map((id, i) => (
        <Handle
          key={id}
          id={id}
          type='target'
          position={Position.Left}
          style={{ top: 28 + i * 34 }}
          className={handleClass}
        />
      ))}
      <div className='flex items-baseline justify-between border-b border-zinc-100 px-3 py-1.5 dark:border-ink-700'>
        <p className='font-mono text-[10px] tracking-wide text-zinc-500 dark:text-zinc-400'>
          request waterfall
        </p>
        <p className='font-mono text-[10px] text-zinc-400 dark:text-zinc-500'>
          ttfb{' '}
          <span className='text-accent-600 dark:text-accent-400'>
            {m.ttfb}ms
          </span>
        </p>
      </div>
      <div className='flex flex-col gap-1.5 px-3 py-2.5'>
        {m.rows.map((row) => (
          <div key={row.label} className='flex items-center gap-2'>
            <span className='w-14 font-mono text-[10px] text-zinc-500 dark:text-zinc-400'>
              {row.label}
            </span>
            <span className='h-2 flex-1 overflow-hidden rounded-sm bg-zinc-100 dark:bg-ink-700'>
              <span
                className='block h-full rounded-sm bg-accent-500/80 transition-all duration-300 dark:bg-accent-400/80'
                style={{ width: `${Math.max((row.ms / max) * 100, 2)}%` }}
              />
            </span>
            <span className='w-10 text-right font-mono text-[10px] text-zinc-600 tabular-nums dark:text-zinc-300'>
              {row.ms}ms
            </span>
          </div>
        ))}
      </div>
      <div className='flex items-baseline justify-between border-t border-zinc-100 px-3 py-1.5 dark:border-ink-700'>
        <p className='font-mono text-[10px] text-zinc-400 italic dark:text-zinc-500'>
          simulated latencies
        </p>
        <p className='font-mono text-xs font-semibold text-accent-600 tabular-nums dark:text-accent-400'>
          {m.total}ms
        </p>
      </div>
    </div>
  )
}

const nodeTypes = {
  renderMode: RenderModeNode,
  cache: CacheNode,
  payload: PayloadNode,
  waterfall: WaterfallNode,
}

const DEFAULT_STATE: PipelineState = { mode: 'ssr', cache: true, payload: 60 }
const defaultData: ControlData = { state: DEFAULT_STATE, set: () => undefined }

const initialNodes: Node<ControlData>[] = [
  {
    id: 'mode',
    type: 'renderMode',
    position: { x: 0, y: 0 },
    data: defaultData,
  },
  {
    id: 'cache',
    type: 'cache',
    position: { x: 14, y: 122 },
    data: defaultData,
  },
  {
    id: 'payload',
    type: 'payload',
    position: { x: 4, y: 226 },
    data: defaultData,
  },
  {
    id: 'out',
    type: 'waterfall',
    position: { x: 292, y: 44 },
    data: defaultData,
  },
]

const edges: Edge[] = [
  { id: 'e1', source: 'mode', target: 'out', targetHandle: 'a' },
  { id: 'e2', source: 'cache', target: 'out', targetHandle: 'b' },
  { id: 'e3', source: 'payload', target: 'out', targetHandle: 'c' },
].map((e) => ({
  ...e,
  animated: true,
  style: { stroke: 'var(--rp-edge)', strokeWidth: 1.5 },
}))

export default function RequestPipelineFlow() {
  const [state, setState] = useState<PipelineState>(DEFAULT_STATE)
  const set: Setter = (patch) => setState((s) => ({ ...s, ...patch }))

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  useEffect(() => {
    setNodes((ns) => ns.map((n) => ({ ...n, data: { state, set } })))
  }, [state, setNodes])

  const defaultEdges = useMemo(() => edges, [])

  return (
    <div className='rp-flow h-[340px] w-full sm:h-[360px]'>
      <ReactFlow
        nodes={nodes}
        edges={defaultEdges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        fitView
        fitViewOptions={{ padding: 0.04 }}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        colorMode='system'
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={18}
          size={1}
          color='var(--rp-dot)'
        />
      </ReactFlow>
    </div>
  )
}
