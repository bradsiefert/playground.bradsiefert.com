"use client"

import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "playground-code-panel-visible"

function getStoredValue(): boolean {
  if (typeof window === "undefined") return true
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === null) return true
    return stored === "true"
  } catch {
    return true
  }
}

export function useCodePanelVisible() {
  const [visible, setVisibleState] = useState(true)

  // Hydrate from localStorage on mount
  useEffect(() => {
    setVisibleState(getStoredValue())
  }, [])

  const setVisible = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    setVisibleState((prev) => {
      const next = typeof value === "function" ? value(prev) : value
      try {
        localStorage.setItem(STORAGE_KEY, String(next))
      } catch {
        // Ignore localStorage errors (private mode, quota, etc.)
      }
      return next
    })
  }, [])

  return [visible, setVisible] as const
}
