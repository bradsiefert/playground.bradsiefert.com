import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="City of Chicago Business card" 
      subtitle="A stylized business card design inspired by Chicago"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">City of Chicago Business card - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="City of Chicago Business card"
      subtitle="A stylized business card design inspired by Chicago"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">City of Chicago Business card - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
