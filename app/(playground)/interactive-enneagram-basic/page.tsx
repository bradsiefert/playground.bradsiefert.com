import { PlaygroundView } from "@/components/playground-view"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Enneagram (basic) | UI Playground",
}

const SIZE = 400
const CX = 200
const CY = 200
const R = 160
const LABEL_OFFSET = 24
const POINT_RADIUS = 8

function getPoint(n: number, radius: number = R): { x: number; y: number } {
  const angleDeg = 90 - (n === 9 ? 0 : n) * 40
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: CX + radius * Math.cos(rad),
    y: CY - radius * Math.sin(rad),
  }
}

function EnneagramSvg() {
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => getPoint(n))
  const labelPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) =>
    getPoint(n, R + LABEL_OFFSET)
  )
  const hexadOrder = [1, 4, 2, 8, 5, 7, 1] as const
  const hexadPoints = hexadOrder.map((n) => getPoint(n))

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-md aspect-square"
      aria-label="Enneagram symbol"
    >
      {/* Circle */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
      />
      {/* Triangle (3-6-9) */}
      <line
        x1={points[2].x}
        y1={points[2].y}
        x2={points[5].x}
        y2={points[5].y}
        stroke="currentColor"
        strokeWidth={4}
      />
      <line
        x1={points[5].x}
        y1={points[5].y}
        x2={points[8].x}
        y2={points[8].y}
        stroke="currentColor"
        strokeWidth={4}
      />
      <line
        x1={points[8].x}
        y1={points[8].y}
        x2={points[2].x}
        y2={points[2].y}
        stroke="currentColor"
        strokeWidth={4}
      />
      {/* Hexad (1-4-2-8-5-7-1) */}
      <polyline
        points={hexadPoints.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
      />
      {/* Point circles at each of the 9 type nodes */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={POINT_RADIUS}
          fill="currentColor"
        />
      ))}
      {/* Labels 1-9 */}
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map((n, i) => (
        <text
          key={n}
          x={labelPoints[i].x}
          y={labelPoints[i].y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          className="text-sm font-medium"
          style={{ fontSize: 14 }}
        >
          {n}
        </text>
      ))}
    </svg>
  )
}

const code = `export default function Page() {
  return (
    <PlaygroundView
      title="Interactive Enneagram (basic)"
      subtitle="A basic interactive enneagram visualization"
      code={code}
    >
      <div className="flex items-center justify-center min-h-[400px] text-foreground">
        <Card>
          <CardContent className="flex justify-center pt-6 pb-6">
            <EnneagramSvg />
          </CardContent>
        </Card>
      </div>
    </PlaygroundView>
  )
}`

export default function Page() {
  return (
    <PlaygroundView
      title="Interactive Enneagram (basic)"
      subtitle="A basic interactive enneagram visualization"
      code={code}
    >
      <div className="flex items-center justify-center min-h-[400px] text-foreground">
        <Card>
          <CardContent className="flex justify-center pt-6 pb-6">
            <EnneagramSvg />
          </CardContent>
        </Card>
      </div>
    </PlaygroundView>
  )
}
