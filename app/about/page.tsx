import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Millennials4GenZ - Intergenerational Youth Movement Nepal",
  description:
    "Learn about our intergenerational movement centering Gen Z leadership in Nepal's transformation, with millennials providing scaffolding support for democratic change.",
  keywords: [
    "about millennials4genz",
    "Nepal youth movement story",
    "intergenerational collaboration Nepal",
    "Gen Z leadership Nepal",
    "millennial support youth",
    "Nepal democratic transformation",
    "youth movement principles",
    "civic engagement Nepal",
    "social change Nepal",
  ],
  openGraph: {
    title: "About Millennials4GenZ - Intergenerational Youth Movement Nepal",
    description:
      "Learn about our intergenerational movement centering Gen Z leadership in Nepal's transformation, with millennials providing scaffolding support.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Millennials4GenZ - Intergenerational Youth Movement Nepal",
    description: "Learn about our intergenerational movement centering Gen Z leadership in Nepal's transformation.",
  },
  alternates: {
    canonical: "https://millennials4genz.org/about",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Millennials4GenZ",
  description: "Learn about our intergenerational movement centering Gen Z leadership in Nepal's transformation",
  url: "https://millennials4genz.org/about",
  mainEntity: {
    "@type": "Organization",
    name: "Millennials4GenZ",
    description: "Intergenerational movement centering Gen Z leadership in Nepal's transformation",
    foundingDate: "2024",
    areaServed: "Nepal",
    knowsAbout: ["Youth Leadership", "Democratic Governance", "Intergenerational Collaboration"],
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://millennials4genz.org/about",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">About #millennial4genz</h1>
          <p className="text-xl text-slate-600 text-pretty max-w-3xl mx-auto mb-8">
            We are an intergenerational movement centering Gen Z leadership in Nepal's transformation, with millennials
            providing scaffolding support without taking the spotlight.
          </p>

          {/* Space for about hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Users className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for intergenerational collaboration image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Nepal stands at a crossroads. The old political order has failed to deliver on promises of prosperity,
              inclusion, and justice. Meanwhile, a new generation has come of age—digitally native, globally connected,
              and unwilling to accept the status quo.
            </p>
            <p>
              millennial4genz emerged from the recognition that sustainable change requires both the energy and vision
              of Gen Z and the experience and resources of millennials. But this collaboration must be structured
              differently than past movements.
            </p>
            <p>
              We reject paternalistic models where older generations lead and younger ones follow. Instead, we center
              Gen Z voices while millennials provide scaffolding—offering skills, networks, and institutional knowledge
              without seeking control or credit.
            </p>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Learn More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle>Our Principles</CardTitle>
                <CardDescription>
                  The seven guiding principles that shape how we organize and govern ourselves
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/about/principles">
                    Read Principles <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle>Our Values</CardTitle>
                <CardDescription>
                  Solidarity, courage, care, integrity, creativity, and justice — the moral compass of our movement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/about/values">
                    Learn Values <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  Common questions about our movement, structure, and how to get involved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Link href="/about/faq">
                    Read FAQ <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Whether you're Gen Z ready to lead or a millennial ready to support, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
