import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Shield, 
  Scale, 
  Globe2, 
  Building2, 
  FileText, 
  DollarSign, 
  Vote, 
  BookOpen, 
  Gavel, 
  Network,
  UserCheck,
  GraduationCap,
  CheckCircle,
  Eye,
  Lock,
  BarChart3,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance: Leadership, Transparency, and Inclusivity | Millennials4GenZ",
  description: "Building transparent, fair, and rights-driven governance frameworks for Gen Z leadership in Nepal. Learn how Millennials can support inclusive governance reform.",
  keywords: [
    "governance Nepal",
    "Gen Z leadership",
    "inclusive governance",
    "transparent leadership",
    "youth politics",
    "democratic reform",
    "policy advocacy",
    "Nepal constitution"
  ],
  openGraph: {
    title: "Governance: Leadership, Transparency, and Inclusivity",
    description: "Building transparent, fair, and rights-driven governance frameworks for Gen Z leadership.",
  },
}

const corePrinciples = [
  {
    title: "Inclusivity and Equal Representation",
    icon: Users,
    description: "Inclusive governance ensures that all segments of society, including women, marginalized communities, Dalits, Janajatis, LGBTQ+ individuals, and people with disabilities, have an active role in decision-making.",
    example: "Nepal's proportional representation system ensures that marginalized groups hold political office."
  },
  {
    title: "Transparency and Accountability",
    icon: Eye,
    description: "Transparency involves making public information accessible — from budgets to policy decisions, ensuring everyone can track where resources are going.",
    example: "The Right to Information (RTI) Act in Nepal gives citizens access to government-held data, ensuring transparency."
  },
  {
    title: "Human Rights and Freedoms",
    icon: Shield,
    description: "Governance systems must guarantee and protect basic human rights: the right to free speech, assembly, and privacy.",
    example: "International pressure and local movements helped secure freedom of press and freedom of expression rights under Nepal's 2015 constitution."
  },
  {
    title: "Decentralization and Local Empowerment",
    icon: Building2,
    description: "Gen Z should ensure that governance is not solely top-down, but rather distributed across regions, allowing local communities to have power over their own destinies.",
    example: "Nepal's federal structure creates local governance bodies that handle education, healthcare, and infrastructure at the grassroots level."
  }
]

const millennialSupport = [
  {
    title: "Leadership Development",
    icon: GraduationCap,
    description: "Millennials can mentor youth in governance, teaching them how to navigate political systems, leadership skills, and negotiation tactics.",
    example: "Millennials with experience in UN development programs can train youth in leading humanitarian relief projects in Nepal."
  },
  {
    title: "Building Inclusive Institutions",
    icon: Building2,
    description: "Millennials can help design policies and structures that foster inclusivity at every level of governance.",
    example: "Gen Z can create youth-led municipal councils that empower local leaders to address issues like healthcare, education, and job creation in their communities."
  },
  {
    title: "Policy Advocacy & Legal Frameworks",
    icon: FileText,
    description: "Millennials can support Gen Z by drafting policy papers, engaging with legal experts, and connecting youth with global policy networks.",
    example: "Support drafting policies around digital democracy or youth unemployment that will benefit future generations."
  },
  {
    title: "Transparent Financial Systems",
    icon: DollarSign,
    description: "Millennials can mentor youth in transparent budgeting for local governments, NGOs, and youth-led initiatives.",
    example: "Countries like Brazil use participatory budgeting, where citizens vote on local projects, and this can be adopted in Nepal."
  },
  {
    title: "International Relations & Diplomacy",
    icon: Globe2,
    description: "Millennials can help Gen Z leaders navigate the world of international diplomacy, teaching them how to leverage international pressure and foreign partnerships for local development.",
    example: "Teach Gen Z leaders how to use social media advocacy and youth diplomacy to amplify issues like climate change or human rights violations to global audiences."
  }
]

const globalInspirations = [
  {
    country: "Iceland",
    title: "Constitutional Reform",
    description: "In 2010, Iceland crowdsourced the drafting of its new constitution using social media. This example shows the power of digital democracy in shaping a country's governance.",
    icon: Vote
  },
  {
    country: "Switzerland",
    title: "Direct Democracy Model",
    description: "Citizens in Switzerland can propose laws through referendums — a model of participatory governance.",
    icon: Scale
  },
  {
    country: "Finland",
    title: "Youth Engagement",
    description: "Finland engages youth in local councils, allowing them to have a say in national policies, especially those related to education, social welfare, and climate change.",
    icon: Users
  },
  {
    country: "Taiwan",
    title: "vTaiwan Platform",
    description: "vTaiwan is a digital platform that uses the internet to crowdsource policy discussions from ordinary citizens.",
    icon: MessageSquare
  }
]

const modernTools = [
  {
    title: "Blockchain for Voting & Transparency",
    icon: Lock,
    description: "Leverage blockchain technology to make elections and public decision-making more transparent and secure."
  },
  {
    title: "Civic Tech Platforms",
    icon: Network,
    description: "Use tools like OpenGov or Decidim for participatory decision-making and real-time civic engagement."
  },
  {
    title: "Digital Polling & Petitions",
    icon: MessageSquare,
    description: "Use platforms like Avaaz or Change.org for mobilizing youth participation in policy reform."
  },
  {
    title: "Data Dashboards",
    icon: BarChart3,
    description: "Create real-time dashboards to track government spending, policy impacts, and electoral promises."
  }
]

const millennialRoles = [
  { title: "Mentors & Coaches", description: "Share knowledge on leading transparent processes, policy reform, and negotiating in political landscapes.", icon: GraduationCap },
  { title: "Advisors", description: "Serve as advisors to youth leaders, helping them navigate local, national, and international political systems.", icon: UserCheck },
  { title: "Network Builders", description: "Use professional networks to connect Gen Z with international partners, funders, and policy advocates.", icon: Network },
  { title: "Civic Educators", description: "Lead workshops and training programs on governance and civic rights for youth.", icon: BookOpen },
  { title: "Legal & Policy Experts", description: "Help draft youth-friendly policies, ensuring youth representation in government processes.", icon: Gavel }
]

const participationSteps = [
  "Active Citizen Engagement: Participate in local governance decisions and youth councils.",
  "Holding Leaders Accountable: Citizens should question decisions and demand transparency in political offices and public institutions.",
  "Community Initiatives: Start local initiatives like organizing town halls, policy dialogues, or open forums.",
  "Civic Education Programs: Promote civic education in schools and communities to teach people about their rights and responsibilities."
]

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-slate-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              🏛️ Governance
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Leadership, Transparency,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                and Inclusivity
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Building transparent, fair, and rights-driven governance frameworks for Gen Z leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Governance for a New Era</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                In Nepal, governance has been a battleground for representation, transparency, and human rights. Over the years, historical power imbalances and political systems that have excluded marginalized groups have shaped governance models that are not always inclusive or transparent.
              </p>
              <p>
                For Gen Z, governance is not just about leading — it's about creating systems of decision-making that are inclusive, fair, and empowering for everyone. Millennials, with their experience in managing organizations and navigating complex political landscapes, can guide Gen Z in setting up systems that promote rights, freedom, and equality.
              </p>
              <p>
                This page explores how Gen Z can revolutionize governance by adopting inclusive leadership practices, ensuring transparent decision-making, and creating policies that protect rights while ensuring accountability at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Good Governance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building the foundation for inclusive, transparent, and rights-driven governance systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{principle.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-700 font-medium">Example:</p>
                      <p className="text-sm text-blue-600 mt-1">{principle.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Shaping Governance</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials, having worked in political systems, businesses, and NGOs, can provide vital support to Gen Z by helping shape governance structures that are just, transparent, and people-centered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{support.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{support.description}</p>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-xs text-indigo-700 font-medium">Example:</p>
                      <p className="text-xs text-indigo-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate in Governance Reform</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Governance Reform</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Nepal can look to these models to develop its own youth-centric governance frameworks, where decisions are made transparently, inclusively, and with accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 w-fit mx-auto mb-2">
                      {inspiration.country}
                    </Badge>
                    <CardTitle className="text-lg">{inspiration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{inspiration.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modern Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools for Governance & Policy Reform</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles for Millennials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Governance</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{role.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Building2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "True governance empowers the people. Youth-led governance is the future."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Governance is the backbone of social change — without inclusive leadership, transparent processes, and robust policy frameworks, movements falter. Gen Z is ready to lead, but they need Millennials as guides, mentors, and advisors to build governance structures that are just, transparent, and inclusive. Together, we can lay the foundation for a new Nepal — where leadership is equitable, rights are protected, and freedom is guaranteed for all.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-blue-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=governance">Volunteer for Governance</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
