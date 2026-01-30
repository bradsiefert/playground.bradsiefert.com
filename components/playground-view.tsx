"use client"

import * as React from "react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import { CodeBlock } from "@/components/code-block"
import { cn } from "@/lib/utils"

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
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="border-b bg-background px-6 py-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Resizable panels */}
      <ResizablePanelGroup direction="vertical" className="flex-1">
        {/* Preview Panel */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div
            className={cn(
              "h-full overflow-auto p-8",
              "bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)]",
              "bg-[length:20px_20px]"
            )}
          >
            <div className="mx-auto max-w-4xl">{children}</div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Code Panel */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full overflow-auto bg-card">
            <CodeBlock code={code} language={language} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
