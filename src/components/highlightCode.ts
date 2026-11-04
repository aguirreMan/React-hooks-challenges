import { createBundledHighlighter, createSingletonShorthands } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import type { CodeLanguage } from './CodeBlock'

const { codeToTokens } = createSingletonShorthands(createBundledHighlighter({
  langs: {
    javascript: () => import('shiki/langs/javascript.mjs'),
    typescript: () => import('shiki/langs/typescript.mjs'),
    tsx: () => import('shiki/langs/tsx.mjs'),
    jsx: () => import('shiki/langs/jsx.mjs'),
    json: () => import('shiki/langs/json.mjs'),
    shellscript: () => import('shiki/langs/shellscript.mjs'),
  },
  themes: {
    'github-dark-default': () => import('shiki/themes/github-dark-default.mjs'),
  },
  engine: () => createJavaScriptRegexEngine(),
}))

export async function highlightCode(code: string, language: CodeLanguage) {
  const { tokens } = await codeToTokens(code, {
    lang: language === 'bash' ? 'shellscript' : language,
    theme: 'github-dark-default',
  })
  return tokens
}
