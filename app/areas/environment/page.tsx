import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Leaf, 
  Zap, 
  Globe2, 
  Shield, 
  TrendingUp, 
  Monitor, 
  Database, 
  Smartphone,
  UserCheck,
  Network,
  GraduationCap,
  Building,
  Heart,
  Lightbulb,
  Target,
  Sun,
  Droplets,
  Wind,
  Recycle,
  BarChart3,
  TreePine,
  Sprout,
  Thermometer,
  Camera,
  Calculator
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Environment & Climate: Youth Leadership for a Sustainable Future | Millennials4GenZ",
  description: "Empowering Gen Z to lead the charge for climate action and sustainable solutions in Nepal and globally.",
  keywords: [
    "climate action Nepal",
    "Gen Z environment", 
    "climate justice",
    "sustainable living",
    "green technology",
    "climate change Nepal",
    "youth climate activism",
    "environmental protection"
  ],
  openGraph: {
    title: "Environment & Climate: Youth Leadership for a Sustainable Future",
    description: "Empowering Gen Z to lead the charge for climate action and sustainable solutions.",
  },
}

const corePrinciples = [
  {
    title: "Urgency of Climate Action",
    icon: Thermometer,
    description: "Climate change is the defining challenge of our generation, and Gen Z understands that we cannot afford to wait.",
    points: [
      "The window for meaningful climate action is rapidly closing. Gen Z is demanding policy changes, technological solutions, and global cooperation to address the climate crisis now."
    ],
    example: "Nepal's youth-led climate strikes have captured global attention, and Gen Z in Nepal is pushing for stronger environmental protections and climate change policies."
  },
  {
    title: "Justice and Inclusivity",
    icon: Shield,
    description: "Climate action cannot be effective unless it is inclusive. Marginalized communities, especially those in rural areas, women, Dalits, Janajatis, and LGBTQ+ individuals, must be central to climate solutions.",
    points: [
      "Gen Z can ensure that climate justice is rooted in social justice, ensuring that vulnerable communities who contribute least to climate change are not left behind in the transition to a green economy."
    ],
    example: "The Paris Agreement calls for climate justice, ensuring that rich countries bear more of the responsibility for addressing climate change."
  },
  {
    title: "Sustainability as a Way of Life",
    icon: Recycle,
    description: "Sustainable living is about creating a balance between economic growth and environmental protection. It involves adopting practices that do not deplete resources or damage ecosystems for future generations.",
    points: [
      "Gen Z is already leading the charge for sustainable consumerism, from plant-based diets to zero-waste movements and recycling."
    ],
    example: "Sustainable fashion is booming in Nepal, where young entrepreneurs are promoting eco-friendly fashion and recycled materials as alternatives to fast fashion."
  },
  {
    title: "Innovative Solutions for Climate Action",
    icon: Lightbulb,
    description: "Technological innovation will be critical in tackling climate change. Gen Z can drive the adoption of clean energy, electric vehicles, and smart agricultural techniques to reduce carbon footprints and promote sustainability.",
    points: [
      "Blockchain and AI can be used to monitor carbon emissions, track deforestation, and improve resource allocation in climate efforts."
    ],
    example: "The Solar Sister project in Africa uses solar-powered technologies to reduce reliance on harmful fuels like kerosene."
  }
]

const millennialSupport = [
  {
    title: "Mentoring Youth-Led Climate Initiatives",
    icon: GraduationCap,
    description: "Millennials can mentor Gen Z on how to create and scale climate action projects, from sustainability startups to global advocacy movements.",
    details: [],
    example: "Millennials can help Gen Z entrepreneurs create sustainable products like bio-degradable packaging or clean water technology that have a positive environmental impact."
  },
  {
    title: "Policy Advocacy and Legal Support",
    icon: UserCheck,
    description: "Millennials can help Gen Z activists in drafting climate policies, advocating for climate justice at national and international forums, and lobbying for green policies within the government.",
    details: [],
    example: "Supporting Gen Z activists in Nepal to present their climate policy proposals to the Nepal Climate Change Policy and international bodies like the UN Climate Change Conference (COP)."
  },
  {
    title: "Creating Access to Green Technologies",
    icon: Zap,
    description: "Millennials can help Gen Z connect with green technology companies, impact investors, and scientists to develop and scale clean energy solutions and sustainable technologies.",
    details: [],
    example: "Building youth-led solar power projects or biogas solutions for rural communities in Nepal using affordable, locally sourced materials."
  },
  {
    title: "Climate Data and Monitoring",
    icon: BarChart3,
    description: "Millennials with expertise in data science and climate research can support Gen Z by helping them collect and analyze climate data, including carbon footprints, air quality, and deforestation rates.",
    details: [],
    example: "Using big data analytics to monitor climate change impacts and provide actionable insights on water usage, agriculture, and energy consumption."
  },
  {
    title: "Raising Awareness and Advocacy",
    icon: Network,
    description: "Millennials can leverage their global networks to support Gen Z-led climate campaigns on platforms like Twitter, Instagram, and TikTok, helping them gain global visibility.",
    details: [],
    example: "Creating online petitions, advocacy videos, and awareness campaigns that highlight Nepal's climate change challenges and advocate for international support."
  }
]

const globalInspirations = [
  {
    country: "Sweden",
    title: "Greta Thunberg & Fridays for Future",
    description: "The Fridays for Future movement sparked a global youth-led campaign advocating for urgent climate action and policy reforms.",
    icon: Users
  },
  {
    country: "Kenya",
    title: "M-PESA and Clean Energy Solutions",
    description: "Kenya has pioneered mobile payments for clean energy solutions like solar-powered lamps, which have provided affordable, sustainable energy to millions of rural households.",
    icon: Sun
  },
  {
    country: "Costa Rica",
    title: "Sustainability & Carbon Neutrality",
    description: "Costa Rica has successfully implemented policies that promote biodiversity protection and carbon neutrality, becoming a global model for sustainable living.",
    icon: TreePine
  },
  {
    country: "India",
    title: "Solar Energy & Clean Technologies",
    description: "India has launched ambitious solar energy projects to reduce dependency on fossil fuels and has embraced clean technologies in agriculture, waste management, and transportation.",
    icon: Zap
  },
  {
    country: "Maldives",
    title: "Climate Change Advocacy",
    description: "The Maldives has been a global voice in advocating for climate action, highlighting how climate change disproportionately affects low-lying island nations.",
    icon: Droplets
  }
]

const modernTools = [
  {
    title: "Climate Data Dashboards",
    icon: Monitor,
    description: "Use platforms like Ushahidi, Google Earth Engine, or Climate Data Initiative to collect, visualize, and share climate data."
  },
  {
    title: "Smart Agriculture Tools",
    icon: Sprout,
    description: "Apps like Farmobile and CropX that use IoT to monitor crop health and optimize water and nutrient use."
  },
  {
    title: "Clean Energy Solutions",
    icon: Sun,
    description: "Solar-powered solutions (e.g., M-KOPA Solar) that provide off-grid renewable energy for rural communities."
  },
  {
    title: "Recycling and Waste Management Tech",
    icon: Recycle,
    description: "Smart waste bins, IoT-based recycling platforms, and composting tools for sustainable urban living."
  },
  {
    title: "Carbon Footprint Calculators",
    icon: Calculator,
    description: "Use tools like Carbon Footprint Ltd or Global Footprint Network to measure and reduce carbon emissions at the individual and community levels."
  }
]

const millennialRoles = [
  { title: "Climate Educators and Trainers", description: "Lead workshops on sustainable living, climate action, and environmental policy for youth.", icon: GraduationCap },
  { title: "Tech Mentors", description: "Help Gen Z create innovative green tech solutions, from sustainable architecture to clean energy startups.", icon: Monitor },
  { title: "Policy Advocates", description: "Work with Gen Z to draft climate policies, push for climate justice, and advocate for youth involvement in international climate negotiations.", icon: UserCheck },
  { title: "Fundraisers", description: "Support green projects, sustainable enterprises, and climate awareness campaigns through crowdfunding and impact investments.", icon: TrendingUp },
  { title: "Ecosystem Builders", description: "Establish youth-led innovation hubs, eco-villages, and climate action incubators that nurture sustainable solutions.", icon: Building }
]

const participationSteps = [
  "Adopt Sustainable Practices: Individuals can make small but impactful changes like using public transport, reducing waste, and eating plant-based foods.",
  "Support Green Businesses: Invest in or patronize businesses that promote sustainability, clean energy, and ethical practices.",
  "Engage in Climate Dialogues: Attend or organize community forums, discussions, and workshops on climate change and sustainable living.",
  "Contribute to Local Green Projects: Join or support youth-led environmental initiatives, reforestation projects, and clean-up drives."
]

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-green-50/90 to-emerald-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              🌱 Environment & Climate
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-green-900 to-emerald-900 bg-clip-text text-transparent">
                Youth Leadership for
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                a Sustainable Future
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Empowering Gen Z to Lead the Fight for Climate Justice and Sustainable Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Environment and Climate Matter</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Climate change is no longer a distant threat — it is an urgent crisis that is already impacting communities in Nepal and across the globe. Rising temperatures, extreme weather events, and the loss of biodiversity are disrupting lives, economies, and ecosystems. Gen Z is emerging as the driving force behind the global movement for climate action, demanding urgent measures to protect the planet for future generations.
              </p>
              <p>
                In Nepal, climate change affects mountain ecosystems, agriculture, and water security. The Himalayan glaciers are melting at an alarming rate, threatening water supplies for millions. Rural communities, often dependent on agriculture and natural resources, are particularly vulnerable to extreme floods, droughts, and landslides.
              </p>
              <p>
                This page explores how Gen Z can harness creativity, technology, and activism to take bold action for a sustainable future, while Millennials provide the expertise, support, and networks to help drive these efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Environmental and Climate Action</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building urgent, inclusive, and innovative approaches to climate action for Gen Z leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{principle.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                    {principle.points && (
                      <ul className="space-y-2">
                        {principle.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-green-500 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">Example:</p>
                      <p className="text-sm text-green-600 mt-1">{principle.example}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Environment and Climate</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials have already built valuable experience in environmental advocacy, sustainable business models, and climate change policy. They can provide Gen Z with the tools, mentorship, and networks needed to turn climate aspirations into actionable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{support.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{support.description}</p>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-xs text-emerald-700 font-medium">Example:</p>
                      <p className="text-xs text-emerald-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate in Environment and Climate Action</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Environment and Climate Action</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful climate movements and environmental initiatives around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200 w-fit mx-auto mb-2">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technologies for Climate and Environmental Action</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Environment and Climate</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Climate action is not a choice — it's a responsibility."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Gen Z is stepping into the role of global climate leaders, with a focus on innovative solutions, sustainable living, and climate justice. Millennials can support these efforts by providing the knowledge, resources, and global networks needed to create lasting environmental change. Together, we can ensure a sustainable future where both people and planet thrive.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-green-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=environment">Volunteer for Environment & Climate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
