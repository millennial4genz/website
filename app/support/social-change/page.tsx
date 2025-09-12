import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Megaphone,
  Building2,
  BookOpen,
  Laptop,
  Scale,
  Globe,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Eye,
  HandHeart,
  Languages,
  Accessibility,
  Shield,
  Mic,
  Map,
  Vote,
  Headphones,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function SocialChangePage() {
  const howMillennialsCanHelp = [
    {
      title: "Amplifying Marginalized Voices",
      description: "Use platforms to redirect media, donors, and allies toward Gen Z leaders from marginalized groups. Translate policy briefs into local languages.",
      icon: Megaphone,
      example: "Ensure women, Dalits, Madhesis, LGBTQ+, and disabled youth have visible leadership roles.",
    },
    {
      title: "Building Inclusive Structures", 
      description: "Support quotas and reserved spaces within youth assemblies. Provide facilitation training for accessible meetings.",
      icon: Building2,
      example: "Design rotating leadership systems so no single group dominates.",
    },
    {
      title: "Education & Awareness",
      description: "Organize workshops on unconscious bias, caste discrimination, gender equity, and disability rights.",
      icon: BookOpen,
      example: "Document and share stories of inclusivity wins in Nepal (e.g., Dalit women elected in municipalities).",
    },
    {
      title: "Accessibility in Technology",
      description: "Promote SMS-based participation for areas with weak internet. Build websites/apps that support screen readers and local scripts.",
      icon: Laptop,
      example: "Offer digital literacy training to rural and marginalized youth.",
    },
    {
      title: "Policy & Advocacy",
      description: "Assist in drafting inclusive policy recommendations — but ensure youth advocates present them.",
      icon: Scale,
      example: "Pushing for stronger implementation of Nepal's constitutional guarantees for proportional inclusion.",
    },
  ]

  const inclusivityPrinciples = [
    {
      title: "Representation is non-negotiable",
      description: "Marginalized voices must not only be present, but centered",
      icon: Users,
    },
    {
      title: "Nothing about us without us", 
      description: "Policies and strategies must include direct input from those most affected",
      icon: MessageSquare,
    },
    {
      title: "Accessibility as default",
      description: "Language, technology, and spaces must adapt to people, not the other way around",
      icon: Accessibility,
    },
    {
      title: "Equity over equality",
      description: "Extra support for historically marginalized groups to achieve fair outcomes",
      icon: Scale,
    },
  ]

  const globalInspirations = [
    { 
      country: "South Africa",
      year: "Post-Apartheid",
      achievement: "Truth and Reconciliation Commission centered healing and inclusion",
    },
    { 
      country: "India",
      year: "Panchayati Raj",
      achievement: "Women and Dalits given constitutional quotas in village councils",
    },
    { 
      country: "Brazil",
      year: "Ongoing",
      achievement: "Participatory Budgeting - Citizens from all backgrounds decide spending priorities",
    },
    { 
      country: "Canada",
      year: "Ongoing",
      achievement: "Truth and reconciliation processes with indigenous peoples",
    },
  ]

  const modernTools = [
    {
      category: "Language AI",
      tools: "Use translation tools to bridge Nepali and minority languages",
      icon: Languages,
    },
    {
      category: "Crowdsourced Mapping", 
      tools: "Platforms like Ushahidi to visualize exclusion or discrimination hotspots",
      icon: Map,
    },
    {
      category: "Digital Voting Tools",
      tools: "Enable rural, disabled, and diaspora communities to participate remotely",
      icon: Vote,
    },
    {
      category: "Inclusive Media",
      tools: "Podcasts, TikToks, and comics amplifying stories from marginalized communities",
      icon: Headphones,
    },
  ]

  const millennialRoles = [
    {
      title: "Translators & Content Creators",
      description: "Turn complex policies into simple, multilingual formats",
      icon: Languages,
    },
    {
      title: "Facilitators",
      description: "Run inclusive meetings, ensuring equal airtime",
      icon: Mic,
    },
    {
      title: "Bridge Builders",
      description: "Connect Gen Z leaders to feminist groups, disability rights orgs, and caste equity movements",
      icon: Heart,
    },
    {
      title: "Watchdogs", 
      description: "Track whether inclusivity commitments are implemented",
      icon: Eye,
    },
    {
      title: "Resource Providers",
      description: "Fund accessibility tools (sign language interpreters, ramps, braille materials)",
      icon: DollarSign,
    },
  ]

  const societyParticipation = [
    {
      title: "Community Dialogues",
      description: "Local forums to surface marginalized voices",
    },
    {
      title: "Participatory Budgeting",
      description: "Citizens from diverse groups vote on resource allocations",
    },
    {
      title: "Cultural Recognition",
      description: "Celebrating festivals, languages, and traditions of different groups",
    },
    {
      title: "Role Models",
      description: "Highlight Gen Z leaders from marginalized backgrounds in media and schools",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/support" className="hover:text-teal-600 transition-colors">
              Support
            </Link>
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">Inclusivity & Social Change</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Heart className="w-16 h-16 mx-auto mb-4 text-pink-500" />
              <p className="text-sm">Illustration of diverse people holding hands or abstract equality symbols</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              <Heart className="w-4 h-4 mr-2" />
              Inclusivity & Social Change
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Inclusivity & Social Change
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Ensuring Nepal's youth movement represents every identity, region, and voice — Millennials as Bridges to Ensure No One is Left Behind.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Inclusivity Matters in Nepal</h2>

          {/* Space for representation stats */}
          <div className="mb-8 h-48 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Infographic: Nepal's Historical Exclusions</p>
              <p className="text-xs text-slate-400 mt-2">
                Caste & Ethnicity • Gender • Geography • Disability & LGBTQ+
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Historical Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Caste & Ethnicity</h4>
                    <p className="text-sm text-slate-600">Dalits, Madhesis, Janajatis, Tharus, and other marginalized groups excluded from power</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Gender</h4>
                    <p className="text-sm text-slate-600">Women underrepresented in leadership despite constitutional quotas</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Geography</h4>
                    <p className="text-sm text-slate-600">Rural and remote mountain communities lack access to resources and representation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Disability & LGBTQ+</h4>
                    <p className="text-sm text-slate-600">Limited legal recognition and persistent social stigma</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">The Challenge Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Elite Domination</h4>
                    <p className="text-sm text-slate-600">
                      Movements in Nepal have often been dominated by elites in Kathmandu, leaving vulnerable groups sidelined
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Gen Z's Vision</h4>
                    <p className="text-sm text-slate-600">Fresh commitment to intersectionality and equality</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Help strengthen foundations for truly inclusive movements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principles of Inclusivity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Principles of Inclusivity</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusivityPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-pink-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">How Millennials Can Help</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {howMillennialsCanHelp.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.description}</p>
                    <div className="p-3 bg-slate-50 rounded-md">
                      <p className="text-xs text-slate-500 font-medium">Example:</p>
                      <p className="text-sm text-slate-600">{item.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">How Society Can Participate</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {societyParticipation.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Global Inspirations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-pink-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                    <Badge variant="outline" className="text-xs">{inspiration.year}</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can adapt these models by embedding inclusivity in local government, youth-led assemblies, and national reform.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Tools & Technology</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-pink-100">
                        <IconComponent className="h-5 w-5 text-pink-600" />
                      </div>
                      <CardTitle className="text-base text-slate-900">{tool.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{tool.tools}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Concrete Roles for Millennials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Concrete Roles for Millennials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Inclusivity is not an add-on — it is the foundation of a just movement. A movement that leaves anyone behind is no movement at all."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-pink-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Unity and inclusion symbols
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z has the vision and drive</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials can help ensure every community, every identity, and every voice is part of building a new Nepal. Together, we create a movement that truly represents all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-pink-600 hover:bg-pink-700" asChild>
              <Link href="/volunteer?type=social-change">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/support">Back to Support Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
