import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Liquid Glass Navbar" 
      subtitle="A navbar with liquid glass morphism effects"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Liquid Glass Navbar - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Liquid Glass Navbar"
      subtitle="A navbar with liquid glass morphism effects"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Liquid Glass Navbar - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
