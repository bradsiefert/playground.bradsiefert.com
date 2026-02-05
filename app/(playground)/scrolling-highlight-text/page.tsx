import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Scroll driven highlights" 
      subtitle="Text highlights that animate as you scroll"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll driven highlights - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Scroll driven highlights"
      subtitle="Text highlights that animate as you scroll"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll driven highlights - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
