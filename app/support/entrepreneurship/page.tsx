import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Network, DollarSign, BookOpen, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrepreneurship & Investment Support - Millennials4GenZ",
  description:
    "How Millennials can help Gen Z entrepreneurs in Nepal access capital, networks, and mentorship while maintaining youth leadership and control over their ventures.",
  keywords: [
    "Nepal entrepreneurship",
    "Gen Z startups",
    "youth entrepreneurship Nepal",
    "startup mentorship",
    "investment opportunities",
    "business development",
    "financial literacy",
    "innovation culture",
  ],
}

export default function EntrepreneurshipSupportPage() {
  const supportMethods = [
    {
      icon: Users,
      title: "Mentorship & Skills Transfer",
      description: "Share lessons learned from running startups, working abroad, or managing projects.",
      details: [
        "Host workshops on pitching, financial literacy, and scaling businesses",
        "Offer 'office hours' where Gen Z founders can ask specific questions",
        "Share real experiences from startup failures and successes",
        "Provide guidance without prescribing solutions",
      ],
    },
    {
      icon: Network,
      title: "Building Networks",
      description: "Connect Gen Z entrepreneurs to diaspora investors, accelerators, and industry experts.",
      details: [
        "Link youth startups with cooperatives and local businesses",
        "Introduce founders to customers, suppliers, and mentors",
        "Connect with international accelerators and incubators",
        "Facilitate partnerships with established companies",
      ],
    },
    {
      icon: DollarSign,
      title: "Access to Capital",
      description: "Create transparent, youth-led investment vehicles and funding opportunities.",
      details: [
        "Pool funds into micro-grants and rotating community funds",
        "Help understand equity, debt, grants, and crowdfunding options",
        "Ensure transparent distribution with youth decision-making committees",
        "Support preparation of investment decks and grant applications",
      ],
    },
    {
      icon: BookOpen,
      title: "Financial & Business Literacy",
      description: "Teach essential business skills and provide practical tools for success.",
      details: [
        "Cover basics: bookkeeping, cashflow, tax compliance, investment readiness",
        "Share tools like Excel templates and open-source accounting apps",
        "Provide training on market research and customer validation",
        "Support business plan development and financial projections",
      ],
    },
    {
      icon: Lightbulb,
      title: "Fostering Innovation Culture",
      description: "Normalize experimentation and encourage social entrepreneurship.",
      details: [
        "Encourage ventures solving local problems: waste, climate, education",
        "Normalize failure as part of the learning and growth process",
        "Highlight successful youth cooperatives and social enterprises",
        "Support innovation in traditional sectors like agriculture and tourism",
      ],
    },
  ]

  const globalInspirations = [
    {
      country: "Kenya",
      example: "M-PESA Ecosystem",
      description: "Youth-driven fintech ecosystem supported by older mentors and diaspora investment.",
    },
    {
      country: "Bangladesh",
      example: "Grameen Social Business",
      description: "Community-backed micro-entrepreneurship model enabling widespread youth participation.",
    },
    {
      country: "Estonia",
      example: "e-Residency Program",
      description: "Government-backed startup ecosystem with digital infrastructure for young founders.",
    },
  ]

  const participationMethods = [
    {
      title: "Community Shares",
      description: "Villagers can buy small shares in youth enterprises to build local ownership and support.",
    },
    {
      title: "Participatory Investment Funds",
      description: "Citizens vote on which youth-led ideas to back, ensuring community involvement.",
    },
    {
      title: "Transparency Dashboards",
      description: "Publish investment inflows and outflows to maintain trust and accountability.",
    },
    {
      title: "Inclusion Guarantee",
      description: "Priority support for women, Dalit, Madhesi, and Janajati youth entrepreneurs.",
    },
  ]

  const modernTools = [
    {
      title: "Crowdfunding Platforms",
      description: "Help Gen Z use global platforms like Kickstarter or create local cooperative-style funding pools.",
    },
    {
      title: "Blockchain & Tokenization",
      description: "Transparent funding pools where communities hold governance tokens for decision-making.",
    },
    {
      title: "E-Learning Resources",
      description: "Access to MOOCs (Coursera, edX) plus local Nepali courses on entrepreneurship.",
    },
    {
      title: "Digital Marketplaces",
      description: "Support Gen Z in selling globally through platforms like Etsy, Daraz, and Shopify.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <TrendingUp className="w-16 h-16 mx-auto text-teal-600 mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">Fueling Gen Z Innovation</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Nepal's youth are brimming with ideas but often lack access to capital, networks, and mentorship.
            Millennials can play a catalytic role by opening doors to entrepreneurship and investment opportunities —
            without taking control.
          </p>
          <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700">
            Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Why This Matters</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Nepal has a growing youth population, high unemployment, and massive outmigration. Gen Z sees
                  entrepreneurship as a path to independence and impact.
                </p>
                <p>
                  Past attempts at supporting startups in Nepal have often been dominated by donor agendas, bureaucracy,
                  or risk-averse investors.
                </p>
                <p>Millennials who straddle both worlds — traditional jobs and new ventures — can bridge this gap.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg p-8 text-center">
              <div className="text-slate-500">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-teal-500" />
                <p className="text-sm">Space for youth innovation illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            How Millennials Can Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-teal-100">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">{method.description}</p>
                    <ul className="space-y-2">
                      {method.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="h-3 w-3 text-teal-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Global Inspirations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {inspiration.country}
                  </Badge>
                  <CardTitle className="text-lg text-slate-900">{inspiration.example}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{inspiration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Society Participation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Society Participation & Inclusion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {participationMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 rounded-full p-2 mt-1">
                      <span className="text-teal-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{method.title}</h3>
                      <p className="text-sm text-slate-600">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Modern Tools & Technology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modernTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-slate-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Gen Z carries the ideas, energy, and urgency. Millennials bring scaffolding — networks, mentorship, and
            credibility. Together, they can build a youth-first entrepreneurial ecosystem in Nepal."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/volunteer?type=entrepreneurship">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              asChild
            >
              <Link href="/support">Back to Support Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
