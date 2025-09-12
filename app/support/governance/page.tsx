import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Users,
  Globe,
  Laptop,
  ArrowRight,
  ChevronDown,
  Building,
  Vote,
  MessageSquare,
  Shield,
  Lightbulb,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function GovernancePage() {
  const governanceModels = [
    {
      title: "Centralized Democracy",
      description: "Current style in Nepal - easier coordination but risk of elite capture",
      example: "India's parliamentary model",
      pros: "Stability, quick crisis response",
      cons: "Elite dominance, exclusion of rural voices",
      icon: Building,
    },
    {
      title: "Decentralized Democracy",
      description: "Local councils with real power - decisions reflect community needs",
      example: "Porto Alegre's Participatory Budgeting",
      pros: "Local empowerment, stronger trust",
      cons: "Risk of fragmentation, local elite capture",
      icon: Users,
    },
    {
      title: "Deliberative Democracy",
      description: "Citizens participate in randomly selected assemblies for key issues",
      example: "Ireland's Citizens' Assembly",
      pros: "Inclusive deliberation, counter elite dominance",
      cons: "Slower consensus-building",
      icon: MessageSquare,
    },
    {
      title: "Digital Democracy",
      description: "Online platforms for petitions, policy suggestions, and voting",
      example: "Taiwan's vTaiwan platform",
      pros: "Real-time feedback, rural inclusion",
      cons: "Digital divide, security concerns",
      icon: Laptop,
    },
  ]

  const globalInspirations = [
    { country: "Estonia", achievement: "Digital-first state with online voting and transparent governance" },
    { country: "Iceland", achievement: "Crowdsourced constitution involving thousands of citizens" },
    { country: "Kenya", achievement: "Bold decentralization with strong county powers" },
    { country: "Switzerland", achievement: "Direct democracy with frequent binding referendums" },
  ]

  const millennialSupport = [
    {
      title: "Capacity Building",
      description: "Train Gen Z leaders on constitution-writing, law-making, and policy drafting",
      icon: BookOpen,
    },
    {
      title: "Documentation",
      description: "Create open-source guides on governance alternatives in Nepali and English",
      icon: Shield,
    },
    {
      title: "Simulations",
      description: "Host mock parliaments, citizen assemblies, or participatory budgeting sessions",
      icon: Vote,
    },
    {
      title: "Technology Setup",
      description: "Build secure online portals for debates, votes, and transparency dashboards",
      icon: Laptop,
    },
    {
      title: "Bridge with Experts",
      description: "Connect Gen Z leaders with lawyers, policy thinkers, and global democratic innovators",
      icon: Users,
    },
    {
      title: "Protect from Co-option",
      description: "Watch for elites or external actors trying to hijack the movement's democratic vision",
      icon: Shield,
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
            <span className="text-slate-900 font-medium">Governance & Political Process</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Scale className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for Nepal political history timeline illustration</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              <Scale className="w-4 h-4 mr-2" />
              Governance
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Governance & Political Process
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Supporting Gen Z in Building New Models of Democracy
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Governance Matters Now</h2>

          {/* Space for Nepal political timeline */}
          <div className="mb-8 h-48 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Interactive timeline: Nepal's political history</p>
              <p className="text-xs text-slate-400 mt-2">
                Rana Oligarchy → Panchayat → Democracy Movements → Federal Republic
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
                    <h4 className="font-medium text-slate-900">Rana Oligarchy (1846–1951)</h4>
                    <p className="text-sm text-slate-600">Centralized rule, exclusion of citizens from governance</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Panchayat System (1960–1990)</h4>
                    <p className="text-sm text-slate-600">No-party autocracy under the King; dissent crushed</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Democratic Movements (1990, 2006)</h4>
                    <p className="text-sm text-slate-600">Fought for multi-party democracy and people's sovereignty</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Federal Republic (post-2008)</h4>
                    <p className="text-sm text-slate-600">
                      Promised inclusion, but plagued by corruption and elite capture
                    </p>
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
                    <h4 className="font-medium text-slate-900">Translate, don't dictate</h4>
                    <p className="text-sm text-slate-600">
                      Help Gen Z understand constitutions, laws, and parliamentary procedures
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Guardrails, not reins</h4>
                    <p className="text-sm text-slate-600">Provide knowledge of pitfalls without controlling outcomes</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Connect, not control</h4>
                    <p className="text-sm text-slate-600">Bridge Gen Z with experts and institutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Governance Models</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {governanceModels.map((model, index) => {
              const IconComponent = model.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{model.description}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Example: {model.example}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Pros:</span>
                      <p className="text-sm text-slate-600 leading-relaxed">{model.pros}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Cons:</span>
                      <p className="text-sm text-slate-600 leading-relaxed">{model.cons}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Participation & Inclusion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">How Society Can Participate</h2>

          {/* Space for participation diagram */}
          <div className="mb-8 h-48 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Diagram: Citizen participation pathways</p>
              <p className="text-xs text-slate-400 mt-2">
                Local Assemblies → Open Budgeting → Youth Quotas → Multilingual Access
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium text-slate-900 mb-2">Local Assemblies</h4>
                <p className="text-sm text-slate-600">
                  Village/town halls where communities deliberate and forward recommendations
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium text-slate-900 mb-2">Open Budgeting</h4>
                <p className="text-sm text-slate-600">
                  Citizens view and influence fund allocation for schools, healthcare, infrastructure
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium text-slate-900 mb-2">Youth Quotas</h4>
                <p className="text-sm text-slate-600">
                  Guarantee seats for under-30 representatives in local and national bodies
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium text-slate-900 mb-2">Multilingual Access</h4>
                <p className="text-sm text-slate-600">
                  Policies in Nepali + regional languages (Maithili, Bhojpuri, Tamang, etc.)
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium text-slate-900 mb-2">Transparency Portals</h4>
                <p className="text-sm text-slate-600">
                  Real-time dashboards showing decisions, laws under debate, and progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Modern Ideas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Ideas & Technology</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-teal-600" />
                  Modern Thought Processes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900">Intersectionality</h4>
                  <p className="text-sm text-slate-600">
                    Policies must address how caste, gender, and region intersect with inequality
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Feminist Governance</h4>
                  <p className="text-sm text-slate-600">Prioritize care, equity, and shared leadership</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Climate Justice Lens</h4>
                  <p className="text-sm text-slate-600">
                    Governance must anticipate climate risks and embed resilience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-teal-600" />
                  Technology Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900">E-Governance Platforms</h4>
                  <p className="text-sm text-slate-600">
                    Digital grievance filing, case tracking, and project monitoring
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Blockchain Transparency</h4>
                  <p className="text-sm text-slate-600">
                    Immutable records for budgets and tenders to prevent corruption
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">AI for Inclusivity</h4>
                  <p className="text-sm text-slate-600">Policy translation across languages and sentiment analysis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Space for technology integration diagram */}
          <div className="mt-8 h-48 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Diagram: Technology integration in governance</p>
              <p className="text-xs text-slate-400 mt-2">E-Gov → Blockchain → AI → Digital Identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Global Inspirations for Gen Z</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-teal-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Space for global examples map */}
          <div className="mt-8 h-64 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Interactive world map: Democratic innovations</p>
              <p className="text-xs text-slate-400 mt-2">Estonia • Iceland • Kenya • Switzerland</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Concrete Ways Millennials Can Help</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{support.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{support.description}</p>
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
            "Nepal's history shows that democracy without participation collapses into elite rule. Gen Z now has the
            chance to rewrite governance in a way that is inclusive, transparent, and resilient."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-teal-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Democracy participation cycle
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Millennials offer the tools, Gen Z holds the pen</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our role is clear: we provide the global context and hard-learned lessons — while Gen Z holds the chair and
            the microphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/volunteer?type=governance">
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
