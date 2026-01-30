import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Interactive Enneagram (with subtypes)" 
      subtitle="An interactive enneagram with subtype variations"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Interactive Enneagram (with subtypes) - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Interactive Enneagram (with subtypes)"
      subtitle="An interactive enneagram with subtype variations"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Interactive Enneagram (with subtypes) - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
