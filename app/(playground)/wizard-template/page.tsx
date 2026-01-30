import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Wizard Template" 
      subtitle="A multi-step wizard form template"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Wizard Template - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Wizard Template"
      subtitle="A multi-step wizard form template"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Wizard Template - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
