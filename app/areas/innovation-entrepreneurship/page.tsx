import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Rocket, 
  Lightbulb, 
  DollarSign, 
  Globe2, 
  TrendingUp, 
  Building, 
  BookOpen, 
  Scale, 
  Heart, 
  Leaf,
  UserCheck,
  Network,
  GraduationCap,
  Target,
  Zap,
  HandCoins,
  BarChart3,
  Lock,
  ShoppingCart,
  Github,
  Brain,
  Share2,
  Eye
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation & Entrepreneurship: Empowering Gen Z Leadership | Millennials4GenZ",
  description: "Empowering Gen Z with the tools, networks, and funding to lead a new era of innovation and social entrepreneurship in Nepal and beyond.",
  keywords: [
    "innovation Nepal",
    "Gen Z entrepreneurs", 
    "startup ecosystem",
    "youth innovation",
    "social entrepreneurship",
    "impact investment",
    "business incubation",
    "Nepal startups"
  ],
  openGraph: {
    title: "Innovation & Entrepreneurship: Empowering Gen Z Leadership",
    description: "Empowering Gen Z with the tools, networks, and funding to lead a new era of innovation.",
  },
}

const corePrinciples = [
  {
    title: "Creativity and Vision",
    icon: Lightbulb,
    description: "Innovation thrives in diversity: New ideas often come from the margins, where communities face the greatest challenges.",
    points: [
      "Support idea development: Help nurture ideas, not just for profit, but for their social, environmental, and cultural impact.",
      "Foster risk-taking: Encourage Gen Z to experiment with unconventional ideas, unafraid of failure, as a pathway to growth."
    ]
  },
  {
    title: "Equity in Access",
    icon: Scale,
    description: "Inclusive entrepreneurship: Ensure that all youth, regardless of gender, caste, ethnicity, or geography, have equal opportunities to start and scale businesses.",
    points: [
      "Break the barriers: Provide equal access to funding, mentorship, and business development resources for marginalized groups."
    ]
  },
  {
    title: "Impact and Sustainability",
    icon: Heart,
    description: "Socially responsible innovation: Encourage the development of businesses that prioritize environmental sustainability, economic equity, and social justice.",
    points: [
      "Long-term growth: Focus on scalable, sustainable solutions that can create lasting positive impacts rather than short-term profits."
    ]
  },
  {
    title: "Transparent Funding and Support",
    icon: Eye,
    description: "Fair funding systems: Ensure that funding is accessible and transparent, and that funding bodies are held accountable.",
    points: [
      "Open-source development: Promote the use of open-source technologies and platforms that allow Gen Z entrepreneurs to build upon existing innovations without barriers."
    ]
  }
]

const millennialSupport = [
  {
    title: "Idea Incubation and Mentorship",
    icon: GraduationCap,
    description: "Provide guidance on business ideation, refining concepts, and identifying market needs.",
    details: [
      "Create mentorship programs that pair Gen Z entrepreneurs with experienced mentors from diverse industries."
    ],
    example: "Millennials with expertise in tech, social enterprises, and non-profit sectors can offer real-world guidance to youth-run startups."
  },
  {
    title: "Equitable Access to Funding",
    icon: HandCoins,
    description: "Help Gen Z secure funding through crowdfunding, impact investments, and seed funding from local and international investors.",
    details: [
      "Promote microfinance solutions like peer-to-peer lending, community-driven funds, and youth venture capital networks."
    ],
    example: "Platforms like GoFundMe and Patreon have enabled artists and creators to monetize their work directly, bypassing traditional funding systems."
  },
  {
    title: "Creating Entrepreneurial Ecosystems",
    icon: Building,
    description: "Set up entrepreneurial hubs, coworking spaces, and business incubators for Gen Z to collaborate, innovate, and prototype ideas.",
    details: [
      "Help establish entrepreneurial networks where young innovators can connect with peers, mentors, and industry leaders."
    ],
    example: "Cities like San Francisco, Bangalore, and Berlin have become global hotspots for young entrepreneurs due to strong networks and institutional support for new ventures."
  },
  {
    title: "Business Development & Strategy",
    icon: BarChart3,
    description: "Assist in developing business plans, marketing strategies, and financial models for early-stage startups.",
    details: [
      "Provide resources for capacity-building in areas like product development, sales, and customer acquisition."
    ],
    example: "Young entrepreneurs in Nepal can benefit from formal business training, helping them scale their ideas from local projects to national and international markets."
  },
  {
    title: "Promote Impact Investment",
    icon: Target,
    description: "Advocate for socially responsible investment (SRI) models that prioritize sustainable and ethical business practices.",
    details: [
      "Help Gen Z pitch their ventures to investors who are looking for impact-driven returns in areas like clean energy, healthcare innovation, and climate change solutions."
    ],
    example: "Investing in social enterprises like Kiva has proven to be a successful model for leveraging capital for social good."
  }
]

const globalInspirations = [
  {
    country: "Kenya",
    title: "M-PESA Revolution",
    description: "The development of M-PESA by young innovators in Kenya revolutionized mobile money and financial inclusion for underserved communities.",
    icon: DollarSign
  },
  {
    country: "India",
    title: "Frugal Innovation",
    description: "Indian youth entrepreneurs have mastered the art of frugal innovation — creating solutions that are affordable, accessible, and scalable, such as low-cost healthcare solutions and education platforms.",
    icon: Brain
  },
  {
    country: "Finland",
    title: "Slush Conference",
    description: "Finland's Slush Conference has become one of the world's largest gatherings for entrepreneurs, providing exposure, networking, and investment opportunities for young startups.",
    icon: Network
  },
  {
    country: "Estonia",
    title: "Digital Entrepreneurship",
    description: "Estonia's e-residency program allows anyone in the world to start and run a business in Estonia, serving as an example of a digital-first approach to entrepreneurship.",
    icon: Globe2
  }
]

const modernTools = [
  {
    title: "Crowdfunding Platforms",
    icon: HandCoins,
    description: "GoFundMe, Kickstarter, M-Pesa (for mobile payments), and local crowdfunding initiatives."
  },
  {
    title: "Blockchain & Smart Contracts",
    icon: Lock,
    description: "Use blockchain technology for transparent transactions, supply chain tracking, and secure investment management."
  },
  {
    title: "Digital Marketplaces",
    icon: ShoppingCart,
    description: "Platforms like Etsy, Shopify, and Daraz enable youth to launch their businesses globally."
  },
  {
    title: "Open-Source Tools",
    icon: Github,
    description: "GitHub, WordPress, and other platforms provide free resources for developers, designers, and creators to build and innovate without financial barriers."
  },
  {
    title: "AI & Data Analytics",
    icon: Brain,
    description: "Use AI-powered tools for customer insights, product recommendations, and financial forecasting."
  },
  {
    title: "Social Media for Outreach",
    icon: Share2,
    description: "Harness the power of platforms like Instagram, TikTok, and YouTube to market, promote, and engage with global audiences."
  }
]

const millennialRoles = [
  { title: "Mentors", description: "Provide strategic advice, business planning, and market insights.", icon: GraduationCap },
  { title: "Investors & Fundraisers", description: "Support youth-led initiatives with access to impact investment, venture capital, and microfinance.", icon: HandCoins },
  { title: "Advisors & Consultants", description: "Offer expertise in areas like product development, marketing, and financial management.", icon: UserCheck },
  { title: "Ecosystem Builders", description: "Create and sustain youth innovation hubs, accelerators, and coworking spaces.", icon: Building },
  { title: "Advocates", description: "Advocate for policy changes that make entrepreneurship and innovation more accessible and equitable.", icon: Zap }
]

const participationSteps = [
  "Support Local Startups: Patronize youth-run businesses and cooperatives that offer products or services to the local community.",
  "Mentorship & Networking: Offer professional advice and introductions to youth-led businesses seeking to connect with potential investors, collaborators, and customers.",
  "Cultural Support: Encourage the celebration of youth innovation through community events, awards, and recognition.",
  "Crowdfunding Participation: Support Gen Z entrepreneurs by contributing to crowdfunding campaigns or organizing local fundraising events."
]

export default function InnovationEntrepreneurshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-red-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200 mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              🚀 Innovation & Entrepreneurship
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-orange-900 to-red-900 bg-clip-text text-transparent">
                Empowering Gen Z to Lead
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                with Creativity & Innovation
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Empowering Gen Z with the tools, networks, and funding to lead a new era of innovation and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Innovation as a Catalyst for Change</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Nepal's young population has long been an engine of creativity, yet many young innovators face significant challenges in accessing capital, networks, and opportunities. Despite limited resources, Gen Z in Nepal is tech-savvy, entrepreneurial, and visionary. The digital economy and social entrepreneurship have opened up new frontiers for them to create solutions that directly address local and global issues.
              </p>
              <p>
                However, access to capital remains one of the most significant barriers to youth-led innovation. Millennials can step in to bridge the gap, ensuring that Gen Z can access the tools, networks, and resources necessary to transform their ideas into sustainable ventures.
              </p>
              <p>
                This page explores how we can support Gen Z entrepreneurs in building innovative, impact-driven businesses while making sure that funding and resources are equitable and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Innovation and Entrepreneurship</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building the foundation for inclusive, impactful, and sustainable innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{principle.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-orange-500 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials can bridge the gap, ensuring that Gen Z can access the tools, networks, and resources necessary to transform their ideas into sustainable ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{support.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{support.description}</p>
                    {support.details && (
                      <ul className="space-y-1">
                        {support.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-red-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-xs text-red-700 font-medium">Example:</p>
                      <p className="text-xs text-red-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Innovation & Entrepreneurship</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful innovation ecosystems around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 w-fit mx-auto mb-2">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technology for Innovation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-red-100 to-pink-100 text-red-700 flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Innovation & Entrepreneurship</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Innovation is not just about creating products, it's about creating change."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              For Gen Z, entrepreneurship is about creating value, solving problems, and driving change. Millennials can guide the next generation of innovators by providing tools, resources, and mentorship that help them turn ideas into impactful ventures. Together, we can ensure that innovation is inclusive, entrepreneurship is accessible, and growth is equitable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-orange-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=innovation-entrepreneurship">Volunteer for Innovation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
