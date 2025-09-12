import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Bot, 
  Shield, 
  Globe2, 
  Cpu, 
  Database, 
  Lock, 
  Eye, 
  Wifi, 
  Brain,
  UserCheck,
  Network,
  GraduationCap,
  Building,
  Zap,
  Smartphone,
  BarChart3,
  Code,
  Coins,
  Activity,
  Layers,
  MonitorSpeaker,
  Search,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontier Technology: Efficiency, Transparency, and Innovation | Millennials4GenZ",
  description: "Leveraging blockchain, AI, and digital tools to build a transparent, inclusive, and efficient future for Gen Z leadership in Nepal.",
  keywords: [
    "frontier technology Nepal",
    "blockchain Nepal", 
    "AI Nepal",
    "digital transformation",
    "Gen Z technology",
    "IoT Nepal",
    "cryptocurrency Nepal",
    "tech innovation"
  ],
  openGraph: {
    title: "Frontier Technology: Efficiency, Transparency, and Innovation",
    description: "Leveraging blockchain, AI, and digital tools to build a transparent, inclusive, and efficient future.",
  },
}

const corePrinciples = [
  {
    title: "Transparency & Trust",
    icon: Eye,
    description: "Blockchain and other decentralized technologies provide open, tamper-proof systems that allow for real-time tracking of resources, government spending, and financial transactions.",
    points: [
      "These technologies empower citizens by giving them control over their data and ensuring accountability from governments and businesses."
    ]
  },
  {
    title: "Accessibility for All",
    icon: Wifi,
    description: "For technology to be transformative, it must be accessible to everyone, including rural communities, marginalized groups, and low-income populations.",
    points: [
      "Technologies should be affordable, user-friendly, and available in local languages to avoid furthering the digital divide.",
      "Mobile-first solutions, particularly for Nepali youth in rural areas, can ensure that everyone benefits from the digital revolution."
    ]
  },
  {
    title: "Empowerment through Innovation",
    icon: Brain,
    description: "Artificial intelligence (AI), big data, and machine learning (ML) can automate processes, enhance decision-making, and provide insights that can transform businesses, healthcare, and education systems.",
    points: [
      "By integrating AI and digital technologies into social impact sectors, Gen Z can create solutions that drive positive change and tackle local challenges."
    ]
  },
  {
    title: "Ethics & Responsibility",
    icon: Shield,
    description: "With great power comes great responsibility. As Gen Z adopts frontier technologies, they must prioritize ethical considerations, such as privacy, security, and data rights.",
    points: [
      "AI and blockchain must be used responsibly, ensuring that they don't reinforce existing biases or exploit vulnerable communities."
    ]
  }
]

const millennialSupport = [
  {
    title: "Education and Mentorship",
    icon: GraduationCap,
    description: "Millennials with experience in AI, blockchain, and data science can mentor Gen Z leaders in understanding and applying these technologies.",
    details: [
      "Offer training programs on cryptocurrency, blockchain development, and AI tools that are accessible to non-technical users."
    ],
    example: "The rise of online platforms like Coursera and edX makes tech education accessible — Millennials can leverage these platforms to teach youth about cutting-edge technologies."
  },
  {
    title: "Infrastructure Development",
    icon: Building,
    description: "Help Gen Z build the technical infrastructure needed to deploy frontier technologies in real-world scenarios.",
    details: [
      "Set up workshops, hackathons, and innovation labs where young people can experiment with blockchain for transparency, AI for decision-making, and IoT for smart cities and communities."
    ],
    example: "Ethereum hackathons have provided youth with hands-on experience in creating decentralized applications (dApps) for various sectors."
  },
  {
    title: "Strategic Partnerships",
    icon: Network,
    description: "Help Gen Z connect with global tech leaders, innovators, and investors who can guide them in scaling their digital solutions.",
    details: [
      "Form partnerships with international organizations, universities, and corporations that are focused on impact-driven technology."
    ],
    example: "Millennials can link Gen Z with impact investors in the blockchain space to fund projects like transparency-focused dApps or AI tools for rural education."
  },
  {
    title: "Policy Advocacy",
    icon: UserCheck,
    description: "Advocate for policies that encourage innovation while ensuring privacy and data protection.",
    details: [
      "Millennials can work with government bodies and NGOs to create ethical frameworks for deploying AI, blockchain, and other technologies."
    ],
    example: "Countries like Estonia and Singapore have created digital innovation policies that encourage tech adoption while protecting individual rights."
  },
  {
    title: "Building Trust & Transparency",
    icon: Shield,
    description: "Work with Gen Z to develop and implement transparent governance systems using blockchain technology that ensure citizens have access to real-time information about government spending, fund allocation, and policy changes.",
    details: [],
    example: "Blockchain-based voting systems can ensure fair elections and eliminate corruption in democratic processes."
  }
]

const globalInspirations = [
  {
    country: "Estonia",
    title: "E-Residency Program",
    description: "E-Residency program allows global citizens to start businesses and access Estonian digital services from anywhere, serving as a model for digital-first nations.",
    icon: Globe2
  },
  {
    country: "India",
    title: "Aadhaar System",
    description: "India's Aadhaar project leveraged biometric data to provide universal identification and access to services, despite its controversies on privacy.",
    icon: Database
  },
  {
    country: "China",
    title: "AI in Governance",
    description: "China's AI-driven facial recognition systems have been used to create smart cities for better urban management, but raise concerns about surveillance and human rights.",
    icon: Bot
  },
  {
    country: "Finland",
    title: "AI for Education",
    description: "Finland has integrated AI tools in education, helping teachers tailor lessons to students' needs in real-time.",
    icon: Brain
  },
  {
    country: "Kenya",
    title: "M-PESA Revolution",
    description: "Kenya's mobile banking solution, M-PESA, has revolutionized financial inclusion, showing how digital financial tools can be used for social empowerment in underserved communities.",
    icon: Smartphone
  }
]

const modernTools = [
  {
    title: "Blockchain for Transparency",
    icon: Lock,
    description: "Implement blockchain technology to create immutable ledgers for voting, financial transactions, and resource distribution in governance."
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Use AI to create predictive models, recommendation engines, and automated systems for industries like healthcare, agriculture, and finance."
  },
  {
    title: "Internet of Things (IoT)",
    icon: Wifi,
    description: "Develop smart cities and connected devices to improve efficiency in energy use, waste management, and urban planning."
  },
  {
    title: "Digital Payment Systems",
    icon: Coins,
    description: "Use stablecoins and cryptocurrencies to increase access to financial systems for the unbanked population."
  },
  {
    title: "Data Visualization Tools",
    icon: BarChart3,
    description: "Use platforms like Tableau or PowerBI to create dashboards that allow citizens to visualize public data, such as government spending, resources, and policy outcomes."
  }
]

const millennialRoles = [
  { title: "Tech Mentors", description: "Provide training and mentorship on using blockchain, AI, and other emerging technologies.", icon: GraduationCap },
  { title: "Bridge Builders", description: "Connect Gen Z innovators with global tech networks, investors, and accelerators.", icon: Network },
  { title: "Advocates", description: "Work to ensure that technology is deployed ethically, respecting data privacy, transparency, and security.", icon: Shield },
  { title: "Ecosystem Builders", description: "Help build co-working spaces, innovation hubs, and tech incubators for youth-driven projects.", icon: Building },
  { title: "Fundraisers", description: "Support youth projects through impact investment, crowdfunding, and venture capital.", icon: TrendingUp }
]

const participationSteps = [
  "Adopt Tech for Good: Use digital tools to enhance community services such as healthcare, education, and local governance.",
  "Support Local Tech Startups: Patronize or invest in youth-driven tech startups that use innovative solutions to address community issues.",
  "Crowdsource Data & Feedback: Provide crowdsourced data on local challenges, such as air quality or water pollution, which can be used to inform AI models for decision-making.",
  "Civic Participation in Tech Development: Join or support hackathons, digital think tanks, and other initiatives that aim to solve local problems using emerging technologies."
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-indigo-50/90 to-purple-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 mb-6">
              <Bot className="w-4 h-4 mr-2" />
              🤖 Frontier Technology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Efficiency, Transparency,
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                and Innovation
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Leveraging blockchain, AI, and digital tools to build a transparent, inclusive, and efficient future.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Power of Frontier Technologies</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                The world is changing rapidly, with new technologies emerging every day that have the potential to transform society and empower young leaders. Frontier technologies such as blockchain, artificial intelligence (AI), IoT, and digital tools are already reshaping industries, improving governance, and tackling some of the world's most pressing challenges.
              </p>
              <p>
                For Gen Z in Nepal, these technologies are not just about innovation; they represent a new way of thinking — a digital-first approach to problem-solving that can bring about greater transparency, efficiency, and social impact. By leveraging frontier technologies, Gen Z can lead Nepal into a future where governance is decentralized, businesses are socially responsible, and resources are distributed fairly.
              </p>
              <p>
                Millennials can support Gen Z by providing mentorship in these areas, helping them navigate the complexities of new technologies, ensuring accessibility, and guiding their use in real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Frontier Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building ethical, accessible, and empowering technology solutions for Gen Z leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
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
                          <span className="text-indigo-500 mt-1">•</span>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Advancing Frontier Technology</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials can support Gen Z by providing mentorship, helping them navigate the complexities of new technologies, ensuring accessibility, and guiding their use in real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{support.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{support.description}</p>
                    {support.details && support.details.length > 0 && (
                      <ul className="space-y-1">
                        {support.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-purple-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs text-purple-700 font-medium">Example:</p>
                      <p className="text-xs text-purple-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Frontier Technology</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful technology implementations around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 w-fit mx-auto mb-2">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technologies for Gen Z</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Frontier Technology</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Bot className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Technology is a tool for innovation, but only if it is transparent, accessible, and ethical."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Frontier technologies like blockchain and AI hold the potential to radically transform Nepal's future, allowing Gen Z to lead the way in creating efficient, transparent, and equitable systems. Millennials can act as guides in empowering Gen Z to harness these technologies, ensuring they are used for social good, accessibility, and transparency, rather than reinforcing existing inequalities. Together, we can build a future where technology is both innovative and inclusive.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-indigo-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=technology">Volunteer for Technology</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
