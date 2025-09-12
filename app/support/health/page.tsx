import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Heart,
  Shield,
  Users,
  UtensilsCrossed,
  Droplets,
  Globe,
  ChevronDown,
  ArrowRight,
  Plus,
  Brain,
  Smartphone,
  MessageSquare,
  Watch,
  CreditCard,
  UserCheck,
  BookOpen,
  Settings,
  Eye,
  Zap,
  Home,
  HandHeart,
  Activity,
  Bell,
  Thermometer,
  HelpCircle,
  AlertTriangle,
  CheckCircle,
  Leaf,
  TreePine,
} from "lucide-react"
import Link from "next/link"

export default function HealthWellbeingPage() {
  const howMillennialsCanHelp = [
    {
      title: "First Aid & Emergency Care",
      description: "Train youth in basic first aid and CPR. Create protest health teams with volunteer doctors, nurses, and paramedics. Set up first-aid stations at rallies and marches.",
      icon: Plus,
      example: "Stockpile supplies: bandages, masks, water, saline for emergency response.",
    },
    {
      title: "Mental Health & Emotional Support",
      description: "Provide peer counseling and referral systems. Run workshops on stress management and trauma healing. Offer safe spaces for rest and recovery during mobilization.",
      icon: Brain,
      example: "Normalize conversations on anxiety, PTSD, and burnout among activists.",
    },
    {
      title: "Nutrition & Community Kitchens",
      description: "Help run kitchens providing healthy meals during protests or crises. Share knowledge on affordable, nutritious diets for youth. Partner with local farmers' cooperatives.",
      icon: UtensilsCrossed,
      example: "Community kitchens sustained Hong Kong protesters during long mobilizations.",
    },
    {
      title: "Hygiene & Sanitation",
      description: "Distribute sanitary pads, soaps, disinfectants, and clean water. Ensure women and disabled activists have access to safe facilities.",
      icon: Droplets,
      example: "Teach low-cost sanitation solutions in rural areas during organizing drives.",
    },
    {
      title: "Public Health Advocacy",
      description: "Support youth campaigns demanding better healthcare budgets and access. Draft policy briefs on mental health, reproductive rights, and disaster health preparedness.",
      icon: Globe,
      example: "Post-COVID, advocate for youth access to vaccines and health insurance.",
    },
  ]

  const corePrinciples = [
    {
      title: "Care is resistance",
      description: "Health and well-being are political acts of sustaining struggle",
      icon: Heart,
    },
    {
      title: "Prevention first", 
      description: "Prepare communities with knowledge, supplies, and safe practices",
      icon: Shield,
    },
    {
      title: "Inclusive access",
      description: "Health support must reach women, disabled, rural, and marginalized youth equally",
      icon: Users,
    },
    {
      title: "Mental + physical balance",
      description: "True well-being includes body, mind, and social solidarity",
      icon: Activity,
    },
  ]

  const globalInspirations = [
    { 
      country: "Hong Kong (2019)",
      achievement: "Volunteer medics formed protest first-aid networks during demonstrations",
    },
    { 
      country: "South Africa",
      achievement: "Anti-apartheid clinics combined activism with healthcare services",
    },
    { 
      country: "Kerala, India",
      achievement: "Community kitchens and health literacy campaigns sustained communities during floods and COVID",
    },
    { 
      country: "Puerto Rico",
      achievement: "Mutual aid centers integrated health services after Hurricane Maria",
    },
  ]

  const modernTools = [
    {
      category: "Telemedicine Apps",
      tools: "Enable youth in remote areas to connect with doctors",
      icon: Smartphone,
    },
    {
      category: "SMS Alerts", 
      tools: "Share health tips and emergency contacts during crises",
      icon: MessageSquare,
    },
    {
      category: "Mental Health Chatbots",
      tools: "Anonymous, accessible support for stress and anxiety",
      icon: Brain,
    },
    {
      category: "Wearables & Sensors",
      tools: "Monitor stress, hydration, or air quality during protests",
      icon: Watch,
    },
    {
      category: "Crowdfunding Platforms",
      tools: "Raise funds for medical emergencies transparently",
      icon: CreditCard,
    },
  ]

  const millennialRoles = [
    {
      title: "Medical Volunteers",
      description: "Provide first aid, organize clinics, train youth in emergency response",
      icon: Plus,
    },
    {
      title: "Mental Health Advocates",
      description: "Run safe spaces, workshops, and counseling programs",
      icon: Brain,
    },
    {
      title: "Organizers",
      description: "Manage logistics of kitchens, shelters, and sanitation",
      icon: Settings,
    },
    {
      title: "Policy Mentors", 
      description: "Guide Gen Z in health advocacy, linking them to policymakers",
      icon: BookOpen,
    },
    {
      title: "Fund Stewards",
      description: "Ensure donations for health are used transparently",
      icon: Eye,
    },
  ]

  const societyParticipation = [
    {
      title: "Volunteer Medical Corps",
      description: "Retired health workers and professionals supporting youth movements",
    },
    {
      title: "Community Health Funds",
      description: "Citizens contribute to cover emergency medical costs for activists",
    },
    {
      title: "Safe Shelters",
      description: "Villages open schools or community halls as rest and recovery spaces",
    },
    {
      title: "Awareness Campaigns",
      description: "Families and teachers encourage mental health conversations",
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
            <span className="text-slate-900 font-medium">Health & Well-being</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Stethoscope className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
              <p className="text-sm">Youth with first-aid kits, kitchens, or rest spaces</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <Stethoscope className="w-4 h-4 mr-2" />
              Health & Well-being
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Health & Well-being
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            Millennials as Caregivers, Protectors, and Advocates Supporting Gen Z — Embedding care, safety, and resilience into Gen Z leadership.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Health & Well-being Matter</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Current Health Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Public Health Gaps</h4>
                    <p className="text-sm text-slate-600">Rural and marginalized youth lack access to healthcare facilities</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Protest Risks</h4>
                    <p className="text-sm text-slate-600">Tear gas, police violence, and long hours outdoors expose youth to injury and stress</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Mental Health Stigma</h4>
                    <p className="text-sm text-slate-600">Depression, anxiety, and burnout are rising among youth but remain taboo</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Basic Needs</h4>
                    <p className="text-sm text-slate-600">Nutrition, sanitation, and rest are often neglected during mobilization</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Movement Health Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Care as Core Value</h4>
                    <p className="text-sm text-slate-600">
                      Health and well-being integrated into activism, not as afterthought
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Sustained Resistance</h4>
                    <p className="text-sm text-slate-600">Movements succeed only when participants are safe, healthy, and resilient</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Community Support</h4>
                    <p className="text-sm text-slate-600">Medical, psychological, and community care systems</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Provide support infrastructure while keeping youth in charge of decisions</p>
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
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Health Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-emerald-600" />
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
                      <div className="p-2 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
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
                    <Globe className="h-6 w-6 text-emerald-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can adapt these models by embedding health into community resilience and protest logistics, combining traditional healing practices with modern medical support.
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
                      <div className="p-2 rounded-full bg-emerald-100">
                        <IconComponent className="h-5 w-5 text-emerald-600" />
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
                      <div className="p-2 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "A healthy movement is a strong movement. Care is not charity — it is resistance. A healthy movement cannot be broken."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-emerald-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Hearts, hands, and healing symbols
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Gen Z brings energy and passion</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Millennials can help ensure the body, mind, and spirit of the movement are protected and nourished. Health is not just a service — it is an act of solidarity and resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/volunteer?type=health">
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
