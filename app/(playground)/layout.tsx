import { Sidebar } from "@/components/sidebar"

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-72 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  )
}
