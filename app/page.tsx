import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, Eye, Heart, Megaphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Youth-Led Movement for Democratic Change in Nepal",
  description:
    "Join the Nepal movement centering Gen Z leadership with millennial support. Empowering youth voices in governance, technology, health, finance, and arts for democratic change.",
  keywords: [
    "Nepal youth movement",
    "Gen Z leadership Nepal",
    "youth activism Nepal",
    "democratic change Nepal",
    "civic engagement",
    "intergenerational support",
    "youth empowerment",
    "Nepal democracy",
    "political participation",
    "social change",
  ],
  openGraph: {
    title: "Youth-Led Movement for Democratic Change in Nepal",
    description:
      "A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, technology, health, finance, and the arts.",
    images: [
      {
        url: "/nepal-mountains-landscape-with-youth-activists-sil.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal youth activists leading democratic change",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth-Led Movement for Democratic Change in Nepal",
    description: "Empowering Gen Z leadership in Nepal through intergenerational support and democratic engagement.",
  },
  alternates: {
    canonical: "https://millennials4genz.org",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Millennials4GenZ - Youth-Led Movement for Nepal",
  description:
    "A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, technology, health, finance, and the arts.",
  url: "https://millennials4genz.org",
  mainEntity: {
    "@type": "Organization",
    name: "Millennials4GenZ",
    description: "Youth-led movement for democratic change in Nepal",
    areaServed: "Nepal",
    foundingDate: "2024",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://millennials4genz.org",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        Community town hall on Sept 15 •{" "}
        <Link href="#" className="underline font-medium">
          Join live →
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/nepal-mountains-landscape-with-youth-activists-sil.jpg"
            alt="Nepal youth movement - Gen Z activists leading democratic change in mountain landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-slate-900">Youth Lead. We Support.</h1>
          <div className="text-xl text-slate-600 mb-8 space-y-2 leading-relaxed">
            <p>
              A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, leadership, management, innovation and entrepreneurship.
            </p>
            <p>Millennials act as scaffolding: skills, safety, transparency—without taking the mic.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about/principles">Read Principles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Youth First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Decisions, spokespeople, and the narrative belong to Gen Z.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>No Paternalism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">We advise on request, we don't override.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Inclusive by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Gender, caste, region, ability—no one left out.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Transparent & Accountable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Open budgets, open minutes, open data.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Megaphone className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Nonviolence & Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Protecting rights through peaceful action and advocacy.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/about/principles" className="text-teal-600 hover:underline font-medium">
              See full principles →
            </Link>
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">How Can You Help?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Governance
                </Badge>
                <CardTitle className="text-xl">Policy & Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• Policy drafting clinics</p>
                <p className="text-sm text-slate-600">• Meeting minute takers</p>
                <p className="text-sm text-slate-600">• Process designers for assemblies</p>
                <p className="text-sm text-slate-600">• Election observation prep</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Governance
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Technology
                </Badge>
                <CardTitle className="text-xl">Digital Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• Secure comms setup</p>
                <p className="text-sm text-slate-600">• SMS info lines</p>
                <p className="text-sm text-slate-600">• Open data portals</p>
                <p className="text-sm text-slate-600">• Website & form builds</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Tech
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Health
                </Badge>
                <CardTitle className="text-xl">Wellness & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• First-aid teams</p>
                <p className="text-sm text-slate-600">• Verified clinic referrals</p>
                <p className="text-sm text-slate-600">• Mental-health peer support</p>
                <p className="text-sm text-slate-600">• Trauma-informed training</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Health
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Finance
                </Badge>
                <CardTitle className="text-xl">Financial Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• Donation rails</p>
                <p className="text-sm text-slate-600">• Open ledger & expense review</p>
                <p className="text-sm text-slate-600">• Procurement guidelines</p>
                <p className="text-sm text-slate-600">• Co-op models</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Finance
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Arts & Culture
                </Badge>
                <CardTitle className="text-xl">Creative Expression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• Translation (EN/नेपाली)</p>
                <p className="text-sm text-slate-600">• Oral histories</p>
                <p className="text-sm text-slate-600">• Murals, music, theater</p>
                <p className="text-sm text-slate-600">• Media literacy workshops</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Arts
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Community
                </Badge>
                <CardTitle className="text-xl">Social Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600">• Kitchens/shelters</p>
                <p className="text-sm text-slate-600">• Logistics</p>
                <p className="text-sm text-slate-600">• Conflict mediation</p>
                <p className="text-sm text-slate-600">• Rural outreach linking</p>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Volunteer for Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gen Z Voices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Gen Z Voices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-slate-600 italic mb-4">
                  "We're not asking for permission anymore. We're building the Nepal we want to see."
                </p>
                <p className="font-medium text-slate-900">— Someone, 19, Kathmandu</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-slate-600 italic mb-4">
                  "The older generation has the skills we need. But this time, we set the direction."
                </p>
                <p className="font-medium text-slate-900">— Someone, 22, Pokhara</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-slate-600 italic mb-4">
                  "Real change happens when everyone has a voice, regardless of where they come from."
                </p>
                <p className="font-medium text-slate-900">— Someone, 20, Dharan</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/updates" className="text-teal-600 hover:underline font-medium">
              More voices →
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency Snapshot */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Transparency Snapshot</h2>
            <p className="text-slate-600">
              Every rupee tracked. Every decision recorded. See our live ledger and weekly summaries.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">247</div>
                <p className="text-sm text-slate-600">Active Volunteers</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">₹2.4L</div>
                <p className="text-sm text-slate-600">Funds Raised</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">₹1.8L</div>
                <p className="text-sm text-slate-600">Funds Spent</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">Sep 1</div>
                <p className="text-sm text-slate-600">Last Audit</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">Full transparency → /transparency</Button>
          </div>
        </div>
      </section>

      {/* Safety & Legal Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Safety & Legal Help</h2>
          <p className="text-slate-600 mb-8">Know your rights. Stay secure online. Help is a click away.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">Know Your Rights</Button>
            <Button variant="outline">Digital Security Basics</Button>
            <Button variant="outline">Mental Health Support</Button>
            <Button variant="outline">Emergency Contacts</Button>
          </div>
          <div className="mt-6">
            <Link href="/resources/toolkits" className="text-teal-600 hover:underline font-medium">
              All toolkits →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Stay Connected</h2>
          <p className="text-slate-600 mb-8">Low-noise, action-focused updates delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-md bg-white"
            />
            <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
