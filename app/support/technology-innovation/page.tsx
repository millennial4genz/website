import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Laptop,
  Shield,
  Globe,
  Database,
  Lightbulb,
  Video,
  Lock,
  Users,
  Wifi,
  ChevronDown,
  ArrowRight,
  Smartphone,
  MessageSquare,
  Map,
  Zap,
  Bot,
  CreditCard,
  Code,
  Eye,
  UserCheck,
  BookOpen,
  Link2,
  Settings,
  AlertTriangle,
  CheckCircle,
  Camera,
  Megaphone,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function TechnologyInnovationPage() {
  const howMillennialsCanHelp = [
    {
      title: "Secure Communication & Safety",
      description: "Set up encrypted chat platforms (Signal, Matrix, Briar). Train Gen Z on digital hygiene: passwords, 2FA, avoiding phishing. Provide VPNs and anti-surveillance tools during shutdowns.",
      icon: Shield,
      example: "During internet shutdowns, secure mesh networks can keep communications flowing.",
    },
    {
      title: "Civic-Tech Platforms", 
      description: "Build youth-led portals for petitions, crowdsourced policy input, and participatory budgeting. Municipal-level youth assemblies could use online feedback tools.",
      icon: Users,
      example: "Taiwan's vTaiwan used civic tech for citizen input on national laws.",
    },
    {
      title: "Fighting Misinformation",
      description: "Support youth fact-checking networks. Create media literacy campaigns on how to verify sources. Build dashboards that visualize disinformation flows.",
      icon: Eye,
      example: "Youth fact-checkers can counter false narratives about protests or policies in real-time.",
    },
    {
      title: "Data for Decision-Making",
      description: "Train Gen Z in data collection and visualization (surveys, GIS mapping, Ushahidi). Use open datasets to inform activism.",
      icon: Database,
      example: "Nepal Flood Early Warning System could integrate with youth-led alert systems.",
    },
    {
      title: "Entrepreneurship & Innovation Labs",
      description: "Help set up makerspaces, hackathons, and incubation hubs for youth startups. Focus on social innovation — local solutions for education, climate, and health.",
      icon: Lightbulb,
      example: "Youth-led air quality monitoring apps addressing Kathmandu's pollution crisis.",
    },
    {
      title: "Digital Storytelling & Outreach",
      description: "Train youth in podcasting, video editing, graphic design. Amplify their voices globally with bilingual websites, blogs, and TikToks.",
      icon: Video,
      example: "Hong Kong's global recognition came largely from youth-created digital content.",
    },
  ]

  const corePrinciples = [
    {
      title: "Tech as empowerment",
      description: "Tools should strengthen youth autonomy, not control them",
      icon: Zap,
    },
    {
      title: "Open-source first", 
      description: "Prevent dependency on closed, exploitative systems",
      icon: Code,
    },
    {
      title: "Accessibility built-in",
      description: "Tech must serve marginalized, low-literacy, and rural users",
      icon: UserCheck,
    },
    {
      title: "Privacy & security",
      description: "Protection against censorship and surveillance is non-negotiable",
      icon: Lock,
    },
  ]

  const globalInspirations = [
    { 
      country: "Estonia",
      achievement: "Digital-first state — voting, taxes, and records online",
    },
    { 
      country: "Taiwan",
      achievement: "vTaiwan civic platform crowdsourced legislation",
    },
    { 
      country: "Kenya",
      achievement: "M-PESA mobile payments revolutionized access to finance",
    },
    { 
      country: "Iceland",
      achievement: "Crowdsourced constitution using online platforms",
    },
    { 
      country: "India",
      achievement: "Aadhaar & UPI scaled, but also showed risks of exclusion and surveillance — lessons for Nepal",
    },
  ]

  const modernTools = [
    {
      category: "Encrypted Messaging",
      tools: "Signal, Matrix, Briar for secure communications",
      icon: MessageSquare,
    },
    {
      category: "Collaboration Platforms", 
      tools: "Notion, Nextcloud, open-source Kanban tools",
      icon: Users,
    },
    {
      category: "Mapping Tools",
      tools: "Ushahidi, OpenStreetMap for protests & resources",
      icon: Map,
    },
    {
      category: "Blockchain",
      tools: "For transparent fund tracking and community governance",
      icon: Zap,
    },
    {
      category: "AI Assistants",
      tools: "Multilingual translation, summarization, and civic education",
      icon: Bot,
    },
    {
      category: "Crowdfunding Platforms",
      tools: "Tools to fund youth projects globally",
      icon: CreditCard,
    },
  ]

  const millennialRoles = [
    {
      title: "Tech Custodians",
      description: "Manage servers, platforms, and security systems",
      icon: Settings,
    },
    {
      title: "Trainers",
      description: "Teach coding, cybersecurity, and media literacy",
      icon: BookOpen,
    },
    {
      title: "Mentors",
      description: "Guide youth in startups, civic-tech projects, and hackathons",
      icon: UserCheck,
    },
    {
      title: "Bridge Builders", 
      description: "Link Gen Z innovators to accelerators, donors, and tech diaspora",
      icon: Link2,
    },
    {
      title: "Watchdogs",
      description: "Monitor digital rights abuses and advocate for privacy laws",
      icon: Eye,
    },
  ]

  const societyParticipation = [
    {
      title: "Digital Literacy Campaigns",
      description: "Citizens trained in safe internet use and digital tools",
    },
    {
      title: "Community Innovation Labs",
      description: "Local centers for coding, digital design, and problem-solving",
    },
    {
      title: "Open Wi-Fi Networks",
      description: "Villages or cooperatives providing community internet access",
    },
    {
      title: "Participatory Tech Projects",
      description: "Communities co-designing apps, dashboards, and alert systems",
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
            <span className="text-slate-900 font-medium">Technology & Innovation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Laptop className="w-16 h-16 mx-auto mb-4 text-indigo-500" />
              <p className="text-sm">Abstract tech imagery or youth coding/designing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <Laptop className="w-4 h-4 mr-2" />
              Technology & Innovation
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Technology & Innovation
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Millennials as Tech Custodians Empowering Gen Z's Digital Future — Enabling secure, inclusive, and innovative digital tools for Gen Z leadership.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Technology Matters in Nepal</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Current Digital Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Mobile-First Society</h4>
                    <p className="text-sm text-slate-600">High mobile penetration but uneven internet access (urban vs rural)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Digital Divide</h4>
                    <p className="text-sm text-slate-600">Persists across gender, caste, and geography</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Surveillance Threats</h4>
                    <p className="text-sm text-slate-600">State surveillance and shutdowns threaten digital freedoms</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Misinformation Risk</h4>
                    <p className="text-sm text-slate-600">Low digital literacy makes many vulnerable to false information</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Gen Z's Digital Potential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Digitally Native</h4>
                    <p className="text-sm text-slate-600">
                      Active on TikTok, Instagram, and Telegram
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Innovation Ready</h4>
                    <p className="text-sm text-slate-600">Technology can amplify their leadership globally</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Safety & Inclusion</h4>
                    <p className="text-sm text-slate-600">Need access to secure tools and infrastructure</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Provide infrastructure, security, and mentorship for digital empowerment</p>
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
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Tech Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-indigo-600" />
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
                      <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-indigo-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-indigo-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can build on its mobile-first culture and cooperative traditions to create uniquely inclusive digital systems that serve all communities.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Tools & Technology for Gen Z</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-indigo-100">
                        <IconComponent className="h-5 w-5 text-indigo-600" />
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
                      <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-indigo-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Technology is the accelerator of movements — it can spread voices, build transparency, and connect Nepal to the world. Tech should amplify voices, not silence them. It belongs to the people."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-indigo-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Digital networks and connections
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z is ready to innovate and lead digitally</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials can help provide the infrastructure, safety, and mentorship to ensure technology remains a tool of liberation, not suppression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/volunteer?type=technology">
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
