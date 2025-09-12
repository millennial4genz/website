import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  BarChart3,
  Building2,
  GraduationCap,
  Sprout,
  Users,
  Scale,
  Globe,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Zap,
  Eye,
  Target,
  Link2,
  BookOpen,
  Shield,
  TrendingUp,
  PiggyBank,
  CreditCard,
  FileText,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function FinanceEconomyPage() {
  const howMillennialsCanHelp = [
    {
      title: "Transparent Fund Management",
      description: "Build real-time dashboards tracking donations and expenses. Use blockchain or open-source ledgers for tamper-proof records.",
      icon: BarChart3,
      example: "After the 2015 earthquake, opaque fund use eroded trust — youth-led funds must avoid this.",
    },
    {
      title: "Access to Capital", 
      description: "Connect Gen Z with micro-grants, cooperatives, and crowdfunding platforms. Introduce alternative models like community savings groups.",
      icon: Building2,
      example: "Work with diaspora communities to channel remittances into youth ventures.",
    },
    {
      title: "Financial Literacy",
      description: "Teach basics: budgeting, bookkeeping, taxation, savings. Provide templates and open-source tools.",
      icon: GraduationCap,
      example: "Host workshops on investment readiness for youth-led startups.",
    },
    {
      title: "Entrepreneurship & Job Creation",
      description: "Support Gen Z startups with mentorship and incubation spaces. Promote social enterprises that address local challenges.",
      icon: Sprout,
      example: "Youth-led agri-cooperatives in Province 2 have boosted local food security.",
    },
    {
      title: "Cooperative & Solidarity Economy",
      description: "Strengthen youth-run cooperatives (farming, crafts, digital services). Support women's savings groups with capacity building.",
      icon: Users,
      example: "Advocate for policies that favor inclusive local economies over big donor dependency.",
    },
    {
      title: "Advocacy & Policy",
      description: "Assist Gen Z in drafting financial policy proposals. Link youth leaders with parliamentarians, ministries, and chambers of commerce.",
      icon: Scale,
      example: "Ensure marginalized youth are represented in economic policy debates.",
    },
  ]

  const corePrinciples = [
    {
      title: "Transparency first",
      description: "Open ledgers and dashboards so everyone sees where money flows",
      icon: Eye,
    },
    {
      title: "Youth-led allocation", 
      description: "Gen Z decides priorities; Millennials help with execution",
      icon: Target,
    },
    {
      title: "Decentralized empowerment",
      description: "Local cooperatives and funds, not just top-down aid",
      icon: Users,
    },
    {
      title: "Ethical finance",
      description: "Reject exploitative loans or donor strings that undermine independence",
      icon: Shield,
    },
  ]

  const globalInspirations = [
    { 
      country: "Kenya",
      achievement: "Harambee tradition of community fundraising evolved into strong youth-led cooperatives",
    },
    { 
      country: "Bangladesh",
      achievement: "Grameen Bank pioneered microfinance empowering women and youth",
    },
    { 
      country: "Brazil",
      achievement: "Participatory budgeting in Porto Alegre gave citizens real control over spending priorities",
    },
    { 
      country: "Estonia",
      achievement: "Government-backed digital platforms for transparent tax and spending",
    },
  ]

  const modernTools = [
    {
      category: "Crowdfunding Platforms",
      tools: "Kickstarter, GoFundMe, or Nepali alternatives like MeroShare-linked funds",
      icon: TrendingUp,
    },
    {
      category: "Mobile Money & Wallets", 
      tools: "eSewa, Khalti, IME Pay for youth-friendly transactions",
      icon: Smartphone,
    },
    {
      category: "Blockchain Transparency",
      tools: "Smart contracts for donations/disbursements",
      icon: Zap,
    },
    {
      category: "Budget Dashboards",
      tools: "Open-source data visualization for fund flows",
      icon: BarChart3,
    },
    {
      category: "AI Financial Assistants",
      tools: "Automate translation of reports and detect anomalies in spending",
      icon: MessageSquare,
    },
  ]

  const millennialRoles = [
    {
      title: "Fund Stewards",
      description: "Set up transparent systems, but hand over control to Gen Z",
      icon: Shield,
    },
    {
      title: "Trainers",
      description: "Teach financial literacy, cooperative management, entrepreneurship skills",
      icon: BookOpen,
    },
    {
      title: "Bridge Builders",
      description: "Connect youth projects with diaspora, donors, and investors",
      icon: Link2,
    },
    {
      title: "Watchdogs", 
      description: "Audit funds and raise red flags against corruption",
      icon: Eye,
    },
    {
      title: "Policy Advocates",
      description: "Mentor youth in financial policy and lobbying",
      icon: Scale,
    },
  ]

  const societyParticipation = [
    {
      title: "Community Investment Pools",
      description: "Citizens contribute small amounts to fund youth projects",
    },
    {
      title: "Participatory Budgeting",
      description: "Communities decide how local government funds are spent",
    },
    {
      title: "Consumer Solidarity",
      description: "Buy from youth-led businesses and cooperatives",
    },
    {
      title: "Financial Watchdogs",
      description: "Citizens review and flag misuse of funds",
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
            <span className="text-slate-900 font-medium">Finance & Economy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <p className="text-sm">Illustration of money flows, dashboards, or cooperatives</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
              <DollarSign className="w-4 h-4 mr-2" />
              Finance & Economy
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Finance & Economy
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Building transparent, youth-led financial systems for sustainability and independence — Millennials as Guardians of Transparency, Access, and Sustainability for Gen Z.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Finance Matters in Nepal</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Current Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Limited Access to Capital</h4>
                    <p className="text-sm text-slate-600">High unemployment leads to migration instead of local enterprise</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Banking Barriers</h4>
                    <p className="text-sm text-slate-600">Rural and marginalized youth excluded from loans</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Corruption & Opacity</h4>
                    <p className="text-sm text-slate-600">Fund flows undermine trust in institutions</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Aid-Driven Dependency</h4>
                    <p className="text-sm text-slate-600">Economy has often sidelined youth voices in deciding how money is spent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Gen Z's Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Beyond Protest Funding</h4>
                    <p className="text-sm text-slate-600">
                      Economic empowerment means building sustainable, transparent systems
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Entrepreneurship Support</h4>
                    <p className="text-sm text-slate-600">Systems that can support local enterprise and social programs</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Community Resilience</h4>
                    <p className="text-sm text-slate-600">Financial structures that strengthen local communities</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Set up guardrails, open funding channels, teach financial literacy while Gen Z controls resources</p>
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
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Financial Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-yellow-600" />
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
                      <div className="p-2 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-yellow-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm">
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
                    <Globe className="h-6 w-6 text-yellow-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can adapt these models by blending traditional savings practices (dhukuti, cooperatives) with modern financial tech (blockchain, dashboards, digital payments).
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
                      <div className="p-2 rounded-full bg-yellow-100">
                        <IconComponent className="h-5 w-5 text-yellow-600" />
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
                      <div className="p-2 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-yellow-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Finance is not just about money — it's about trust, fairness, and independence. Finance is the bloodstream of a movement — it must flow transparently and fairly."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-yellow-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Transparent financial flows
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z must lead the way in building a youth-first economic ecosystem</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials can help by setting up the scaffolding of transparency, literacy, and access, so resources empower the movement instead of becoming its weakness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-yellow-600 hover:bg-yellow-700" asChild>
              <Link href="/volunteer?type=finance">
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
