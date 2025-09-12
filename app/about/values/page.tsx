"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowLeft, Users, Shield, Heart, Eye, Palette, Scale } from "lucide-react"

const values = [
  {
    id: "solidarity",
    icon: Users,
    title: "Solidarity",
    preview:
      "We stand together across generations, regions, castes, and identities. An attack on one is an attack on all.",
    description:
      "We stand together across generations, regions, castes, and identities. An attack on one is an attack on all.",
    practices: [
      "Show up for each other during protests, meetings, and crises",
      "Share resources (food, transport, shelter) equitably",
      "Recognize that struggles of Dalit, Madhesi, Janajati, LGBTQ+, women, and rural communities are inseparable from the whole",
    ],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "courage",
    icon: Shield,
    title: "Courage",
    preview:
      "We confront fear with resilience. Courage is not the absence of fear, but the decision to act despite it.",
    description:
      "We confront fear with resilience. Courage is not the absence of fear, but the decision to act despite it.",
    practices: [
      "Nonviolent resistance even under repression",
      "Speaking truth to power, even when costly",
      "Protecting the vulnerable and standing firm in the face of intimidation",
    ],
    color: "bg-red-100 text-red-800",
  },
  {
    id: "care",
    icon: Heart,
    title: "Care",
    preview: "We value people before politics. Care ensures sustainability — physical, emotional, and social.",
    description: "We value people before politics. Care ensures sustainability — physical, emotional, and social.",
    practices: [
      "Mental health support and burnout prevention",
      "Prioritizing accessibility for disabled comrades",
      "Building community kitchens, safe houses, and mutual aid networks",
    ],
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: "integrity",
    icon: Eye,
    title: "Integrity",
    preview: "Our words match our actions. We refuse corruption, nepotism, and secrecy.",
    description: "Our words match our actions. We refuse corruption, nepotism, and secrecy.",
    practices: [
      "Transparent budgets and open records",
      "Declaring conflicts of interest",
      "Modeling honesty in leadership and everyday tasks",
    ],
    color: "bg-green-100 text-green-800",
  },
  {
    id: "creativity",
    icon: Palette,
    title: "Creativity",
    preview:
      "We use art, culture, and innovation to reimagine Nepal. Creativity fuels resilience and keeps the movement alive in people's hearts.",
    description:
      "We use art, culture, and innovation to reimagine Nepal. Creativity fuels resilience and keeps the movement alive in people's hearts.",
    practices: [
      "Murals, music, poetry, and theater in public spaces",
      "Tech-driven tools for transparency and participation",
      "Embracing experimentation — trying new models without fear of failure",
    ],
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "justice",
    icon: Scale,
    title: "Justice",
    preview: "We aim for systemic fairness, not charity. Justice demands dismantling inequality, not just easing it.",
    description:
      "We aim for systemic fairness, not charity. Justice demands dismantling inequality, not just easing it.",
    practices: [
      "Addressing caste, gender, and class-based discrimination directly",
      "Advocating for fair economic distribution",
      "Ensuring accountability for human rights violations",
    ],
    color: "bg-amber-100 text-amber-800",
  },
]

export default function ValuesPage() {
  const [expandedCards, setExpandedCards] = useState<string[]>([])

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link
              href="/about"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Link>
          </div>

          {/* Space for hero illustration */}
          <div className="mb-8 h-48 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Heart className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for values illustration: Hearts, hands, unity symbols</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Our Values</h1>
          <p className="text-xl text-slate-600 text-pretty max-w-3xl mx-auto">
            The moral compass guiding how we act, decide, and care for each other.
          </p>
          <p className="text-lg text-slate-500 mt-4">
            Our movement is more than policies and structures — it is grounded in values that define how we treat each
            other, how we act in public, and how we dream of a better Nepal.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              const isExpanded = expandedCards.includes(value.id)

              return (
                <Card key={value.id} className="h-fit hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${value.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-slate-900">{value.title}</CardTitle>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => toggleCard(value.id)} className="shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </div>
                    <CardDescription className="text-slate-600 mt-2">{value.preview}</CardDescription>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">What it means</h4>
                          <p className="text-slate-600 text-sm">{value.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Practices</h4>
                          <ul className="space-y-1">
                            {value.practices.map((practice, index) => (
                              <li key={index} className="text-slate-600 text-sm flex items-start">
                                <span className="text-teal-500 mr-2">•</span>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Space for value-specific diagrams */}
                        <div className="mt-4 h-32 bg-slate-50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200">
                          <p className="text-xs text-slate-400 text-center">
                            Space for {value.title} diagram/illustration
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlight Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance">
            "Our values are not slogans — they are lived practices. They shape the culture of the movement as much as
            its politics."
          </blockquote>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Do these values resonate with you?</h2>
          <p className="text-xl text-slate-600 mb-8 text-pretty">
            These values keep us human, united, and hopeful. They remind us that a new Nepal is not just about who
            governs, but about how we live together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Commit to Our Values
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about/principles">See Our Principles</Link>
            </Button>
          </div>

          {/* Space for closing illustration */}
          <div className="mt-12 h-40 bg-gradient-to-r from-slate-100 to-teal-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Users className="w-12 h-12 mx-auto mb-2 text-teal-500" />
              <p className="text-sm">Space for community/solidarity illustration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
