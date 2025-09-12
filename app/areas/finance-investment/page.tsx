import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Globe2, 
  Coins, 
  Eye, 
  Scale, 
  Target, 
  Zap,
  UserCheck,
  Network,
  GraduationCap,
  Building,
  BookOpen,
  BarChart3,
  Wallet,
  Smartphone,
  Lock,
  PiggyBank,
  HandCoins,
  Calculator,
  ChartLine
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance & Investment: Transparent, Fair, and Accessible | Millennials4GenZ",
  description: "Empowering Gen Z with innovative financial tools and impact investment opportunities for transparent, equitable economic systems in Nepal.",
  keywords: [
    "finance Nepal",
    "investment Nepal", 
    "financial inclusion",
    "impact investing",
    "Gen Z finance",
    "microfinance Nepal",
    "digital banking",
    "cryptocurrency Nepal"
  ],
  openGraph: {
    title: "Finance & Investment: Transparent, Fair, and Accessible",
    description: "Empowering Gen Z with innovative financial tools and impact investment opportunities.",
  },
}

const corePrinciples = [
  {
    title: "Transparency & Accountability",
    icon: Eye,
    description: "Transparency is critical in financial systems — everyone should be able to see where money is flowing and understand how resources are being used.",
    points: [
      "Blockchain technology and open-source financial platforms provide a transparent and tamper-proof way of tracking transactions, ensuring that all stakeholders can access real-time data."
    ],
    example: "Nepal's RTI (Right to Information) Act, which promotes transparency in government spending, should be extended to financial systems and investment processes."
  },
  {
    title: "Equity in Access",
    icon: Scale,
    description: "Financial inclusion must be a key focus, ensuring that all groups, especially marginalized communities, have access to essential financial tools like bank accounts, loans, and investment opportunities.",
    points: [
      "Millennials can help provide Gen Z with the resources and knowledge needed to set up youth-focused savings groups, community investment platforms, and local finance networks."
    ],
    example: "In Kenya, mobile banking solutions like M-PESA have transformed the way people access financial services, even in rural areas."
  },
  {
    title: "Ethical and Impact-Driven Investment",
    icon: Target,
    description: "Impact investing involves investing in businesses, technologies, and projects that create positive social and environmental change while also providing financial returns.",
    points: [
      "The financial system should be guided by the principles of sustainability, social responsibility, and long-term growth, ensuring that profits don't come at the expense of people or the planet."
    ],
    example: "The rise of social enterprises around the world demonstrates that it is possible to create financial success while contributing to community welfare and environmental sustainability."
  },
  {
    title: "Innovation in Financial Tools",
    icon: Zap,
    description: "New financial tools like stablecoins, cryptocurrencies, and digital wallets allow Gen Z to bypass traditional banks and financial institutions, enabling them to access financial services with fewer barriers.",
    points: [
      "Decentralized finance (DeFi) platforms also offer alternative ways to raise capital, conduct transactions, and provide loans, allowing for greater financial autonomy and flexibility."
    ],
    example: "Blockchain-based stablecoins like USDC offer a stable alternative to volatile national currencies and can empower youth to transact and save securely."
  }
]

const millennialSupport = [
  {
    title: "Providing Financial Education",
    icon: GraduationCap,
    description: "Millennials can offer workshops and training programs to teach Gen Z about financial literacy, including how to budget, manage debt, invest in stocks or real estate, and use blockchain-based platforms.",
    example: "Financial literacy campaigns can be launched in schools, colleges, and communities to help young people understand the basics of saving, investing, and financial planning."
  },
  {
    title: "Connecting Gen Z to Impact Investment Networks",
    icon: Network,
    description: "Millennials can connect Gen Z innovators to impact investors, venture capitalists, and funding platforms that focus on sustainable and socially responsible investment opportunities.",
    details: [
      "Help Gen Z understand how to pitch ideas to investors who are looking for both financial returns and social impact."
    ],
    example: "Platforms like Kickstarter, Indiegogo, and Patreon offer Gen Z the chance to fund projects directly, bypassing traditional financial institutions."
  },
  {
    title: "Building Investment Platforms",
    icon: Building,
    description: "Millennials can support the development of community-driven investment platforms, crowdfunding websites, and digital cooperative funds where Gen Z can raise capital for local projects and business ideas.",
    example: "Crowdfunding platforms like GoFundMe or Indiegogo are already popular tools for young entrepreneurs to access capital — Gen Z can use these to fund social enterprises and impact-driven ventures."
  },
  {
    title: "Advocating for Fair and Transparent Financial Systems",
    icon: Shield,
    description: "Millennials can advocate for policies that ensure financial systems are accessible, transparent, and accountable to the people they serve.",
    details: [
      "This includes working on financial reforms, lobbying for better regulations, and promoting alternative financial tools (like stablecoins or microfinance)."
    ],
    example: "In Nepal, millennials can work with local government bodies to create digital financial platforms that enable youth to access financial services without the need for traditional banking."
  },
  {
    title: "Setting Up Impact Investment Funds",
    icon: HandCoins,
    description: "Millennials can help set up investment funds that focus on youth-led, impact-driven projects. These funds can provide seed capital to Gen Z innovators who are solving social, environmental, and economic problems.",
    details: [
      "Co-investment models where youth-led projects can attract matching funding from investors."
    ],
    example: "Global platforms like Acumen Fund focus on investing in social enterprises that have a measurable impact on poverty alleviation and environmental sustainability."
  }
]

const globalInspirations = [
  {
    country: "Kenya",
    title: "M-PESA Revolution",
    description: "Kenya's M-PESA, a mobile payment platform, has revolutionized financial inclusion, especially for rural populations who previously had no access to banking services.",
    icon: Smartphone
  },
  {
    country: "Bangladesh",
    title: "Microfinance Model",
    description: "The Grameen Bank model of microfinance, which provides small loans to the underbanked, has expanded globally and has inspired similar youth-driven financial inclusion models in India and Nepal.",
    icon: HandCoins
  },
  {
    country: "United States",
    title: "Impact Investing",
    description: "Organizations like Acumen Fund and ImpactAssets focus on making investments in businesses that tackle poverty, healthcare, and climate change, demonstrating that financial success and social impact can go hand-in-hand.",
    icon: Target
  },
  {
    country: "Germany",
    title: "Ethical Investment",
    description: "The Triodos Bank has demonstrated that ethical finance can yield long-term profits while funding sustainable projects that reduce environmental impact and improve social conditions.",
    icon: Shield
  }
]

const modernTools = [
  {
    title: "Cryptocurrencies & Stablecoins",
    icon: Coins,
    description: "Use blockchain and stablecoins like USDC to create transparent, secure financial systems for young people."
  },
  {
    title: "Crowdfunding Platforms",
    icon: Users,
    description: "Platforms like GoFundMe, Indiegogo, and M-PESA provide accessible tools for raising capital directly from the community."
  },
  {
    title: "Digital Wallets & Payment Systems",
    icon: Wallet,
    description: "Digital wallets like eSewa, Khalti, and IME Pay make it easy to transfer funds, pay bills, and invest without the need for traditional banking."
  },
  {
    title: "DeFi Platforms",
    icon: Lock,
    description: "Decentralized Finance (DeFi) offers peer-to-peer financial services, like lending, borrowing, and investing, without intermediaries."
  },
  {
    title: "Investment Dashboards",
    icon: BarChart3,
    description: "Tools like Mint and Personal Capital allow individuals to track investments and manage their finances digitally."
  }
]

const millennialRoles = [
  { title: "Financial Educators", description: "Provide training on personal finance, investment strategies, and impact investing.", icon: GraduationCap },
  { title: "Impact Investors", description: "Invest in youth-led, socially responsible ventures that have the potential to scale and create positive societal change.", icon: Target },
  { title: "Advisors & Mentors", description: "Help young entrepreneurs with business planning, financial forecasting, and fundraising.", icon: UserCheck },
  { title: "Ecosystem Builders", description: "Help establish networks, incubators, and funding platforms that support Gen Z entrepreneurs.", icon: Building },
  { title: "Policy Advocates", description: "Lobby for policies that make financial systems fairer and more accessible to youth and marginalized communities.", icon: Shield }
]

const participationSteps = [
  "Invest in Youth-Led Projects: Individuals can invest in youth-led ventures, whether through crowdfunding or by buying products or services from Gen Z businesses.",
  "Support Local Enterprises: Patronize and promote youth-run businesses and social enterprises in local communities, which contribute to local development and sustainable growth.",
  "Financial Literacy Advocacy: Support youth-led financial literacy programs and education campaigns aimed at empowering young people with the skills needed to manage their finances and investments.",
  "Volunteer as Mentors: Professionals in the finance industry can volunteer their time to mentor young entrepreneurs, helping them with business planning, fundraising, and financial management."
]

export default function FinanceInvestmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-yellow-50/90 to-amber-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-200 mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              💰 Finance & Investment
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-yellow-900 to-amber-900 bg-clip-text text-transparent">
                Transparent, Fair,
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                and Accessible
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Empowering Gen Z with innovative financial tools and impact investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Role of Finance in Social Change</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Financial systems are the lifeblood of any society — from local businesses to global markets, access to capital is essential for economic mobility and social impact. In Nepal, financial exclusion remains a significant challenge, particularly for marginalized communities, rural areas, and youth. Traditional banking systems often overlook the needs of these groups, while capital flight and corruption undermine the development of equitable economic systems.
              </p>
              <p>
                Gen Z in Nepal is increasingly focused on inclusive economic growth, impact investing, and financial transparency. They seek to disrupt traditional financial systems and create new pathways to wealth that are ethical, sustainable, and socially responsible.
              </p>
              <p>
                Millennials can play a pivotal role in supporting this vision by introducing innovative financial tools, impact investment practices, and policies that ensure financial equity for everyone, while keeping Gen Z at the helm of these transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Finance & Investment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building transparent, equitable, and innovative financial systems for Gen Z leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center">
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
                            <span className="text-yellow-500 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-700 font-medium">Example:</p>
                      <p className="text-sm text-yellow-600 mt-1">{principle.example}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Finance & Investment</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials, who have experience in managing resources, access to networks, and an understanding of the financial landscape, can be instrumental in supporting Gen Z's financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
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
                            <span className="text-amber-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-amber-700 font-medium">Example:</p>
                      <p className="text-xs text-amber-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate in Finance & Investment</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Finance & Investment</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful financial innovation and inclusion models around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 w-fit mx-auto mb-2">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technology for Finance & Investment</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Finance & Investment</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Finance is not just about profit, it's about creating a fair and sustainable future for all."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Finance and investment are key to empowering youth and ensuring that their ideas can transform society. Gen Z is ready to build the future with innovative business models, socially responsible investments, and equitable financial systems. Millennials can help guide and support them by providing resources, mentorship, and access to capital, ensuring that Gen Z leads with integrity and social impact at the heart of their economic systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-yellow-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=finance-investment">Volunteer for Finance</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
