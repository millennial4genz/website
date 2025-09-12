import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Shield,
  Users,
  Building2,
  Globe,
  ArrowRight,
  ChevronDown,
  Utensils,
  MapPin,
  Smartphone,
  DollarSign,
  Brain,
  ClipboardList,
  BookOpen,
  HandHeart,
  Link2,
  AlertTriangle,
  MessageSquare,
  Music,
  Eye,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function CommunityDevelopmentPage() {
  const howMillennialsCanHelp = [
    {
      title: "Mutual Aid & Welfare",
      description: "Support Gen Z in setting up community kitchens during protests or crises. Provide logistics for distributing food, water, and medicine.",
      icon: Utensils,
      example: "Post-2015 earthquake, youth-led kitchens in Kathmandu Valley became lifelines.",
    },
    {
      title: "Health & Safety", 
      description: "Help organize first-aid stations during demonstrations. Coordinate volunteer doctors, nurses, and health students.",
      icon: Stethoscope,
      example: "Provide access to mental health support networks for activists facing trauma.",
    },
    {
      title: "Education & Youth Empowerment",
      description: "Organize workshops on civic literacy, entrepreneurship, and skills training. Provide digital literacy camps for rural youth.",
      icon: GraduationCap,
      example: "Document and share local success stories to inspire others.",
    },
    {
      title: "Community Anchors & Safe Spaces",
      description: "Help set up safe houses, community halls, or libraries for youth organizing. Build rotating shelters for activists facing threats.",
      icon: Shield,
      example: "Ensure these spaces are inclusive (gender-sensitive, accessible for disabled).",
    },
    {
      title: "Rural–Urban Linkages",
      description: "Connect urban Gen Z activists with rural youth through joint projects. Support travel, translation, and storytelling between districts.",
      icon: Link2,
      example: "Farmers' protests in India inspired solidarity between cities and villages — Nepal can replicate similar links.",
    },
    {
      title: "Cooperatives & Local Economies",
      description: "Help establish or strengthen youth-led cooperatives (agriculture, crafts, services). Provide training in cooperative finance.",
      icon: Building2,
      example: "Ensure women's savings groups are integrated into youth organizing.",
    },
  ]

  const corePrinciples = [
    {
      title: "Community-first",
      description: "Every initiative must strengthen local networks, not bypass them",
      icon: Home,
    },
    {
      title: "Solidarity over charity", 
      description: "Support is collective, not paternalistic",
      icon: HandHeart,
    },
    {
      title: "Inclusion at the core",
      description: "Rural, marginalized, and vulnerable groups must be prioritized",
      icon: Users,
    },
    {
      title: "Resilience-building",
      description: "Efforts should prepare communities for future shocks (climate, political, economic)",
      icon: Shield,
    },
  ]

  const globalInspirations = [
    { 
      country: "Kerala, India",
      achievement: "Neighborhood 'panchayat' committees coordinated community aid during floods",
    },
    { 
      country: "Puerto Rico",
      year: "2017",
      achievement: "Mutual aid centers emerged after Hurricane Maria, sustaining people when the state failed",
    },
    { 
      country: "South Africa",
      achievement: "Civic organizations during Apartheid ran clinics, schools, and kitchens alongside protests",
    },
    { 
      country: "Rojava, Syria",
      achievement: "Community councils managed food, safety, and education in decentralized, democratic ways",
    },
  ]

  const modernTools = [
    {
      category: "SMS Alerts",
      tools: "Notify communities of events, safety issues, or aid distribution",
      icon: Smartphone,
    },
    {
      category: "Community Apps", 
      tools: "Simple apps for organizing volunteers, aid, and shelters",
      icon: ClipboardList,
    },
    {
      category: "Mapping Platforms",
      tools: "Visualize needs, resources, and safe spaces (Ushahidi, OpenStreetMap)",
      icon: MapPin,
    },
    {
      category: "Crowdfunding Tools",
      tools: "Support local aid efforts transparently",
      icon: DollarSign,
    },
    {
      category: "AI Translation",
      tools: "Break language barriers between districts and ethnic groups",
      icon: Brain,
    },
  ]

  const millennialRoles = [
    {
      title: "Organizers",
      description: "Help structure community kitchens, health posts, and shelters",
      icon: ClipboardList,
    },
    {
      title: "Fund Stewards",
      description: "Manage donations with transparent ledgers",
      icon: DollarSign,
    },
    {
      title: "Trainers",
      description: "Run workshops in first aid, digital literacy, cooperative finance",
      icon: BookOpen,
    },
    {
      title: "Bridges", 
      description: "Connect Gen Z leaders with NGOs, donors, and diaspora networks",
      icon: Link2,
    },
    {
      title: "Documentarians",
      description: "Record and share community-led initiatives to inspire others",
      icon: FileText,
    },
  ]

  const societyParticipation = [
    {
      title: "Volunteer Rotations",
      description: "Citizens volunteer in kitchens, shelters, or medical aid",
    },
    {
      title: "Community Dialogues",
      description: "Forums for rural and urban voices to meet and align",
    },
    {
      title: "Neighborhood Watch",
      description: "Communities ensure safety during protests or blockades",
    },
    {
      title: "Cultural Activities",
      description: "Local music, theatre, and festivals integrated into activism",
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
            <span className="text-slate-900 font-medium">Social & Community Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Home className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <p className="text-sm">Illustration of kitchens, clinics, and youth gatherings</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              <Home className="w-4 h-4 mr-2" />
              Social & Community Development
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Social & Community Development
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Building solidarity networks and resilient communities alongside Gen Z leadership — Millennials as Community Builders Strengthening Gen Z Movements.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Community Development is Core</h2>

          <div className="mb-8 h-48 bg-white rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-sm">Infographic: Nepal's Community Networks</p>
              <p className="text-xs text-slate-400 mt-2">
                Urban–Rural Divide • Traditional Networks • Social Systems
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">The Challenge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Urban–Rural Divide</h4>
                    <p className="text-sm text-slate-600">Rural voices have often been ignored, though they make up the majority</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Fragile Social Systems</h4>
                    <p className="text-sm text-slate-600">Migration, unemployment, and disasters (earthquakes, floods, pandemics) weaken communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Building on Strengths</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Traditional Networks</h4>
                    <p className="text-sm text-slate-600">
                      Cooperatives, women's savings groups, and youth clubs already anchor local resilience
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Gen Z Vision</h4>
                    <p className="text-sm text-slate-600">Building solidarity networks that provide food, care, mutual aid, and safe spaces</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Help organize, sustain, and link grassroots efforts while leaving decision-making to Gen Z</p>
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
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Community Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-green-600" />
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
                      <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-green-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
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
                    <Globe className="h-6 w-6 text-green-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                    {inspiration.year && <Badge variant="outline" className="text-xs">{inspiration.year}</Badge>}
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
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
                      <div className="p-2 rounded-full bg-green-100">
                        <IconComponent className="h-5 w-5 text-green-600" />
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
                      <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-green-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "A movement without community is a protest. A movement with community is a revolution. Movements are strongest when rooted in community care and solidarity."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-green-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Community solidarity symbols
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z brings energy and urgency</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials bring organizational skills and connections. Together, they can ensure Nepal's social fabric is not just defended but transformed — resilient, inclusive, and prepared for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700" asChild>
              <Link href="/volunteer?type=community">
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
