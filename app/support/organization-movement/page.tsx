import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Network,
  FileText,
  Settings,
  Link2,
  DollarSign,
  BookOpen,
  Globe,
  ArrowRight,
  ChevronDown,
  Building,
  Shield,
  Zap,
  Target,
  MessageSquare,
  Laptop,
  TrendingUp,
  Archive,
  Wrench,
} from "lucide-react"
import Link from "next/link"

export default function OrganizationMovementPage() {
  const howMillennialsCanHelp = [
    {
      title: "Documentation & Institutional Memory",
      description: "Record meeting minutes, resolutions, and strategies. Archive stories, images, and media coverage for history and accountability.",
      icon: FileText,
      example: "Jana Andolan II lacked systematic archives — allowing elites to rewrite narratives.",
    },
    {
      title: "Project & Task Management", 
      description: "Introduce simple tools (Trello, Notion, ClickUp, Nepali open-source tools). Train Gen Z organizers in agile workflows.",
      icon: Settings,
      example: "Offer scheduling, coordination, and reminder support.",
    },
    {
      title: "Coordination & Logistics",
      description: "Manage venues, sound systems, printing, travel, and security. Build volunteer rosters, shift rotations, and contact lists.",
      icon: Link2,
      example: "In rural Nepal, local logistics (buses, water, first aid) often make or break events.",
    },
    {
      title: "Digital Infrastructure",
      description: "Provide secure platforms for communication (Signal, Matrix, encrypted email). Build websites, mailing lists, and SMS alert systems.",
      icon: Laptop,
      example: "Hong Kong protests used decentralized Telegram groups — Nepal could adapt SMS + WhatsApp hybrid for rural outreach.",
    },
    {
      title: "Fundraising & Resource Mobilization",
      description: "Set up transparent donation systems with live ledgers. Handle procurement while youth decide priorities.",
      icon: DollarSign,
      example: "Organize international crowdfunding, redirecting funds to Gen Z committees.",
    },
    {
      title: "Capacity Building",
      description: "Host workshops on leadership, negotiation, conflict resolution. Share experiences on NGO management, donor reporting, and scaling.",
      icon: BookOpen,
      example: "Ensure youth facilitators are front and center; millennials remain trainers in the background.",
    },
  ]

  const governanceModels = [
    {
      title: "Centralized Organization",
      description: "Clear decision-making, strong discipline, rapid action",
      pros: "Clear decision-making, strong discipline, rapid action",
      cons: "Elite capture, suppression of dissent, fragile if leaders fall",
      icon: Building,
    },
    {
      title: "Decentralized Network", 
      description: "Resilient, adaptive, hard to suppress, locally responsive",
      pros: "Resilient, adaptive, hard to suppress, locally responsive",
      cons: "Coordination challenges, duplication of efforts, risk of fragmentation",
      icon: Network,
    },
    {
      title: "Hybrid / Federated Models",
      description: "Local assemblies or 'cells' with autonomy, connected through shared charters and coordination councils",
      pros: "Combines benefits of both approaches",
      cons: "Complex to implement and maintain",
      icon: Users,
    },
  ]

  const globalInspirations = [
    { 
      country: "Philippines",
      year: "1986",
      achievement: "People Power - Community-led, church-backed logistics enabled a decentralized uprising",
    },
    { 
      country: "Global",
      year: "2011", 
      achievement: "Occupy Wall Street - Showed the power of assemblies but also the risks of no structure",
    },
    { 
      country: "Global",
      year: "2019+",
      achievement: "Fridays for Future - Student-led, decentralized yet coordinated through clear branding and shared goals",
    },
    { 
      country: "UK",
      year: "2018+",
      achievement: "Extinction Rebellion - Hybrid model with local autonomy and global identity",
    },
  ]

  const modernTools = [
    {
      category: "Project Management",
      tools: "Notion, Trello, Asana, or free Nepali alternatives",
      icon: Settings,
    },
    {
      category: "Communication", 
      tools: "Encrypted group chats (Signal, Matrix), mailing lists, and localized SMS",
      icon: MessageSquare,
    },
    {
      category: "Knowledge Sharing",
      tools: "Wikis or shared Google Drive libraries with guides, legal docs, and playbooks",
      icon: Archive,
    },
    {
      category: "Data Visualization",
      tools: "Dashboards for protest turnout, resource flows, grievances",
      icon: TrendingUp,
    },
    {
      category: "AI Assistants",
      tools: "Summarize meetings, translate across Nepali languages, detect misinformation",
      icon: Zap,
    },
  ]

  const millennialRoles = [
    {
      title: "Back-office organizers",
      description: "Keep logistics running, invisible to the spotlight",
      icon: Wrench,
    },
    {
      title: "Documentarians",
      description: "Archive protest stories in Nepali & English",
      icon: Archive,
    },
    {
      title: "Tech custodians",
      description: "Manage secure servers, websites, and databases",
      icon: Shield,
    },
    {
      title: "Process mentors", 
      description: "Teach project management, then hand over",
      icon: Target,
    },
    {
      title: "Mediators",
      description: "Help resolve conflicts or factional disputes neutrally",
      icon: Users,
    },
    {
      title: "Fund stewards",
      description: "Ensure resources are received and disbursed transparently",
      icon: DollarSign,
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
            <span className="text-slate-900 font-medium">Organization & Movement Building</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Network className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <p className="text-sm">Illustration of youth networks or abstract "web of connections"</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
              <Network className="w-4 h-4 mr-2" />
              Organization & Movement
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Organization & Movement Building
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Millennials can strengthen Gen Z-led movements with structure, tools, and sustainability — without taking power.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Organization Matters</h2>

          {/* Space for Nepal political timeline */}
          <div className="mb-8 h-48 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Timeline: Nepal's Movement History</p>
              <p className="text-xs text-slate-400 mt-2">
                People's Movement 1990 → Jana Andolan II 2006 → Recent Localized Protests
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
                    <h4 className="font-medium text-slate-900">People's Movement (1990)</h4>
                    <p className="text-sm text-slate-600">Achieved milestones but suffered from fragmentation and lack of coordination</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Jana Andolan II (2006)</h4>
                    <p className="text-sm text-slate-600">Successful movement but lacked systematic archives, allowing elites to rewrite narratives</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Recent Localized Protests</h4>
                    <p className="text-sm text-slate-600">Environment, governance, labor — often suffer from burnout and loss of momentum</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Principles of Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Scaffolding, not substitution</h4>
                    <p className="text-sm text-slate-600">
                      Provide frameworks and infrastructure, but not leadership
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Process &gt; Personality</h4>
                    <p className="text-sm text-slate-600">Focus on systems that outlast individuals</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Documentation over domination</h4>
                    <p className="text-sm text-slate-600">Capture history, notes, and knowledge without filtering youth voices</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Resilience through decentralization</h4>
                    <p className="text-sm text-slate-600">Help create multiple autonomous nodes that align without centralizing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">How Millennials Can Help</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {howMillennialsCanHelp.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-orange-600" />
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

      {/* Governance Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Governance Models for Movements</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {governanceModels.map((model, index) => {
              const IconComponent = model.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{model.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-green-700 text-sm">Pros:</span>
                        <p className="text-sm text-slate-600">{model.pros}</p>
                      </div>
                      <div>
                        <span className="font-medium text-red-700 text-sm">Cons:</span>
                        <p className="text-sm text-slate-600">{model.cons}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Society Participation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">How Society Can Participate & Feel Included</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-medium text-slate-900 mb-2">Local Hubs</h4>
                <p className="text-sm text-slate-600">
                  Create village/town youth assemblies that feed into a national movement
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-medium text-slate-900 mb-2">Inclusivity Mechanisms</h4>
                <p className="text-sm text-slate-600">
                  Ensure participation of women, Dalits, Janajatis, Madhesis, LGBTQ+, disabled youth
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-medium text-slate-900 mb-2">Feedback Loops</h4>
                <p className="text-sm text-slate-600">
                  SMS polls, community consultations, online petitions
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-medium text-slate-900 mb-2">Community Anchors</h4>
                <p className="text-sm text-slate-600">
                  Use cooperatives, schools, and local clubs as organizing centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Tools & Technology</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-orange-100">
                        <IconComponent className="h-5 w-5 text-orange-600" />
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

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Global Inspirations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-orange-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                    <Badge variant="outline" className="text-xs">{inspiration.year}</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
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
                      <div className="p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-orange-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Movements collapse not because of lack of passion but because of lack of structure, coordination, and sustainability. Gen Z has the energy and moral clarity; Millennials can provide the organizational spine that keeps the movement alive."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-orange-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Movement sustainability cycle
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The goal is not to lead, but to make leadership possible</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Gen Z has the passion and moral clarity — Millennials can provide the structure, tools, and sustainability that keeps movements resilient and inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/volunteer?type=organization">
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
