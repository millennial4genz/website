import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Scale,
  Camera,
  Globe,
  Newspaper,
  Users,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Smartphone,
  Map,
  CheckCircle,
  Eye,
  Megaphone,
  AlertTriangle,
  Phone,
  Heart,
  FileText,
  Lock,
  Zap,
  Building,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function RightsFreedomPage() {
  const howMillennialsCanHelp = [
    {
      title: "Legal Defense & Advocacy",
      description: "Create rapid-response legal networks for arrested or harassed youth activists. Train volunteers on 'know your rights' materials.",
      icon: Scale,
      example: "During Madhes protests, legal aid organizations protected many from unfair prosecutions — millennials can extend such practices for Gen Z.",
    },
    {
      title: "Documentation & Truth-Telling", 
      description: "Record protests, abuses, and government actions with time-stamped evidence. Train Gen Z in secure data storage and metadata preservation.",
      icon: Camera,
      example: "Hong Kong protests relied on citizen journalists and live streams; Nepal could adopt similar practices.",
    },
    {
      title: "Protecting Digital Rights",
      description: "Teach secure communication practices (encryption, VPNs, password hygiene). Help set up decentralized communication systems.",
      icon: Globe,
      example: "Nepal's temporary social media ban shows the urgency of digital rights defense.",
    },
    {
      title: "Free Press & Expression",
      description: "Support youth-led independent media platforms (blogs, podcasts, TikToks). Provide training in ethical reporting and fact-checking.",
      icon: Newspaper,
      example: "Redirect international journalists to amplify Gen Z voices, not older elites.",
    },
    {
      title: "Building Alliances",
      description: "Connect Gen Z with NGOs, human rights watchdogs, and UN mechanisms. Build solidarity campaigns with diaspora groups.",
      icon: Users,
      example: "Global attention during the 2006 Jana Andolan helped curb state violence.",
    },
  ]

  const corePrinciples = [
    {
      title: "Shield, don't overshadow",
      description: "Millennials act as a buffer against state repression, while youth voices remain front and center",
      icon: Shield,
    },
    {
      title: "Transparency in defense", 
      description: "Legal, financial, and advocacy support must be open and accountable",
      icon: Eye,
    },
    {
      title: "Local + global link",
      description: "Rights protection is stronger when anchored in local communities and amplified globally",
      icon: Globe,
    },
  ]

  const globalInspirations = [
    { 
      country: "South Korea",
      year: "1980s",
      achievement: "Student movements protected by networks of lawyers and churches",
    },
    { 
      country: "Tunisia",
      year: "Arab Spring",
      achievement: "Citizen journalists documented abuses when traditional media failed",
    },
    { 
      country: "Estonia",
      year: "Ongoing",
      achievement: "Robust digital rights frameworks protect citizens from censorship",
    },
    { 
      country: "Chile",
      year: "2019",
      achievement: "Legal aid collectives defended thousands of protesting youth",
    },
  ]

  const modernTools = [
    {
      category: "Encrypted Messaging Apps",
      tools: "Signal, Element, Briar",
      icon: Lock,
    },
    {
      category: "Evidence Tools", 
      tools: "Apps like ProofMode (cryptographically signs photos)",
      icon: Camera,
    },
    {
      category: "Crowdsourced Reporting",
      tools: "Ushahidi for documenting violations across Nepal",
      icon: Map,
    },
    {
      category: "Fact-Checking Networks",
      tools: "Volunteer collectives verifying and countering disinformation",
      icon: CheckCircle,
    },
    {
      category: "Blockchain Archives",
      tools: "Immutable records of testimonies and abuses",
      icon: Zap,
    },
  ]

  const millennialRoles = [
    {
      title: "Legal Allies",
      description: "Lawyers, law students, and advocates offering pro-bono support",
      icon: Scale,
    },
    {
      title: "Digital Guardians",
      description: "IT professionals setting up secure infrastructure",
      icon: Shield,
    },
    {
      title: "Citizen Journalists",
      description: "Millennials with experience in media amplifying Gen Z's voice",
      icon: Camera,
    },
    {
      title: "Global Connectors", 
      description: "Link youth activists with Amnesty, HRW, or UN rapporteurs",
      icon: Globe,
    },
    {
      title: "Trainers",
      description: "Teach digital safety, rights literacy, and nonviolent resistance",
      icon: BookOpen,
    },
  ]

  const societyParticipation = [
    {
      title: "Community Watch Groups",
      description: "Local teams monitoring arrests, abuses, and rights violations",
    },
    {
      title: "Rights Literacy Campaigns",
      description: "Workshops in schools and villages explaining freedoms under the Constitution",
    },
    {
      title: "Cultural Expression",
      description: "Theater, songs, and murals as nonviolent resistance and awareness tools",
    },
    {
      title: "Public Solidarity",
      description: "Citizens joining protests or signing petitions amplify youth demands",
    },
  ]

  const quickReferenceItems = [
    {
      title: "Before Protests",
      icon: FileText,
      items: [
        "Carry ID (citizenship card, driver's license, student ID)",
        "Know emergency contacts (lawyer, family, rights groups)",
        "Keep essentials: water, first-aid, cash, power bank",
        "Digital safety: disable face/fingerprint unlock, use passcodes"
      ]
    },
    {
      title: "If Stopped by Police",
      icon: AlertTriangle,
      items: [
        "Ask clearly: 'Am I being detained, or am I free to go?'",
        "Police must inform you of reasons for arrest",
        "You have the right to remain silent until a lawyer is present",
        "Do not sign blank papers or confessions without legal counsel"
      ]
    },
    {
      title: "If Arrested",
      icon: Scale,
      items: [
        "Right to a lawyer: guaranteed under Article 20 of the Constitution of Nepal (2015)",
        "Right to be produced before court within 24 hours",
        "Right to inform family: Police must allow communication with relatives",
        "No torture or degrading treatment: Article 22 prohibits torture"
      ]
    },
    {
      title: "Digital Rights",
      icon: Smartphone,
      items: [
        "Freedom of expression online is constitutionally protected, but governments may attempt censorship",
        "Avoid posting personal details or unverified info during protests",
        "Use VPNs and encrypted apps (Signal, ProtonMail) for safety",
        "Back up important data in secure cloud/offline drives"
      ]
    },
    {
      title: "Health & Safety",
      icon: Heart,
      items: [
        "If injured, you have the right to medical treatment under Article 35",
        "Hospitals cannot deny emergency care",
        "Document injuries with photos, medical records, and witness accounts"
      ]
    }
  ]

  const helplines = [
    {
      organization: "National Human Rights Commission (NHRC)",
      phone: "+977-1-4370968"
    },
    {
      organization: "Advocacy Forum Nepal (legal aid)",
      phone: "+977-1-4422207"
    },
    {
      organization: "Center for Legal Research & Resource Development (CeLRRd)",
      phone: "+977-1-4248494"
    },
    {
      organization: "Women's Helpline (WOREC Nepal)",
      phone: "1145"
    }
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
            <span className="text-slate-900 font-medium">Rights & Freedoms</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Shield className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <p className="text-sm">Symbolic imagery: raised hands, scales of justice, open book</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Shield className="w-4 h-4 mr-2" />
              Rights & Freedoms
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Rights & Freedoms
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Protecting youth-led movements through legal aid, digital security, and advocacy — Millennials as Guardians of Liberty for Gen Z Leadership.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Rights at Stake in Nepal</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Constitutional Guarantees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Nepal's Constitution (2015)</h4>
                    <p className="text-sm text-slate-600">Guarantees fundamental rights: freedom of speech, peaceful assembly, press, equality, and access to justice</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Current Threats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Suppressed</h4>
                    <p className="text-sm text-slate-600">Crackdowns on protests (student protests, Madhesi movements, recent Gen Z demonstrations)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Unequally applied</h4>
                    <p className="text-sm text-slate-600">Dalits, women, LGBTQ+, Madhesis, and indigenous groups face greater obstacles in accessing justice</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Threatened digitally</h4>
                    <p className="text-sm text-slate-600">Social media bans, surveillance, and online harassment curb freedom of expression</p>
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
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Support</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-blue-600" />
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
                      <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
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
                    <Globe className="h-6 w-6 text-blue-600" />
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
              Nepal can adapt these lessons by embedding legal aid, digital security, and media freedom into Gen Z–led organizing.
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
                      <div className="p-2 rounded-full bg-blue-100">
                        <IconComponent className="h-5 w-5 text-blue-600" />
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
                      <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600" />
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

      {/* Know Your Rights - Quick Reference */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Know Your Rights — Quick Reference (Nepal)</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quickReferenceItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-red-100">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-red-500 text-xs mt-1">•</span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Useful Helplines */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-red-600" />
                <CardTitle className="text-xl text-slate-900">Useful Helplines (Nepal)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {helplines.map((helpline, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-md border">
                    <span className="text-sm font-medium text-slate-900">{helpline.organization}</span>
                    <span className="text-sm text-red-600 font-mono">{helpline.phone}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Rights and freedoms are the shield of democracy. Without them, youth movements are silenced before they begin. The goal is not to lead the struggle, but to ensure the struggle remains possible."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-blue-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Liberty and justice symbols
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z is leading Nepal's fight for liberty</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials must stand beside them as defenders, archivists, and connectors. Without rights, there is no freedom. Without freedom, there is no future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/volunteer?type=rights-freedom">
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
