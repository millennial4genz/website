import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - millennial4genz",
  description:
    "Learn about our movement, principles, and vision for Nepal's future led by Gen Z with millennial support.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">{children}</div>
}
