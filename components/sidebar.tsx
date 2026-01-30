"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { List } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeToggle } from "@/components/theme-toggle"
import { playgrounds } from "@/lib/playgrounds"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b bg-background">
        <div className="px-3 py-1.5 rounded-md bg-muted text-sm font-medium">
          UI Laboratory
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <List className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-72 border-r bg-background transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="px-3 py-1.5 rounded-md bg-muted text-sm font-medium">
              UI Laboratory
            </div>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1">
            <nav className="p-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm transition-colors",
                  pathname === "/"
                    ? "bg-muted font-medium"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
              >
                Home
              </Link>
              {playgrounds.map((playground) => {
                const isActive = pathname === `/${playground.slug}`
                return (
                  <Link
                    key={playground.slug}
                    href={`/${playground.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm transition-colors",
                      isActive
                        ? "bg-muted font-medium"
                        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {playground.title}
                  </Link>
                )
              })}
            </nav>
          </ScrollArea>
        </div>
      </aside>
    </>
  )
}
