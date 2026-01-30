import { PlaygroundView } from "@/components/playground-view"

const code = `export default function Page() {
  return (
    <PlaygroundView 
      title="Book Excerpt" 
      subtitle="A beautifully styled book excerpt display"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Book Excerpt - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Book Excerpt"
      subtitle="A beautifully styled book excerpt display"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Book Excerpt - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
