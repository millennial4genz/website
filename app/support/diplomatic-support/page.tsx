import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  HandHeart,
  Users,
  FileText,
  DollarSign,
  Heart,
  ChevronDown,
  ArrowRight,
  Building2,
  Megaphone,
  Link2,
  Shield,
  Eye,
  BookOpen,
  UserCheck,
  Settings,
  MapPin,
  MessageSquare,
  Video,
  Lock,
  CreditCard,
  Languages,
  Plane,
  Flag,
  Earth,
  PenTool,
  Network,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function DiplomaticSupportPage() {
  const howMillennialsCanHelp = [
    {
      title: "Diplomatic Navigation",
      description: "Guide youth leaders on how embassies, UN agencies, and INGOs operate. Provide training in diplomatic language, negotiation, and protocol. Help Gen Z secure safe, legitimate channels to speak with foreign representatives.",
      icon: Building2,
      example: "Training workshops on how to engage with embassy officials and UN representatives.",
    },
    {
      title: "International Advocacy",
      description: "Draft briefing papers and fact sheets highlighting youth perspectives. Connect Gen Z with global media outlets, human rights watchdogs, and youth forums.",
      icon: Megaphone,
      example: "Submitting youth testimonies to UN Human Rights Council or international NGOs.",
    },
    {
      title: "Diaspora Engagement",
      description: "Mobilize Nepali diaspora youth for advocacy and fundraising. Create networks linking Gen Z activists in Nepal with Nepali students abroad. Use diaspora platforms to counter disinformation.",
      icon: Users,
      example: "Connecting Nepal activists with Nepali student unions in the US, UK, and Australia.",
    },
    {
      title: "Fundraising & Resource Mobilization",
      description: "Help set up transparent crowdfunding campaigns that attract international solidarity. Ensure funds are managed openly, with reports available in Nepali and English.",
      icon: DollarSign,
      example: "Youth climate strikes globally raised funds for resilience projects — Nepal can replicate.",
    },
    {
      title: "International Solidarity Movements",
      description: "Link Gen Z with other youth movements worldwide (Fridays for Future, Hong Kong protests, Chilean students). Organize virtual exchanges: online panels, hackathons, storytelling sessions.",
      icon: HandHeart,
      example: "South-South solidarity between youth movements in Asia and Africa.",
    },
  ]

  const corePrinciples = [
    {
      title: "Youth-led diplomacy",
      description: "Gen Z voices speak directly to the world",
      icon: Users,
    },
    {
      title: "Transparency & accountability", 
      description: "All partnerships disclosed openly to avoid hidden agendas",
      icon: Eye,
    },
    {
      title: "Solidarity, not saviorism",
      description: "International allies support, but do not dictate",
      icon: HandHeart,
    },
    {
      title: "Cultural sovereignty",
      description: "Nepal's identity and values guide external collaborations",
      icon: Flag,
    },
  ]

  const globalInspirations = [
    { 
      country: "South Africa (Anti-Apartheid)",
      achievement: "International boycotts and solidarity pressured the regime",
    },
    { 
      country: "Hong Kong (2019)",
      achievement: "Diaspora networks amplified local protests globally",
    },
    { 
      country: "Palestinian Youth Movements",
      achievement: "International solidarity campaigns kept the issue visible worldwide",
    },
    { 
      country: "Fridays for Future",
      achievement: "Global youth climate strikes connected locally rooted movements to global narratives",
    },
  ]

  const modernTools = [
    {
      category: "Global Campaign Platforms",
      tools: "Avaaz, Change.org for petitions and advocacy",
      icon: Globe,
    },
    {
      category: "Video Conferencing", 
      tools: "Zoom, StreamYard for global youth dialogues",
      icon: Video,
    },
    {
      category: "Secure Communication",
      tools: "ProtonMail, Signal for diplomatic coordination",
      icon: Lock,
    },
    {
      category: "Crowdfunding",
      tools: "GoFundMe, GlobalGiving, diaspora-led Patreon models",
      icon: CreditCard,
    },
    {
      category: "Translation Tools",
      tools: "AI translators for multilingual advocacy (Nepali → English, French, Spanish)",
      icon: Languages,
    },
  ]

  const millennialRoles = [
    {
      title: "Advisors",
      description: "Train Gen Z leaders in diplomacy, negotiations, and UN systems",
      icon: BookOpen,
    },
    {
      title: "Writers",
      description: "Draft briefing notes, op-eds, and talking points for youth leaders",
      icon: PenTool,
    },
    {
      title: "Connectors",
      description: "Link youth activists with global NGOs, journalists, and embassies",
      icon: Link2,
    },
    {
      title: "Fund Stewards", 
      description: "Ensure international donations are tracked and reported",
      icon: Eye,
    },
    {
      title: "Protectors",
      description: "Prevent co-option by elite or foreign actors",
      icon: Shield,
    },
  ]

  const societyParticipation = [
    {
      title: "Citizen Diplomats",
      description: "Community members share local stories with international NGOs or journalists",
    },
    {
      title: "Solidarity Letters & Petitions",
      description: "Citizens sign or co-author appeals to global bodies",
    },
    {
      title: "Cultural Exchanges",
      description: "Local artists, poets, and musicians collaborate with global peers",
    },
    {
      title: "Hosting Delegations",
      description: "Communities welcome and brief visiting foreign missions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/support" className="hover:text-teal-600 transition-colors">
              Support
            </Link>
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">International & Diplomatic Support</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Globe className="w-16 h-16 mx-auto mb-4 text-sky-500" />
              <p className="text-sm">World map + youth voices illustration</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">
              <Globe className="w-4 h-4 mr-2" />
              International & Diplomatic Support
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            International & Diplomatic Support
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Millennials as Bridge Builders Linking Gen Z Movements to the World — Linking Gen Z leadership in Nepal with global solidarity and advocacy.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Nepal & the International Stage</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Historical Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Geopolitical Position</h4>
                    <p className="text-sm text-slate-600">Between India and China, shaped by global institutions (UN, World Bank, INGOs)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Democracy Movements (1990, 2006)</h4>
                    <p className="text-sm text-slate-600">Global solidarity and diplomatic pressure curbed state violence</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Madhes Movements</h4>
                    <p className="text-sm text-slate-600">International human rights reports amplified marginalized voices</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Climate & Disaster Relief</h4>
                    <p className="text-sm text-slate-600">Global donors supported reconstruction post-earthquake and during floods</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Gen Z's Global Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Digital Connectivity</h4>
                    <p className="text-sm text-slate-600">
                      More globally connected through social media, diaspora networks, and digital platforms
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Navigation Risks</h4>
                    <p className="text-sm text-slate-600">Elite capture, donor dependency, or foreign manipulation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Youth-Led Approach</h4>
                    <p className="text-sm text-slate-600">International engagement while ensuring youth remain in the driver's seat</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Help navigate diplomatic landscape while preserving Gen Z leadership</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of International Engagement</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-sky-600" />
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
                      <div className="p-2 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-sky-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">
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
                    <Globe className="h-6 w-6 text-sky-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can adapt these by using diaspora, social media, and global youth networks to strengthen Gen Z leadership on the international stage.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Tools & Technology</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-sky-100">
                        <IconComponent className="h-5 w-5 text-sky-600" />
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

      {/* Roles for Millennials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Roles for Millennials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-sky-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Solidarity is not speaking for others — it is ensuring their voices are heard everywhere. International support can amplify Gen Z voices, but only if youth remain at the center of global engagement."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-sky-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Connected voices across the globe
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Millennials can be the guides, translators, and connectors</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Ensuring Nepal's young leaders are heard on the world stage — not spoken for. International engagement must strengthen youth autonomy, not replace it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-sky-600 hover:bg-sky-700" asChild>
              <Link href="/volunteer?type=international">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/support">Back to Support Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-slate-900">#millennial4genz</h3>
              <p className="text-sm text-slate-600">Centering Gen Z leadership for a new Nepal.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-slate-900">Movement</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
                <Link href="/about/principles" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Principles
                </Link>
                <Link href="/about/values" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Values
                </Link>
                <Link href="/about/faq" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-slate-900">Get Involved</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="/get-involved/volunteer"
                  className="block text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Volunteer
                </Link>
                <Link
                  href="/get-involved/partner"
                  className="block text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Partner
                </Link>
                <Link href="/support" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Support Areas
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-slate-900">Resources</h4>
              <div className="space-y-2 text-sm">
                <Link href="/resources/toolkits" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Toolkits
                </Link>
                <Link href="/transparency" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Transparency
                </Link>
                <Link href="/safety" className="block text-slate-600 hover:text-teal-600 transition-colors">
                  Safety
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; 2024 millennial4genz. Open source movement.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-teal-600 transition-colors">
                Privacy
              </Link>
              <Link href="/accessibility" className="hover:text-teal-600 transition-colors">
                Accessibility
              </Link>
              <Button variant="ghost" size="sm">
                EN / नेपाली
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
