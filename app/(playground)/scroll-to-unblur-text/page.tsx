import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Scroll to unblur text" 
      subtitle="Text that gradually unblurs as you scroll down the page"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll to unblur text - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Scroll to unblur text"
      subtitle="Text that gradually unblurs as you scroll down the page"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Scroll to unblur text - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
