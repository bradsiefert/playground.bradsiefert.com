import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Photo show/hide photo metadata" 
      subtitle="Toggle photo metadata visibility with smooth transitions"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Photo show/hide photo metadata - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Photo show/hide photo metadata"
      subtitle="Toggle photo metadata visibility with smooth transitions"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Photo show/hide photo metadata - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
