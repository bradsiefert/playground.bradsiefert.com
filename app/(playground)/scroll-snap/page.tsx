import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Scroll Snap" 
      subtitle="Smooth scroll snapping between sections"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll Snap - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Scroll Snap"
      subtitle="Smooth scroll snapping between sections"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll Snap - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
