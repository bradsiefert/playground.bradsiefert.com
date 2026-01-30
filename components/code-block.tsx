"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneLight, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <pre className="p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    )
  }

  const style = theme === "dark" ? atomOneDark : atomOneLight

  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      showLineNumbers
      customStyle={{
        margin: 0,
        padding: "1rem",
        background: "transparent",
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
