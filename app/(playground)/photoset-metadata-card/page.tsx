import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Photoset Metadata Card" 
      subtitle="A card displaying photo metadata in an elegant layout"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Photoset Metadata Card - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Photoset Metadata Card"
      subtitle="A card displaying photo metadata in an elegant layout"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Photoset Metadata Card - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
