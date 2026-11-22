import { useId, useState } from 'react'
import type { ReactNode } from 'react'

export default function Disclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="rounded-lg border border-slate-700 p-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(value => !value)}
        className="font-medium text-blue-300 underline"
      >
        {label}
      </button>
      <div id={panelId} hidden={!open} className="mt-2 text-slate-300">{children}</div>
    </div>
  )
}
