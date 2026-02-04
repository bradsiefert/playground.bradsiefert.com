"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { useCodePanelVisible } from "@/lib/use-code-panel-visible"
import { cn } from "@/lib/utils"
import { CodeIcon } from "@phosphor-icons/react"

interface PlaygroundViewProps {
  title: string
  subtitle?: string
  code: string
  language?: string
  children: React.ReactNode
}

export function PlaygroundView({
  title,
  subtitle,
  code,
  language = "tsx",
  children,
}: PlaygroundViewProps) {
  const [codeVisible, setCodeVisible] = useCodePanelVisible()
  const [transitionReady, setTransitionReady] = React.useState(false)

  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionReady(true))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="border-b bg-background px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCodeVisible((v) => !v)}
            aria-label={codeVisible ? "Hide code" : "Show code"}
            title={codeVisible ? "Hide code" : "Show code"}
            className="shrink-0"
          >
            <CodeIcon
              weight="regular"
              className="h-[1.2rem] w-[1.2rem]"
            />
            Code
          </Button>
        </div>
      </div>

      {/* Panels with animated code section */}
      <div
        className={cn(
          "grid min-h-0 flex-1 overflow-hidden",
          transitionReady && "code-panel-grid"
        )}
        style={{ gridTemplateRows: codeVisible ? "1fr 1fr" : "1fr 0fr" }}
      >
        {/* Preview row */}
        <div
          className={cn(
            "min-h-0 overflow-auto p-8",
            "bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)]",
            "bg-[length:20px_20px]"
          )}
        >
          <div className="mx-auto max-w-4xl">{children}</div>
        </div>
        {/* Code row - collapses to 0 when hidden */}
        <div className="flex min-h-0 flex-col overflow-hidden">
          <div className="h-px shrink-0 bg-border" aria-hidden />
          <div className="min-h-0 flex-1 overflow-auto bg-card">
            <CodeBlock code={code} language={language} />
          </div>
        </div>
      </div>
    </div>
  )
}
