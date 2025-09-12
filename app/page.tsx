import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, Eye, Heart, Megaphone, Sparkles, Target } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Announcement Bar */}
      <div
        className="bg-gradient-to-r from-violet-600 to-indigo-600 py-3 px-4 text-center text-sm font-medium"
        style={{ color: "white" }}
      >
        <Sparkles className="inline w-4 h-4 mr-2" />
        <span style={{ color: "white" }}>Be the part of the solution • </span>
        <Link
          href="/volunteer"
          className="underline font-semibold hover:text-violet-200 transition-colors"
          style={{ color: "white" }}
        >
          Join Now →
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-indigo-50/90 to-violet-100/95"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
              Youth Lead.
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              We Support.
            </span>
          </h1>

          <div className="text-xl text-slate-700 mb-10 space-y-3 leading-relaxed max-w-4xl mx-auto">
            <p className="font-medium">
              A Nepal movement centering <span className="text-violet-600 font-semibold">Gen Z leadership</span>—backed
              by intergenerational support in governance, innovation, and entrepreneurship.
            </p>
            <p className="text-slate-600">
              Millennials provide the scaffolding: skills, safety, transparency—without taking the mic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/volunteer">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50 bg-transparent" asChild>
              <Link href="/about/principles">Read Principles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Movement Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
              <Target className="w-4 h-4 mr-2" />
              Core Principles
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our movement is built on transparent principles that ensure youth leadership remains at the center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Youth First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Decisions, spokespeople, and the narrative belong to Gen Z.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">No Paternalism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">We advise on request, we don't override.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Inclusive by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Gender, caste, region, ability—no one left out.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Transparent & Accountable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Open budgets, open minutes, open data.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Nonviolence & Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Protecting rights through peaceful action and advocacy.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild className="border-violet-200 hover:bg-violet-50 bg-transparent">
              <Link href="/about/principles">
                See full principles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Join the Movement
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Can You Help?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose your area of expertise and support Gen Z leadership in Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-700">
                  Governance
                </Badge>
                <CardTitle className="text-xl">Policy & Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Policy drafting clinics</p>
                  <p>• Meeting minute takers</p>
                  <p>• Process designers for assemblies</p>
                  <p>• Election observation prep</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  asChild
                >
                  <Link href="/volunteer?type=governance">Volunteer for Governance</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-indigo-100 text-indigo-700">
                  Technology
                </Badge>
                <CardTitle className="text-xl">Digital Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Secure comms setup</p>
                  <p>• SMS info lines</p>
                  <p>• Open data portals</p>
                  <p>• Website & form builds</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                  asChild
                >
                  <Link href="/volunteer?type=technology">Volunteer for Tech</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-700">
                  Health
                </Badge>
                <CardTitle className="text-xl">Wellness & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• First-aid teams</p>
                  <p>• Verified clinic referrals</p>
                  <p>• Mental-health peer support</p>
                  <p>• Trauma-informed training</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                  asChild
                >
                  <Link href="/volunteer?type=health">Volunteer for Health</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-yellow-100 text-yellow-700">
                  Finance
                </Badge>
                <CardTitle className="text-xl">Financial Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Donation rails</p>
                  <p>• Open ledger & expense review</p>
                  <p>• Procurement guidelines</p>
                  <p>• Co-op models</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  asChild
                >
                  <Link href="/volunteer?type=finance">Volunteer for Finance</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-purple-100 text-purple-700">
                  Arts & Culture
                </Badge>
                <CardTitle className="text-xl">Creative Expression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Translation (EN/नेपाली)</p>
                  <p>• Oral histories</p>
                  <p>• Murals, music, theater</p>
                  <p>• Media literacy workshops</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  asChild
                >
                  <Link href="/volunteer?type=humanities">Volunteer for Arts</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-700">
                  Community
                </Badge>
                <CardTitle className="text-xl">Social Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Kitchens/shelters</p>
                  <p>• Logistics</p>
                  <p>• Conflict mediation</p>
                  <p>• Rural outreach linking</p>
                </div>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  asChild
                >
                  <Link href="/volunteer?type=community">Volunteer for Community</Link>
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
                <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
                <p className="text-sm text-slate-600">Active Volunteers</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">₹40L</div>
                <p className="text-sm text-slate-600">Funds Raised</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">₹0L</div>
                <p className="text-sm text-slate-600">Funds Spent</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">-</div>
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Make Change?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Time is Now</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Nepal's youth deserve leadership roles in their own future. Join millennials who believe in amplifying, not
            replacing, the next generation's voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/volunteer">
                Start Contributing <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-violet-600 hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
