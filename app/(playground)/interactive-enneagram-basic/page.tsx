import { PlaygroundView } from "@/components/playground-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Enneagram (basic) | UI Laboratory",
}

const code = `export default function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-muted-foreground">Interactive Enneagram (basic) - Coming soon</p>
    </div>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Interactive Enneagram (basic)"
      subtitle="A basic interactive enneagram visualization"
      code={code}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Interactive Enneagram (basic) - Coming soon</p>
      </div>
    </PlaygroundView>
  )
}
