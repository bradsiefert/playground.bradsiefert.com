import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Animated Rainbow Button" 
      subtitle="A button with animated rainbow gradient effects"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Animated rainbow button - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
    title="Animated Rainbow Button" 
      subtitle="A button with animated rainbow gradient effects"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Animated rainbow button - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
