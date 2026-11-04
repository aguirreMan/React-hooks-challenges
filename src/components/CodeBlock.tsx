import { Fragment, useEffect, useState } from 'react'
import type { highlightCode } from './highlightCode'

const languageLabels = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  tsx: 'TSX',
  jsx: 'JSX',
  json: 'JSON',
  bash: 'Bash',
}

export type CodeLanguage = keyof typeof languageLabels

interface CodeBlockProps {
  code: string
  language: CodeLanguage
  filename?: string
  showCopy?: boolean
}

type Highlight = {
  code: string
  language: CodeLanguage
  lines: Awaited<ReturnType<typeof highlightCode>>
}

export default function CodeBlock({ code, language, filename, showCopy = true }: CodeBlockProps) {
  const [highlight, setHighlight] = useState<Highlight>()
  const [copyStatus, setCopyStatus] = useState<{ code: string; message: string }>()
  const label = filename ? `${filename}, ${languageLabels[language]} code` : `${languageLabels[language]} code`
  const lines = highlight?.code === code && highlight.language === language ? highlight.lines : undefined

  useEffect(() => {
    let active = true

    import('./highlightCode')
      .then(({ highlightCode }) => highlightCode(code, language))
      .then(lines => {
        if (active) setHighlight({ code, language, lines })
      })
      .catch(() => {
        // The plain-text code remains available if highlighting fails to load.
      })

    return () => { active = false }
  }, [code, language])

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus({ code, message: 'Code copied.' })
    } catch {
      setCopyStatus({ code, message: 'Copy failed. Select and copy the code manually.' })
    }
  }

  return (
    <figure className="w-full min-w-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-950 text-slate-200">
      {(filename || showCopy) && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 bg-slate-900 px-4 py-2">
          <span className="min-w-0 break-all font-mono text-xs text-slate-300">{filename || languageLabels[language]}</span>
          {showCopy && (
            <button type="button" onClick={copyCode}
              className="rounded border border-slate-600 px-2 py-1 text-xs hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-blue-400">
              Copy code
            </button>
          )}
        </div>
      )}
      <div role="region" aria-label={label} tabIndex={0}
        className="overflow-x-auto focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-400">
        <pre className="m-0 w-max min-w-full whitespace-pre p-4 font-mono text-sm leading-relaxed">
          <code>{lines ? lines.map((line, lineIndex) => (
            <Fragment key={lineIndex}>
              {lineIndex > 0 && '\n'}
              {line.map(token => (
                <span key={token.offset} style={{ color: token.color }}>{token.content}</span>
              ))}
            </Fragment>
          )) : code}</code>
        </pre>
      </div>
      {showCopy && (
        <p role="status" className={copyStatus?.code === code ? 'px-4 pb-2 text-xs text-slate-300' : 'sr-only'}>
          {copyStatus?.code === code ? copyStatus.message : ''}
        </p>
      )}
    </figure>
  )
}
