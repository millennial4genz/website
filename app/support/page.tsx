import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Users,
  Heart,
  Shield,
  Palette,
  Home,
  DollarSign,
  Laptop,
  Stethoscope,
  Globe,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function SupportOverviewPage() {
  const supportAreas = [
    {
      id: "governance",
      title: "Governance & Political Process",
      icon: Scale,
      description:
        "Millennials can share lessons on constitutions, elections, and policymaking, while ensuring Gen Z keeps decision-making authority. We can help draft policy documents, observe democratic processes, and provide connections to legal or institutional experts.",
      link: "/support/governance",
    },
    {
      id: "organization",
      title: "Organization & Movement Building",
      icon: Users,
      description:
        "Many Gen Z groups are decentralized by design. Millennials can strengthen them with project management, documentation, and fundraising skills. We can set up digital tools, manage logistics, and ensure processes run smoothly — while youth leaders remain in charge of direction and strategy.",
      link: "/support/organization",
    },
    {
      id: "inclusivity",
      title: "Inclusivity & Social Change",
      icon: Heart,
      description:
        "Nepal's history is scarred by exclusion. Millennials can help Gen Z ensure marginalized voices — women, Dalits, Madhesis, Janajatis, LGBTQ+, and disabled communities — are included from the start. This means building accessible spaces, translating content into multiple languages, and amplifying diverse youth perspectives.",
      link: "/support/inclusivity",
    },
    {
      id: "rights",
      title: "Rights & Freedoms",
      icon: Shield,
      description:
        "Protecting fundamental freedoms is crucial. Millennials can provide legal defense networks, document abuses, and use their international connections to raise alarms globally. We safeguard Gen Z's right to protest, speak, and organize — defending them against state or elite repression.",
      link: "/support/rights",
    },
    {
      id: "humanities",
      title: "Humanities & Cultural Faculties",
      icon: Palette,
      description:
        "Art, history, and culture keep movements alive. Millennials can support Gen Z artists, writers, and educators in telling their stories. We help document oral histories, produce cultural content, and spread narratives that show the power of youth-led change.",
      link: "/support/humanities",
    },
    {
      id: "community",
      title: "Social & Community Development",
      icon: Home,
      description:
        "Revolutions succeed when they reach villages, towns, and neighborhoods. Millennials can help by setting up community kitchens, safe shelters, and volunteer networks. We can bridge urban protests with rural struggles, and provide mediation when tensions rise.",
      link: "/support/community",
    },
    {
      id: "finance",
      title: "Finance & Economy",
      icon: DollarSign,
      description:
        "Funding youth-led movements requires trust. Millennials can build transparent donation systems, maintain open ledgers, and teach cooperative or community-based financial models. Our role is to protect youth-led funds from corruption — not control them.",
      link: "/support/finance",
    },
    {
      id: "technology",
      title: "Technology & Innovation",
      icon: Laptop,
      description:
        "Gen Z is digitally native, but secure organizing requires more. Millennials can provide tools for encrypted communication, data protection, and civic-tech solutions like voting platforms or dashboards. We ensure tech empowers youth leadership, not surveillance or exploitation.",
      link: "/support/technology",
    },
    {
      id: "health",
      title: "Health & Well-being",
      icon: Stethoscope,
      description:
        "Movements need healthy participants. Millennials in the health sector can volunteer as first-aid providers, set up clinics, and create mental health support systems. We can also advise on inclusive health policies while ensuring youth advocates present them publicly.",
      link: "/support/health",
    },
    {
      id: "international",
      title: "International & Diplomatic Support",
      icon: Globe,
      description:
        "Global recognition helps protect youth leaders. Millennials can use their professional networks to connect Gen Z with INGOs, the UN, or diaspora groups. But we must act as facilitators only — ensuring Gen Z voices speak directly in global forums.",
      link: "/support/international",
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Innovation",
      icon: TrendingUp,
      description:
        "Nepal's youth are brimming with innovative ideas but often lack access to capital, networks, and mentorship. Millennials can bridge this gap by providing guidance, connections, and transparent funding opportunities while ensuring Gen Z maintains full control over their ventures.",
      link: "/support/entrepreneurship",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Space for hero background image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Users className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for millennial support illustration</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Ways Millennials Can Support Gen Z
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Millennials bring experience, networks, and skills — but our role is support, not leadership. These 11 areas
            show how we can help Gen Z build a just, inclusive, and transparent Nepal without taking power away.
          </p>
          <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700">
            Explore All Areas <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Support Areas Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportAreas.map((area) => {
              const IconComponent = area.icon
              return (
                <Card key={area.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {area.id.charAt(0).toUpperCase() + area.id.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-slate-900">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
                    {/* Space for area-specific illustration */}

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors bg-transparent"
                      asChild
                    >
                      <Link href={area.link}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Millennials are the scaffolding. Gen Z is the structure. Our job is to support — not overshadow."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-teal-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Scaffolding metaphor diagram
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Choose an area and get involved — your support matters.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/get-involved">
                Volunteer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about/principles">See Principles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
