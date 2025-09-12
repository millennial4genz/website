"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Sprout,
  Handshake,
  Globe,
  Search,
  Move as Dove,
  Scale,
  Lightbulb,
} from "lucide-react"

const principles = [
  {
    id: "youth-first",
    icon: Sprout,
    title: "Youth-First Leadership",
    preview: "Gen Z sets the direction, makes the decisions, and represents the movement publicly.",
    description:
      "Gen Z sets the direction, makes the decisions, and represents the movement publicly. Millennials and older allies stand behind as scaffolding — offering tools, networks, and experience without seeking the spotlight.",
    whyItMatters:
      "Nepal's political history shows that when older generations dominate leadership, youth voices are sidelined. Youth-first ensures this revolution truly belongs to the new generation.",
    practices: [
      "Gen Z chairs assemblies, meetings, and press briefings",
      "Allies redirect interviews or requests to youth leaders",
      "Decision-making power rests with Gen Z councils or forums",
    ],
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "no-paternalism",
    icon: Handshake,
    title: "No Paternalism, No Co-option",
    preview: "Millennials and older generations are partners, not overseers.",
    description:
      "Millennials and older generations are partners, not overseers. We do not dictate, patronize, or use our influence to capture decision-making power.",
    whyItMatters:
      "Revolutions fail when older elites absorb or dilute youth-led agendas. This principle protects Gen Z's autonomy.",
    practices: [
      "Allies share advice only when requested",
      "Mentorship is offered, not imposed",
      "Resource sharing is transparent, with no strings attached",
    ],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "inclusivity",
    icon: Globe,
    title: "Inclusivity by Design",
    preview: "Leadership must reflect Nepal's full diversity across all dimensions.",
    description:
      "This movement commits to radical inclusivity. Leadership and participation must reflect Nepal's full diversity — across gender, caste, ethnicity, geography, disability, and economic background.",
    whyItMatters:
      "Historic exclusions (Dalit, Madhesi, Janajati, women, LGBTQ+, disabled) weakened past movements. A new Nepal must rise from collective voices.",
    practices: [
      "Quotas or guarantees for marginalized groups in leadership spaces",
      "All events and materials accessible in Nepali, English, and key regional languages",
      "Spaces designed to be physically and digitally accessible",
    ],
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "transparency",
    icon: Search,
    title: "Transparency & Accountability",
    preview: "Every rupee, every decision, every agreement is open to scrutiny.",
    description:
      "Every rupee, every decision, every agreement is open to scrutiny. Transparency is not optional — it's the foundation of trust.",
    whyItMatters:
      "Corruption and hidden deals destroyed faith in past governments. We prove accountability by modeling it ourselves.",
    practices: [
      "Live or regularly updated ledgers of funds",
      "Public minutes from assemblies and working groups",
      "Open-source tools and documentation for governance processes",
    ],
    color: "bg-amber-100 text-amber-800",
  },
  {
    id: "nonviolence",
    icon: Dove,
    title: "Nonviolence & Protection of Rights",
    preview: "We resist brutality with nonviolence and protect civil liberties.",
    description:
      "We resist brutality with nonviolence. Protecting civil liberties — freedom of speech, assembly, press, and digital rights — is core to our struggle.",
    whyItMatters:
      "Authoritarian governments use violence as a pretext to delegitimize protest. Nonviolence keeps moral authority on the side of youth and communities.",
    practices: [
      "Train volunteers in nonviolent protest and de-escalation",
      "Document and report human rights violations transparently",
      "Provide legal aid and mental health support to affected protesters",
    ],
    color: "bg-rose-100 text-rose-800",
  },
  {
    id: "community-centered",
    icon: Scale,
    title: "Community-Centered Change",
    preview: "The movement belongs equally to rural, peri-urban, and marginalized communities.",
    description:
      "We don't only fight in Kathmandu. The movement belongs equally to rural, peri-urban, and marginalized communities who often face the brunt of exclusion.",
    whyItMatters:
      "Nepal's transformations often stalled because rural voices were ignored. Sustainable change must root in villages, towns, and districts as much as in the capital.",
    practices: [
      "Rural youth assemblies supported with resources and platforms",
      "SMS and offline channels for participation where internet is weak",
      "Direct inclusion of local issues in national agendas",
    ],
    color: "bg-teal-100 text-teal-800",
  },
  {
    id: "learning",
    icon: Lightbulb,
    title: "Learning & Adaptability",
    preview: "Open to experimentation, critique, and adaptation. Mistakes are part of growth.",
    description:
      "This generation builds differently: open to experimentation, critique, and adaptation. Mistakes are part of growth.",
    whyItMatters:
      "Past regimes clung to rigid ideologies and power structures, causing collapse. Openness to learn ensures resilience.",
    practices: [
      "Regular retrospectives (what worked / what failed)",
      "Feedback loops: surveys, assemblies, digital polls",
      "Willingness to evolve principles as contexts shift",
    ],
    color: "bg-orange-100 text-orange-800",
  },
]

export default function PrinciplesPage() {
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

      {/* Header Section */}
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

          {/* Space for header illustration */}
          <div className="mb-8 h-48 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Globe className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for header illustration: Youth holding flags/books</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Our Guiding Principles</h1>
          <p className="text-xl text-slate-600 text-pretty max-w-3xl mx-auto">
            These principles ensure that Nepal's transformation is led by Gen Z, with support from allies who commit to
            transparency, inclusivity, and nonviolence.
          </p>
          <p className="text-lg text-slate-500 mt-4">
            They are living principles — open to refinement as the movement grows.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon
              const isExpanded = expandedCards.includes(principle.id)

              return (
                <Card key={principle.id} className="h-fit hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-1">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${principle.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-slate-900">{principle.title}</CardTitle>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => toggleCard(principle.id)} className="shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </div>
                    <CardDescription className="text-slate-600 mt-2">{principle.description}</CardDescription>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Why it matters</h4>
                          <p className="text-slate-600 text-sm">{principle.whyItMatters}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Practices</h4>
                          <ul className="space-y-1">
                            {principle.practices.map((practice, index) => (
                              <li key={index} className="text-slate-600 text-sm flex items-start">
                                <span className="text-teal-500 mr-2">•</span>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Space for principle-specific diagrams */}
                        
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
            "These principles are our social contract. Gen Z leads boldly, while allies stand firm as guardians of
            process, safety, and equity."
          </blockquote>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-600 mb-8 text-pretty">
            These principles are living and evolving. We invite feedback and commitment from every participant in the
            movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Commit to Principles
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Return to About</Link>
            </Button>
          </div>

          {/* Space for closing illustration */}
          <div className="mt-12 h-40 bg-gradient-to-r from-slate-100 to-teal-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Handshake className="w-12 h-12 mx-auto mb-2 text-teal-500" />
              <p className="text-sm">Space for solidarity/unity illustration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
