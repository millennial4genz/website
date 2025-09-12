import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Rocket, 
  Bot, 
  DollarSign, 
  Heart, 
  Palette, 
  Leaf,
  Building,
  Globe,
  Lightbulb,
  Shield
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Areas of Support for Gen Z Leadership | Millennials4GenZ",
  description: "Building the foundation for Gen Z to lead a sustainable, inclusive, and tech-driven future across governance, innovation, technology, finance, health, arts, and environmental sustainability.",
  keywords: [
    "Gen Z leadership",
    "areas of support",
    "governance",
    "innovation",
    "technology",
    "finance",
    "health",
    "arts culture",
    "environmental sustainability",
    "Nepal youth movement"
  ],
  openGraph: {
    title: "Areas of Support for Gen Z Leadership",
    description: "Building the foundation for Gen Z to lead a sustainable, inclusive, and tech-driven future.",
  },
}

const areas = [
  {
    id: "governance",
    title: "Governance",
    subtitle: "Leadership, Management, and Policy-Making",
    icon: Building,
    color: "blue",
    summary: "Effective governance forms the backbone of a strong, resilient society. Gen Z is pioneering a new political landscape — one where leadership, policy-making, and governance are transparent, inclusive, and focused on guaranteeing rights and freedoms for all.",
    keyFocus: [
      "Leadership and policy frameworks that reflect diversity",
      "Inclusive decision-making and transparency", 
      "Rights and freedom protections"
    ],
    example: "Taiwan's digital democracy model, where citizens vote on policies using a tech-driven approach, exemplifies how inclusive governance can work at a national level.",
    details: [
      "Inclusive Leadership: Build leadership structures that reflect the diversity of the population — ensuring that all voices are heard, particularly from marginalized groups such as women, Dalits, Janajatis, and the LGBTQ+ community.",
      "Transparent Management: Develop policies and systems that are open to scrutiny, ensuring transparency in public spending, election processes, and government action.",
      "Policy Advocacy: Focus on policies that promote human rights, including freedom of speech, movement, assembly, and access to information."
    ]
  },
  {
    id: "innovation-entrepreneurship",
    title: "Innovation & Entrepreneurship",
    subtitle: "Building a Thriving Ecosystem",
    icon: Rocket,
    color: "orange",
    summary: "Innovation is the driving force of social change and economic growth. For Gen Z to lead effectively, innovation must be fostered in an environment that supports creativity, new ideas, and accessibility.",
    keyFocus: [
      "Socially responsible investments",
      "Encouraging innovation and new ideas",
      "Equitable access to entrepreneurial resources"
    ],
    example: "The rise of social enterprises in regions like Sub-Saharan Africa, where young entrepreneurs are using business models that combine profitability with social impact.",
    details: [
      "Fostering Innovation: Provide platforms for youth to explore, innovate, and collaborate on new ideas that can solve pressing global issues such as climate change, social inequality, and public health challenges.",
      "Equitable Access to Resources: Promote funding mechanisms like microloans, venture capital, and grants that provide early-stage funding for young entrepreneurs, particularly those from disadvantaged backgrounds.",
      "Impact Investment: Encourage investment in socially responsible ventures, ensuring that the financial system supports long-term sustainable development rather than short-term profits."
    ]
  },
  {
    id: "technology",
    title: "Frontier Technology",
    subtitle: "Driving Efficiency and Transparency",
    icon: Bot,
    color: "indigo",
    summary: "Technology is at the heart of progress, and frontier technologies such as blockchain, AI, and IoT can transform governance, business, and society. For Gen Z, adopting a digital-first mindset ensures that technology becomes a tool for empowerment.",
    keyFocus: [
      "Using technology to drive transparency and efficiency",
      "Ensuring equal access to digital resources",
      "Building a future-ready, digital-first society"
    ],
    example: "Estonia's e-residency program offers digital solutions that empower global entrepreneurs while ensuring digital security.",
    details: [
      "Blockchain for Transparency: Use blockchain technology for secure, transparent transactions, particularly in financial systems, governance, and resource distribution.",
      "AI for Efficiency: Leverage AI in decision-making processes, crisis management, and optimizing public services like healthcare and education.",
      "Tech Access for All: Ensure that technology is accessible for rural, marginalized, and low-income communities to avoid creating a digital divide."
    ]
  },
  {
    id: "finance-investment",
    title: "Finance & Investment",
    subtitle: "Building Fair and Transparent Systems",
    icon: DollarSign,
    color: "yellow",
    summary: "Financial systems play a pivotal role in shaping economies and societies. Gen Z must have access to fair, transparent financial systems that not only facilitate business but also ensure inclusive wealth distribution.",
    keyFocus: [
      "Fair access to capital for everyone",
      "Transparency in investment systems",
      "Utilizing digital assets and stablecoins for more inclusive finance"
    ],
    example: "The rise of decentralized finance (DeFi) in enabling global access to financial services without relying on centralized financial institutions.",
    details: [
      "Fair Investment Channels: Establish transparent platforms for raising capital, including crowdfunding and decentralized finance (DeFi), which remove intermediaries and give direct access to funding.",
      "Accessible Financial Tools: Promote the use of digital currencies and stablecoins to bypass traditional banking barriers and reduce costs for startups and grassroots organizations.",
      "Foreign Direct Investment (FDI): Streamline processes for attracting FDI, ensuring ease of entry, capital control flexibility, and policy stability for international investors."
    ]
  },
  {
    id: "health",
    title: "Health & Well-being",
    subtitle: "Ensuring Comprehensive Care",
    icon: Heart,
    color: "emerald",
    summary: "For any movement to succeed, the well-being of its participants must be a priority. This area focuses on ensuring that Gen Z's leadership is empowered by good physical and mental health, and that well-being is prioritized in society.",
    keyFocus: [
      "Accessible healthcare for all",
      "Mental health and well-being as part of the movement",
      "Preventive care and education"
    ],
    example: "The success of mobile health apps in South Asia that provide health consultation to rural communities.",
    details: [
      "Healthcare Access: Improve access to affordable healthcare for rural and marginalized communities. Focus on making essential services available through telemedicine, mobile clinics, and community health workers.",
      "Mental Health Support: Ensure mental health is taken as seriously as physical health by providing access to counseling, therapy, and support groups for stress, trauma, and anxiety.",
      "Preventive Healthcare: Build awareness about health education, preventive measures, and nutrition."
    ]
  },
  {
    id: "arts-culture",
    title: "Arts, Culture, and Humanities",
    subtitle: "Building Identity and Social Change",
    icon: Palette,
    color: "purple",
    summary: "Culture and the arts are powerful forms of resistance, storytelling, and movement-building. This area focuses on ensuring Gen Z's creativity is harnessed as a tool for social change while preserving heritage and embracing modern expressions.",
    keyFocus: [
      "Preserving cultural heritage while embracing modern creativity",
      "Empowering youth through artistic expression",
      "Using arts and culture to tell stories of resistance and change"
    ],
    example: "Global street art movements that amplify marginalized voices and youth creativity in protests.",
    details: [
      "Cultural Preservation & Promotion: Ensure that Nepal's diverse cultural heritage is preserved through art, music, theater, and literature while creating spaces for modern expressions.",
      "Youth as Creators: Support youth artists, musicians, and writers who are using their work to promote social change, challenge oppression, and celebrate identities.",
      "Global Platforms for Local Culture: Use digital platforms to share Nepali art with global audiences and promote cross-cultural exchanges."
    ]
  },
  {
    id: "environment",
    title: "Environmental Sustainability",
    subtitle: "Climate Justice and Green Innovation",
    icon: Leaf,
    color: "green",
    summary: "Climate change is one of the most urgent crises of our time. For Gen Z, environmental sustainability must be at the core of their leadership, ensuring that future generations inherit a livable planet.",
    keyFocus: [
      "Tackling climate change through innovative solutions",
      "Environmental justice for vulnerable communities",
      "Empowering youth as the leaders of the green revolution"
    ],
    example: "Greta Thunberg's Fridays for Future has galvanized millions of youth globally for climate action.",
    details: [
      "Sustainable Practices: Encourage eco-friendly agriculture, green energy, waste reduction, and sustainable fashion.",
      "Climate Justice: Ensure that communities most affected by climate change (e.g., rural, low-income, and minority communities) have the resources to adapt and thrive.",
      "Youth-Led Environmental Movements: Support initiatives that empower young people to advocate for environmental policy change and lead on sustainability projects."
    ]
  }
]

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200", 
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    green: "bg-green-100 text-green-700 border-green-200"
  }
  return colorMap[color as keyof typeof colorMap] || "bg-slate-100 text-slate-700 border-slate-200"
}

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-indigo-50/90 to-violet-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 border-violet-200 mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Areas of Support
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
              Building the Foundation
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              for Gen Z Leadership
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            In today's rapidly changing world, Gen Z's leadership requires support across various sectors to ensure that the movement for social, political, and economic change is both sustainable and impactful.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700" asChild>
              <Link href="#areas">
                Explore Areas <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Overview */}
      <section id="areas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Seven Key Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each area provides the foundation for Gen Z to thrive in shaping the future, while ensuring inclusivity, equity, and resilience in the face of modern challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={area.id} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(area.color)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className={`w-fit mb-2 ${getColorClasses(area.color)}`}>
                          {area.subtitle}
                        </Badge>
                        <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{area.summary}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Key Focus Areas:
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {area.keyFocus.map((focus, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-violet-500 mt-1">•</span>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Real-World Example:
                      </h5>
                      <p className="text-sm text-slate-600 italic">{area.example}</p>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/areas/${area.id}`}>
                        Learn More About {area.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Leadership is not about a single moment, but about shaping a future where all thrive."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Each area of support represents a pillar of sustainable change. Together, they form the foundation for Gen Z to build a more equitable, innovative, and resilient society.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/areas">
                Explore Each Area <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-violet-600 hover:bg-white/10" asChild>
              <Link href="/volunteer">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Make an Impact?</h3>
          <p className="text-slate-600 mb-8">
            Every area needs passionate individuals who believe in empowering Gen Z leadership. Your skills and expertise can help build the foundation for lasting change.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Users className="w-8 h-8 mx-auto mb-4 text-violet-600" />
              <h4 className="font-semibold mb-2">Volunteer</h4>
              <p className="text-sm text-slate-600 mb-4">Join a specific area and contribute your skills</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/volunteer">Volunteer Now</Link>
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Lightbulb className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
              <h4 className="font-semibold mb-2">Learn More</h4>
              <p className="text-sm text-slate-600 mb-4">Dive deeper into our principles and approach</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <ArrowRight className="w-8 h-8 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-2">Take Action</h4>
              <p className="text-sm text-slate-600 mb-4">Start supporting specific initiatives today</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/areas">View Areas</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}